import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Typography, Button } from "@material-tailwind/react";

export const Game = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Card className="w-4/5 flex flex-row bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side - Game Intro Text */}
        <div className="w-1/2 flex flex-col justify-center p-8" data-aos="fade-right">
          <Typography variant="h3" className="font-bold text-yellow-400">
            Welcome to the Ultimate Battle Arena!
          </Typography>
          <Typography className="mt-4 text-gray-300">
            Embark on an adventure where your skills determine your fate. Fight, strategize, 
            and conquer to become the ultimate champion.
          </Typography>
     
        </div>

        {/* Right Side - Game Image & Link */}
        <div className="w-1/2 relative" data-aos="fade-left">
          <img
            src="src/assets/game/game.png"
            alt="Game Preview"
            className="w-full h-full object-cover"
          />
          <a
            href="http://192.168.43.180:3000/"
            className="absolute bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Play Now
          </a>
        </div>
      </Card>
    </div>
  );
};
