import { HiOutlineCheck, HiOutlineExclamation, HiOutlineXCircle } from 'react-icons/hi';
import './styles.css';

export type ToasterVariants = "success" | "error";
interface ToasterProps {
  show: boolean;
  onClose: () => void;
  message?: string;
  variant?: ToasterVariants;
}

const Toaster = ({
  show,
  message = "Something went wrong",
  variant = 'error',
  onClose,
}: ToasterProps) => {
  return (
    <div className={`toaster ${show ? "toaster--show" : ""} ${variant && `toaster--${variant}`}`}>
      {variant === "success" && <HiOutlineCheck size={20} />}
      {variant === "error" && <HiOutlineExclamation size={20} />}
      <span className='toaster__message'>{message}</span>
      <HiOutlineXCircle className='toaster__close' size={20} onClick={onClose} />
    </div>
  );
};

export default Toaster;