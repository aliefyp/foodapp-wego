import { useEffect, useState } from "react";
import "./styles.css";

interface TabProps {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

const Tab: React.FC<TabProps> = ({
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
      className={`tab-wrapper ${active ? 'active' : ''}`}
      tabIndex={0}
      onClick={onClick}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      {children}
    </div>
  )
}

export default Tab