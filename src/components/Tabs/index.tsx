import React from "react";
import "./styles.css";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children, className, ...restProps }) => {
  return (
    <div
      className={`tabs-wrapper ${className}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Tabs;