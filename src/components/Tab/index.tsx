import React from "react";
import Loader from "../Loader";
import "./styles.css";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  loading: boolean
}

const Tab: React.FC<TabProps> = ({
  children,
  loading,
  className,
  ...restProps
}) => {
  if (loading) {
    return (
      <div className="tab-wrapper">
        <Loader />
      </div>
    )
  }

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