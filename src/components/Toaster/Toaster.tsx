import { HiOutlineCheck, HiOutlineExclamation, HiOutlineXCircle } from 'react-icons/hi';
import './Toaster.scss';

export type ToasterVariants = "success" | "error";
interface ToasterProps {
  show: boolean;
  onClose: () => void;
  message?: string;
  variant?: ToasterVariants;
}

/**
 * A notification component that will be displayed at the bottom right of the page.
 * It can be used to communicate success or error messages to the user.
 *
 * @example
 * <Toaster show={true} message="This is a success message" variant="success" onClose={() => {}} />
 *
 * @param {boolean} show - Whether or not the toaster should be displayed
 * @param {string} [message="Something went wrong"] - The message to be displayed in the toaster
 * @param {ToasterVariants} [variant="error"] - The variant of the toaster, either "success" or "error"
 * @param {() => void} onClose - The function to be called when the close button is clicked
 */
const Toaster = ({
  show,
  message = "Something went wrong",
  variant = 'error',
  onClose,
}: ToasterProps) => {
  return (
    <div
      className={`toaster ${show ? "toaster--show" : ""} ${variant && `toaster--${variant}`}`}
      data-testid="global-toaster"
    >
      {variant === "success" && <HiOutlineCheck size={20} />}
      {variant === "error" && <HiOutlineExclamation size={20} />}
      <span className='toaster__message'>{message}</span>
      <HiOutlineXCircle
        className='toaster__close'
        size={20}
        onClick={onClose}
        data-testid="global-toaster-close"
      />
    </div>
  );
};

export default Toaster;