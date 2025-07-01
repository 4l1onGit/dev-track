"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentProgress(progress); // Animate to target %
    }, 100); // Small delay for smoother load

    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="relative h-5 bg-white rounded-2xl overflow-hidden shadow-sm">
      <div
        style={{ width: `${currentProgress}%` }}
        className="absolute h-full bg-gradient-to-r from-emerald-300 to-green-500 rounded-2xl transition-all duration-700 ease-out"
      />
    </div>
  );
};

export default ProgressBar;
