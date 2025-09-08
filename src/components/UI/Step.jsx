import React from 'react';

const colorVariants = {
  blue: 'bg-[#EBEBFF] text-[#564FFD] ',
  orange: 'bg-orange-100 text-orange-600 ',
  red: 'bg-red-100 text-red-600 ',
  green: 'bg-green-100 text-green-600 '
};

export const Step = ({ number, title, description, color }) => {
  return (
    <div className="flex items-start space-x-4 p-4  hover:bg-gray-50 transition-colors duration-200">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${colorVariants[color]}`}>
        {number}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};