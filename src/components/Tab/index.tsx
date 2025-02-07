import React from "react";
import Loader from "../Loader";
import TabItem, { TabItemProps } from "../TabItem";
import "./styles.css";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  loading: boolean;
  items: TabItemProps[];
}

const Tab: React.FC<TabProps> = ({
  items,
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
        {items.map((item, index) => (
          <TabItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Tab;