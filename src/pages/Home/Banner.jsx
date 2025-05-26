import React from 'react';
import { motion } from "motion/react"
import Tema1 from '../../assets/Teams/team1 (1).jpg'
import Tema2 from '../../assets/Teams/team2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[96px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="flex-1">
     <motion.img
      animate={{y: [80, 150, 80]}}
      transition={{duration: 5, repeat: Infinity}}
      src={Tema1}
      className="max-w-sm border-blue-500 border-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
    />
     <motion.img
      animate={{x: [80, 150, 80]}}
      transition={{duration: 10, delay:5, repeat: Infinity}}
      src={Tema2}
      className="max-w-sm border-blue-500 border-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
    />
   </div>
    <div className='flex-1'>
       <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold">Remote <motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#33ff33', '#8a33ff'],
                                    transition: { duration: 2, repeat: Infinity }
                                }}
                        >Jobs</motion.span> For you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;