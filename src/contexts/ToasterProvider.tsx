import React, { useEffect, useState } from "react";
import Toaster from "../components/Toaster";
import ToasterContext, { ToasterAttributes } from "./ToasterContext";

interface ToasterProviderProps {
  children: React.ReactNode;
}

const DEFAULT_ATTRIBUTE = {
  message: "Info",
  autoClose: true,
  autoCloseDuration: 3000,
};


const ToasterProvider = ({ children }: ToasterProviderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [attributes, setAttributes] =
    useState<ToasterAttributes>(DEFAULT_ATTRIBUTE);

  const close = () => {
    setOpen(false);
  };

  const open = (attr: ToasterAttributes | string) => {
    setOpen(true);

    if (typeof attr === 'string') {
      setAttributes({
        ...DEFAULT_ATTRIBUTE,
        message: attr
      })
    } else {
      setAttributes({
        ...DEFAULT_ATTRIBUTE,
        ...attr,
      });
    }
  };

  useEffect(() => {
    if (attributes.autoClose && isOpen) {
      const duration = attributes.autoCloseDuration || 3000;
      const autoClose = setTimeout(() => close(), duration);
      return () => clearTimeout(autoClose);
    }
  }, [attributes, isOpen]);

  return (
    <ToasterContext.Provider value={{ open, close, isOpen }}>
      {children}
      <Toaster
        show={isOpen}
        onClose={close}
        message={attributes.message}
        variant={attributes.variant}
      />
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
