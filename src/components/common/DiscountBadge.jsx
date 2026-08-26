const DiscountBadge = () => (
  <div className="discount-badge" aria-label="Up to 30% off">
    <span className="discount-badge__pulse" aria-hidden="true" />
    <span className="discount-badge__pulse discount-badge__pulse--delay" aria-hidden="true" />
    <span className="discount-badge__orbit" aria-hidden="true" />

    <div className="discount-badge__face">
      <span className="discount-badge__shine" aria-hidden="true" />
      <span className="discount-badge__copy">
        <span className="discount-badge__eyebrow">UP TO</span>
        <span className="discount-badge__pct">30%</span>
        <span className="discount-badge__eyebrow">OFF</span>
      </span>
    </div>

    <span className="discount-badge__sparkle discount-badge__sparkle--tl" aria-hidden="true" />
    <span className="discount-badge__sparkle discount-badge__sparkle--br" aria-hidden="true" />
  </div>
);

export default DiscountBadge;
