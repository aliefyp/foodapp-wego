import { useContext } from "react";
import ToasterContext from "../contexts/ToasterContext";

export function useToaster() {
  return useContext(ToasterContext);
}