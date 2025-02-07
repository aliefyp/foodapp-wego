import { useEffect, useState } from "react";
import "./TabItem.scss";

export interface TabItemProps {
  children?: React.ReactNode
  text?: string;
  active?: boolean
  onClick?: () => void
}

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