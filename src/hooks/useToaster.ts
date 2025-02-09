import { useContext } from "react";
import ToasterContext from "../contexts/ToasterContext";

/**
 * A hook to access the ToasterContext.
 *
 * @returns The ToasterContextInterface value, which is an object that contains
 *          the following properties:
 *          - `isOpen`: A boolean indicating whether the toaster is open.
 *          - `close`: A callback function to close the toaster.
 *          - `open`: A callback function to open the toaster.
 */
export function useToaster() {
  return useContext(ToasterContext);
}