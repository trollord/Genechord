import React from "react";

interface IndiaMapProps {
  operatingStates: string[];
  className?: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ operatingStates, className = "" }) => {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="w-full max-w-md mx-auto">
        <img 
          src="/india.svg" 
          alt="Map of India showing operating states"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IndiaMap;