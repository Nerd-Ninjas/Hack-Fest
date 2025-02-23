import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Typography } from "@material-tailwind/react";
import gameImage from "../assets/game/game.png"; // Ensure correct path


export const Game = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 px-6 md:px-12 overflow-hidden">
      <Card
        className="w-full md:w-4/5 flex flex-col md:flex-row bg-gray-950/95 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700/70 hover:shadow-blue-900/30 transition-all duration-500"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {/* Left Side - Game Intro */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-60 animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
          <Typography
            variant="h2"
            className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-800 tracking-wide animate-text-gradient"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Conquer the Cosmic Arena
          </Typography>
          <Typography
            className="mt-5 text-black-400 text-lg md:text-xl leading-relaxed opacity-85"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Step into a shadowy realm of battle where cunning, strength, and cosmic might reign supreme. Forge your legacy in the dark expanse!
          </Typography>

          {/* Action Button */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="800">
            <a
              href="http://192.168.43.180:3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-4 text-lg font-bold text-gray-100 bg-gradient-to-r from-blue-800 to-purple-900 rounded-xl shadow-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Play Now</span>
              <span className="absolute inset-0 bg-gray-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-105"></span>
            </a>
          </div>
        </div>

        {/* Right Side - Game Image with Enhanced Effects */}
        <div
          className="w-full md:w-1/2 relative flex justify-center items-center p-4 md:p-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* Glowing Background Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-gray-900/40 opacity-75 blur-3xl animate-glow"
            style={{ animationDuration: "7s" }}
          ></div>
          <img
            src={gameImage}
            alt="Game Preview"
            className="relative w-full h-full object-cover rounded-2xl md:rounded-r-3xl border border-gray-700/60 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-blue-800/40"
          />
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-900/30 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-900/30 rounded-tr-3xl"></div>
        </div>
      </Card>
    </div>
  );
};