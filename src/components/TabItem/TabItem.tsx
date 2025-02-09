import { useEffect, useState } from "react";
import "./TabItem.scss";

export interface TabItemProps {
  children?: React.ReactNode
  text?: string;
  active?: boolean
  onClick?: () => void
}

/**
 * A component to render a tab item. It supports keyboard navigation and
 * selection.
 *
 * @example
 * <TabItem text="Tab 1" active />
 * <TabItem onClick={() => console.log("Tab 2 clicked")}>Tab 2</TabItem>
 *
 * @prop {React.ReactNode} [children] - The content of the tab item.
 * @prop {string} [text] - The text of the tab item.
 * @prop {boolean} [active] - Whether the tab item is active. Defaults to false.
 * @prop {() => void} [onClick] - A callback when the tab item is clicked.
 */
const TabItem: React.FC<TabItemProps> = ({
  text,
  active = false,
  children,
  onClick
}) => {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.key === 'Enter' || event.key === ' ') && isFocus) {
        onClick?.()
      }
    }

    // add listener
    document.addEventListener('keydown', listener)

    // remove listener
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  return (
    <div
      className={`gtab-item ${active ? 'gtab-item--active' : ''}`}
      tabIndex={0}
      onClick={onClick}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      data-testid="tab-item"
    >
      {text || children}
    </div>
  )
}

export default TabItem