import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Profile() {

  const userData = {
    user_type: "student",
    img_url: "https://via.placeholder.com/150", 
    personal_info: "I'm a passionate student exploring technology and AI.",
    selected_interests: ["technology_engineering", "ai"],
    skills: {
      technology_engineering: ["Python", "JavaScript", "React"],
      ai: ["TensorFlow", "PyTorch"],
    },
  };

  return (
    <div className="mt-12">
      <Card className="mx-auto max-w-4xl border border-blue-gray-100 shadow-sm">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-6 bg-gray-50 rounded-t-xl"
        >
          <Typography variant="h5" color="blue-gray">
            Your Profile
          </Typography>
          <Typography variant="small" color="gray" className="mt-1">
            A snapshot of your learning journey
          </Typography>
        </CardHeader>
        <CardBody className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <Avatar
              src={userData.img_url}
              alt="Profile"
              size="xl"
              variant="circular"
              className="border-2 border-indigo-500 shadow-md"
            />

            {/* Profile Details */}
            <div className="flex-1">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {userData.user_type.charAt(0).toUpperCase() + userData.user_type.slice(1)}
              </Typography>
              <Typography variant="paragraph" color="gray" className="mb-4">
                {userData.personal_info}
              </Typography>

              {/* Interests */}
              <div className="mb-4">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Interests
                </Typography>
                {userData.selected_interests.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {userData.selected_interests.map((interest) => (
                      <li
                        key={interest}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {interest.replace(/_/g, " ")}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="small" color="gray">
                    No interests selected.
                  </Typography>
                )}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Skills
                </Typography>
                {Object.keys(userData.skills).length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {Object.entries(userData.skills).map(([interest, skills]) => (
                      <div key={interest}>
                        <Typography variant="small" color="gray" className="font-medium">
                          {interest.replace(/_/g, " ")}
                        </Typography>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Typography variant="small" color="gray">
                    No skills selected.
                  </Typography>
                )}
              </div>

              {/* Edit Profile Button */}
              <Link to="/dashboard/personalinfo">
                <Button
                  color="indigo"
                  size="sm"
                  className="hover:bg-indigo-700 transition-colors"
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Profile;