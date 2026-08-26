import React from 'react';
import Icon from '../../../components/common/Icon.jsx';
import { reviews } from '../../../config/sectionIcons.js';

const ReviewCard = ({ review }) => {
  const { initial, name, title, time, rating, text } = review;

  return (
    <div className="bg-white rounded-[20px] border border-[#f1f5f9] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-4 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,132,199,0.08)] hover:border-primary-border transition-all duration-300">

      {/* Top row: avatar + name + time */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
            {initial}
          </div>

          {/* Name + title */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-[#0f172a] text-[14.5px]">{name}</span>
              <span className="text-primary text-[12px] font-semibold flex items-center gap-0.5">
                <Icon icon={reviews.verified} className="w-3 h-3" />
                verified
              </span>
            </div>
            <span className="text-[13px] font-bold text-[#0f172a]">{title}</span>
          </div>
        </div>

        {/* Time */}
        <span className="text-[12px] text-[#94a3b8] shrink-0">{time}</span>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} icon={reviews.star} className="w-4 h-4 text-amber-400" fill="currentColor" />
        ))}
        <span className="text-[#0f172a] font-bold text-xs ml-1">{rating}.0</span>
      </div>

      {/* Review text */}
      <p className="text-[#475569] text-[13.5px] leading-relaxed">{text}</p>

    </div>
  );
};

export default ReviewCard;
