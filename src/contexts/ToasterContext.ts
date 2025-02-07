import { createContext } from "react";
import { ToasterVariants } from "../components/Toaster";


interface ToasterContextInterface {
  isOpen: boolean;
  close: () => void;
  open: (attr: ToasterAttributes | string) => void;
}

export interface ToasterAttributes {
  message?: string;
  variant?: ToasterVariants;
  autoClose?: boolean;
  autoCloseDuration?: number;
}

const ToasterContext = createContext({} as ToasterContextInterface);

export default ToasterContext;
