import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import axios from "axios";
  import { Select, Option } from "@material-tailwind/react";
  
  export function Course() {
    const [category, setCategory] = useState("");
    const [topic, setTopic] = useState("");
    const [level, setLevel] = useState("");
    const [duration, setDuration] = useState("");
    const [noOfChapters, setNoOfChapters] = useState("");
    const [courseData, setCourseData] = useState(null);
  
    const generateCourse = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:2000/generate_course", {
          category,
          topic,
          level,
          duration,
          no_of_chapters: noOfChapters,
        });
        setCourseData(response.data.chapters);
      } catch (error) {
        console.error("Error generating course:", error);
      }
    };
  
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <Card className="w-full max-w-2xl p-6 shadow-lg rounded-lg bg-white">
          <CardHeader className="text-center">
            <Typography variant="h4" className="text-gray-800 font-bold">
              Generate a Course
            </Typography>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 gap-4">
            <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <Option value="Technology">Technology</Option>
            <Option value="Business">Business</Option>
            <Option value="Health">Health</Option>
            <Option value="Finance">Finance</Option>
            <Option value="Education">Education</Option>
          </Select>

          {/* Topic Input */}
          <Input
            type="text"
            label="Topic"
            color="gray"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          {/* Level Selection */}
          <Select label="Level" value={level} onChange={(e) => setLevel(e.target.value)}>
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
          </Select>

          {/* Duration Selection */}
          <Select label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
            <Option value="30 minutes">30 minutes</Option>
            <Option value="1 hour">1 hour</Option>
            <Option value="2 hours">2 hours</Option>
            <Option value="5 hours">5 hours</Option>
            <Option value="10 hours">10 hours</Option>
          </Select>

          {/* Number of Chapters Input */}
          <Input
            type="number"
            label="Number of Chapters"
            color="gray"
            value={noOfChapters}
            onChange={(e) => setNoOfChapters(Number(e.target.value))}
          />
            </div>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button
              className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 py-2 rounded-md"
              onClick={generateCourse}
            >
              Generate Course
            </Button>
          </CardFooter>
        </Card>
  
        {courseData && (
          <div className="mt-8 w-full max-w-3xl">
            <Typography variant="h5" className="text-center text-gray-800 font-semibold">
              Generated Course
            </Typography>
            {courseData.map((chapter, index) => (
              <Card key={index} className="mt-4 shadow-md rounded-lg bg-white p-4">
                <CardBody>
                  <Typography variant="h6" className="text-gray-900 font-bold">
                    {chapter.title}
                  </Typography>
                  <Typography className="text-gray-700">{chapter.description}</Typography>
                  <Typography className="text-gray-600 mt-2">
                    <strong>Duration:</strong> {chapter.duration}
                  </Typography>
                  {chapter.video_url && (
                    <div className="mt-4 flex justify-center">
                      <iframe
                        width="100%"
                        height="250"
                        className="rounded-lg shadow-md"
                        src={chapter.video_url}
                        title={chapter.video_title}
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Course;
  

