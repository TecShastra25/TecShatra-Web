import { forwardRef } from 'react';

const Button = forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
    {...props}
  />
));
Button.displayName = 'Button';

export { Button };