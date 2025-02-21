import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
} from "@material-tailwind/react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI("AIzaSyDGw_PMvwBXacvyTHWF8JWBk_hL9DSP-vk");

export function Notifications() {
  const [course, setCourse] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRoadmap = async () => {
    if (!course.trim()) return;
    setLoading(true);
    setError(null);
    setRoadmap("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      // Ensure the AI provides YouTube links properly formatted
      const prompt = `Generate a structured learning roadmap for "${course}" with:
      - Key learning steps, each in a Markdown list.
      - Courses, books, and YouTube videos.
      - Provide YouTube links **in Markdown format** using: [Video Title](https://www.youtube.com/watch?v=VIDEO_ID).
      - Ensure the response is fully formatted in Markdown.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setRoadmap(text);
    } catch (err) {
      console.error("Error fetching roadmap:", err);
      setError("Failed to generate roadmap.");
    } finally {
      setLoading(false);
    }
  };

  // Custom Markdown Component for embedding YouTube videos
  const MarkdownComponents = {
    a: ({ href, children }) => {
      const youtubeMatch = href.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
      );
      if (youtubeMatch) {
        return (
          <div className="relative aspect-video my-4">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
              title={children}
              allowFullScreen
            />
          </div>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {children}
        </a>
      );
    },
  };

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8 p-4">
      {/* Input Section */}
      <Card className="shadow-lg border border-gray-200">
        <CardHeader color="transparent" floated={false} shadow={false} className="m-0 p-4">
          <Typography variant="h5" color="blue-gray">
            Generate Your Learning Roadmap
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <Input
            type="text"
            label="Enter Course Name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mb-4"
          />
          <Button color="blue" onClick={fetchRoadmap} disabled={loading} className="font-bold">
            {loading ? "Generating..." : "Generate Roadmap"}
          </Button>
        </CardBody>
      </Card>

      {/* Roadmap Section */}
      {roadmap && (
        <Card className="shadow-lg border border-gray-200">
          <CardHeader color="transparent" floated={false} shadow={false} className="m-0 p-4">
            <Typography variant="h5" color="blue-gray">
              Your Personalized Learning Roadmap
            </Typography>
          </CardHeader>
          <CardBody className="p-4 prose max-w-full prose-lg">
            <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm, remarkBreaks]}>
              {roadmap}
            </ReactMarkdown>
          </CardBody>
        </Card>
      )}

      {/* Error Message */}
      {error && <Alert color="red">{error}</Alert>}
    </div>
  );
}

export default Notifications;
