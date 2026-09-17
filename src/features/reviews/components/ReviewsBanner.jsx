import React from 'react';

const ReviewsBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-4">

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          TutorNext Reviews
        </h1>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] text-white/85 leading-relaxed max-w-[680px]">
          See what students have to say about their learning experiences with TutorNext. Read genuine feedback from students who have used our tutoring platform to find support, improve their understanding, and reach their academic goals.
        </p>

        {/* End tagline */}
        <span className="mt-1 text-sm sm:text-[15px] font-semibold text-white/70 italic tracking-wide">
          TutorNext Feedback from Our Students
        </span>

      </div>
    </div>
  );
};

export default ReviewsBanner;

