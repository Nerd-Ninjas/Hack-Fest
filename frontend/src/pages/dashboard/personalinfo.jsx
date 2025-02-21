import React, { useState } from "react";
import axios from "axios";
import { interestsData } from "../../components/Constants";

const PersonalInfo = () => {
  const [userType, setUserType] = useState("");
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Toggle interest selection (max 2)
  const handleInterestChange = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      setSelectedSkills((prev) => {
        const newSkills = { ...prev };
        delete newSkills[interest];
        return newSkills;
      });
    } else if (selectedInterests.length < 2) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Toggle skill selection for an interest
  const handleSkillChange = (interest, skill) => {
    setSelectedSkills((prev) => {
      const skills = prev[interest] || [];
      return {
        ...prev,
        [interest]: skills.includes(skill)
          ? skills.filter((s) => s !== skill)
          : [...skills, skill],
      };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      user_type: userType,
      personal_info: bio,
      img_url: image || "",
      selected_interests: selectedInterests,
      interest_categories: Object.keys(selectedSkills),
      skills: selectedSkills,
    };

    try {
      setLoading(true);
      console.log("Submitting data:", JSON.stringify(userData, null, 2)); // Pretty-print payload
      const response = await axios.post(
        "http://127.0.0.1:2000/info/userinfo",
        userData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("Response:", response.data);
      alert("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
      alert(
        `Error: ${
          error.response?.data?.error || error.message || "Something went wrong"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md p-6 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {/* User Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          User Type:
        </label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Image:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mt-2 w-24 h-24 rounded-md object-cover"
          />
        )}
      </div>

      {/* Bio */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself..."
          required
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Interests */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Skills and Interests</h3>
        <label className="block text-sm font-medium text-gray-700">
          Select Your Interests (Max 2):
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {Object.keys(interestsData).map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestChange(interest)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                selectedInterests.includes(interest)
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {interest.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      {selectedInterests.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Select Relevant Skills</h3>
          {selectedInterests.map((interest) => (
            <div key={interest} className="mb-4">
              <h4 className="text-md font-medium mb-2">
                {interest.replace(/_/g, " ")}
              </h4>
              {interestsData[interest].map(({ value, text, utilities }) => (
                <div key={value} className="mb-2">
                  <h5 className="text-sm font-medium mb-1">{text}</h5>
                  <div className="flex flex-wrap gap-2">
                    {utilities.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillChange(interest, skill)}
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          selectedSkills[interest]?.includes(skill)
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default PersonalInfo;