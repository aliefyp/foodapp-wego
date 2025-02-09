import React from "react";
import Loader from "../Loader/Loader";
import TabItem, { TabItemProps } from "../TabItem/TabItem";
import "./Tab.scss";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  items: TabItemProps[];
}

/**
 * A Tab component that renders a set of TabItem components.
 * 
 * @example
 * <Tab items={[{ text: "Tab 1" }, { text: "Tab 2" }]} />
 *
 * @prop {boolean} [loading=false] - Whether to show a loading animation.
 * @prop {TabItemProps[]} items - An array of TabItemProps objects
 * @prop {string} [className] - Additional class names to add to the container div.
 * @prop {React.HTMLAttributes<HTMLDivElement>} ...restProps - Additional props to pass to the container div.
 *
 */
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
    <div className="gtabs">
      <div
        className={`gtabs__container ${className || ''}`}
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