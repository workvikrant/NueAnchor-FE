import React from 'react';
import { Hero } from './Hero';
import { StepsSection } from './StepsSection';

const steps = [
  {
    id: 1,
    title: 'Browse our courses',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Enroll securely online',
    color: 'orange'
  },
  {
    id: 3,
    title: 'Learn through engaging modules & practice',
    color: 'red'
  },
  {
    id: 4,
    title: 'Earn a verified certificate',
    description: '(digital & physical)',
    color: 'green'
  }
];

export const LearningPlatform = () => {
  const handleJoinClick = () => {
    console.log('Join Now clicked!');
    // Add your join logic here
  };

  return (
    <div className="min-h-screen bg-white pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 ">
          <Hero
            title="Your Learning Journey in 4 Simple Steps"
            description="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
            buttonText="Join Now"
            onButtonClick={handleJoinClick}
          />
          
          <StepsSection
            title="How It Works"
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
};