import Button from "../Button";
import './styles.css';

interface MessageBlockProps {
  title?: string;
  message?: string;
  image?: string;
  imageAlt?: string;
  actionText?: string;
  onClick?: () => void;
}

const MessageBlock: React.FC<MessageBlockProps> = ({
  title,
  message,
  image,
  imageAlt,
  actionText,
  onClick,
}) => {
  return (
    <div className="message-block">
      {image && <img src={image} alt={imageAlt} height={80} />}
      <div className="content">
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}
      </div>
      {actionText && (
        <Button onClick={onClick || window.location.reload}>
          {actionText || 'Reload'}
        </Button>
      )}
    </div>
  );
}

export default MessageBlock;