import React from "react";
import "./styles.css";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children, className, ...restProps }) => {
  return (
    <div className="tabs-wrapper">
      <div
        className={`tabs-container ${className}`}
        {...restProps}
      >
        {children}
      </div>
    </div>
  )
}

export default Tabs;