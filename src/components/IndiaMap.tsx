import React, { useEffect, useState } from "react";
import DatamapsIndia from "react-datamaps-india";
import states from "../data/states";

interface IndiaMapProps {
  operatingStates: string[];
  className?: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ operatingStates, className = "" }) => {
  const [regionData, setRegionData] = useState<Record<string, any>>({});

  useEffect(() => {
    const data: Record<string, any> = {};
    
    states.forEach((state) => {
      const isOperating = operatingStates.includes(state.state_name);
      data[state.state_name] = { 
        state_id: state.state_id,
        value: isOperating ? 1 : 0,
        fillKey: isOperating ? 'operating' : 'notOperating'
      };
    });
    
    setRegionData(data);
  }, [operatingStates]);

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="w-full max-w-md mx-auto">
        <div 
          className="map-no-hover"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <DatamapsIndia
            hints='false'
            regionData={regionData}
            hoverComponent={() => null}
            mapLayout={{
              title: "",
              legendTitle: "",
              startColor: "#E5E7EB",
              endColor: "#663399",
              hoverTitle: "",
              noDataColor: "#F3F4F6",
              borderColor: "#D1D5DB",
              hoverBorderColor: "#663399",
              hoverColor: "#B6A3D3",
            }}
            fills={{
              operating: "#663399",
              notOperating: "#F3F4F6",
              defaultFill: "#F3F4F6"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;