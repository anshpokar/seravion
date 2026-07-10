import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Global layout container — mirrors the navbar's exact max-width and
 * responsive horizontal padding so every section aligns with the
 * navbar's left and right edges at every breakpoint.
 *
 * Navbar uses: max-w-[1600px] w-full mx-auto px-6 md:px-10 lg:px-12
 */
const Container = ({ children, className = "", as: Tag = "div" }: ContainerProps) => {
  return (
    <Tag className={`w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;
