import React from 'react';
import { motion } from "motion/react"
import BannerPic from '../../assets/Teams/person-playing-3d-video-games-device.jpg'
const Banner2 = () => {
    return (
       <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 4 } }}
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="h-[300px] text-neutral-content text-center">
        <div className="max-w-md">
          <div className="flex-1">
            <motion.h1 className="text-5xl font-bold">
              Remote{" "}
              <motion.span
                animate={{
                  color: ["#ff5733", "#33ff33", "#8a33ff"],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                Jobs
              </motion.span>{" "}
              For you!
            </motion.h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </motion.div>
    );
};

export default Banner2;