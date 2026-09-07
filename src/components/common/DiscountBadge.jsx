const DiscountBadge = ({ discount = '50%' } = {}) => (
  <div className="discount-badge" aria-label={`Up to ${discount} off`}>
    <span className="discount-badge__pulse" aria-hidden="true" />
    <span className="discount-badge__pulse discount-badge__pulse--delay" aria-hidden="true" />
    <span className="discount-badge__orbit" aria-hidden="true" />

    <div className="discount-badge__face">
      <span className="discount-badge__shine" aria-hidden="true" />
      <span className="discount-badge__copy">
        <span className="discount-badge__pct">{discount}</span>
        <span className="discount-badge__eyebrow">OFF</span>
      </span>
    </div>

    <span className="discount-badge__sparkle discount-badge__sparkle--tl" aria-hidden="true" />
    <span className="discount-badge__sparkle discount-badge__sparkle--br" aria-hidden="true" />
  </div>
);

export default DiscountBadge;
