import { ReactNode } from "react";

const Highlight = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <span className={`text-secondary font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Highlight;
