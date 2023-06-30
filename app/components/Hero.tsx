'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="box"
      children={
        <section className="border-2 border-black rounded-md h-[22rem] mb-8"></section>
      }
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
};

export default Hero;
