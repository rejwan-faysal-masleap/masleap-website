'use client';

import { motion } from 'framer-motion';

export default function Spotlight() {
  return (
    <div className="relative w-full h-64 bg-gray-900 overflow-hidden rounded-xl">
      <motion.div
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-40"
      />
      <div className="relative z-10 text-white p-8 text-xl font-semibold">
        Aceternity Spotlight Effect
      </div>
    </div>
  );
}
