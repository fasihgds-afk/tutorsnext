/**
 * Renders a Lucide icon component with optional className.
 */
export default function Icon({ icon: IconComponent, className = 'w-5 h-5', ...props }) {
  if (!IconComponent) return null;
  return <IconComponent className={className} aria-hidden="true" {...props} />;
}
