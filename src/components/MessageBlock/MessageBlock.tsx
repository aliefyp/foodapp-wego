import Button from "../Button/Button";
import './MessageBlock.scss';

interface MessageBlockProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...rest
}) => {
  return (
    <div className="message-block" {...rest}>
      {image && (
        <img
          className="message-block__image"
          src={image}
          alt={imageAlt}
          height={80}
        />
      )}
      <div className="message-block__content">
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