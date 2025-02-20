import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  
  { id: 1, title: "React.js Development", image: "src/assets/course/reactjs.png", category: "Tech" },
  { id: 2, title: "Python for AI", image: "src/assets/course/python.webp", category: "Tech" },
  { id: 3, title: "Web 3.0 & Blockchain", image: "src/assets/course/web3.webp", category: "Tech" },
  { id: 4, title: "Cyber Security Basics", image: "src/assets/course/cyber.jpg", category: "Tech" },
  
  
  { id: 5, title: "Maths", image: "src/assets/course/maths.jpeg", category: "Other" },
  { id: 6, title: "Digital Marketing Pro", image: "src/assets/course/digital.jpeg", category: "Other" },
  { id: 7, title: "Music Production Basics", image: "src/assets/course/music.jpeg", category: "Other" },
  { id: 8, title: "Photography Essentials", image: "src/assets/course/photo.webp", category: "Other" }
];

export const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-[#1e1e2e] to-[#0f172a] text-white py-12 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
        Explore Our Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div 
            key={course.id} 
            className="group relative bg-[#2a2a40] rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105" 
            data-aos="fade-up"
          >
            
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />

            
            <div className="p-4 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-lg font-bold">{course.title}</h2>
              <p className="text-sm text-gray-300">{course.category} Course</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
