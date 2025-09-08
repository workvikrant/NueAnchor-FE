import React from 'react';

export const Hero = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="w-[450px] h-[270px] font-baskerville bg-gradient-to-br from-blue-600 to-blue-700 rounded-[8px] p-8 text-white shadow-xl">
      <h1 className="text-3xl font-bold mb-4 leading-tight">
        {title}
      </h1>
      <p className=" font-Figtree text-white mb-8 text-[12px] leading-relaxed max-w-md">
        {description}
      </p>
      <button
        onClick={onButtonClick}
        className="bg-white font-Figtree text-blue-600 px-8 py-3 rounded-lg  hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        {buttonText}
      </button>
    </div>
  );
};