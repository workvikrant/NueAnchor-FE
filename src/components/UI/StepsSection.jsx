import React from 'react';
import { Step } from './Step';

export const StepsSection = ({ title, steps }) => {
  return (
    <div className="bg-white  p-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
        {steps.map((step) => (
          <Step
            key={step.id}
            number={step.id}
            title={step.title}
            description={step.description}
            color={step.color}
          />
        ))}
      </div>
    </div>
  );
};