import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReviewsBanner from '../components/ReviewsBanner';
import ReviewsHeader from '../components/ReviewsHeader';
import ReviewCard from '../components/ReviewCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsSupportWidget from '../components/ReviewsSupportWidget';
import { useHomeContext } from '../../../hooks/useHomeContext';
import { reviewsHome, reviewsHome1 } from '../data/reviewsData';

const REVIEWS_PER_PAGE = 10;

const Reviews = () => {
  const { isHome1 } = useHomeContext();
  const reviews = isHome1 ? reviewsHome1 : reviewsHome;

  // ── Meta title & description ──────────────────────────────────
  useEffect(() => {
    document.title = 'Reviews | TutorsNext Reviews & Feedback';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Read TutorsNext reviews and feedback from students. Discover real learning experiences, tutor insights, and what students say about TutorsNext.'
      );
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Most Recent');
  const reviewsTopRef = useRef(null);

  // ── Sort logic ─────────────────────────────────────────────────
  const sortedReviews = useMemo(() => {
    const list = [...reviews];
    if (sortBy === 'Highest Rating') return list.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'Lowest Rating')  return list.sort((a, b) => a.rating - b.rating);
    return list; // Most Recent — keep original order
  }, [reviews, sortBy]);

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1); // reset to page 1 on sort change
  };

  const totalPages = Math.ceil(sortedReviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const paginatedReviews = sortedReviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    reviewsTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Build page number list with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc]">
      {/* Top Banner */}
      <ReviewsBanner />

      {/* Content Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column — Reviews */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Ratings header + sort */}
          <div ref={reviewsTopRef}>
            <ReviewsHeader sortBy={sortBy} onSortChange={handleSortChange} />
          </div>

          {/* Review cards — paginated */}
          {paginatedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {/* ── Pagination ───────────────────────────────────────── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">

              {/* Prev */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold border border-[#e2e8f0] bg-white text-[#64748b] hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
              >
                ← Prev
              </button>

              {/* Page numbers */}
              {getPageNumbers().map((page, idx) =>
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-2 text-[#94a3b8] font-bold select-none">
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold border transition-all duration-200 shadow-sm
                      ${currentPage === page
                        ? 'bg-primary text-white border-primary shadow-md scale-105'
                        : 'bg-white text-[#475569] border-[#e2e8f0] hover:bg-primary hover:text-white hover:border-primary'
                      }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold border border-[#e2e8f0] bg-white text-[#64748b] hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
              >
                Next →
              </button>

            </div>
          )}

          {/* Page indicator */}
          {totalPages > 1 && (
            <p className="text-center text-[12px] text-[#94a3b8]">
              Showing {startIndex + 1}–{Math.min(startIndex + REVIEWS_PER_PAGE, sortedReviews.length)} of {sortedReviews.length} reviews
            </p>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
          <WhyChooseUs />
          <ReviewsSupportWidget />
        </div>

      </div>
    </main>
  );
};

export default Reviews;
