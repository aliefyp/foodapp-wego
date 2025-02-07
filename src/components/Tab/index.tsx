import React from "react";
import "./styles.css";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className="tab-wrapper">
      <div
        className={`tab-container ${className}`}
        {...restProps}
      >
        {children}
      </div>
    </div>
  )
}

export default Tab;