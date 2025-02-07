import { useEffect, useState } from "react";
import "./styles.css";

interface TabItemProps {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

const TabItem: React.FC<TabItemProps> = ({
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
      className={`tab-item ${active ? 'active' : ''}`}
      tabIndex={0}
      onClick={onClick}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      {children}
    </div>
  )
}

export default TabItem