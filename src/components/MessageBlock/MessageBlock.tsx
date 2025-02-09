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

/**
 * A component to display a message with an optional image and action button.
 *
 * @example
 * <MessageBlock
 *   title="Test Title"
 *   message="Test Message"
 *   image="/test-image.jpg"
 *   imageAlt="Test Image"
 *   actionText="Click Me"
 *   onClick={() => console.log('clicked')}
 * />
 *
 * @param {React.ReactNode} [title] The title of the message block.
 * @param {React.ReactNode} [message] The message to display.
 * @param {string} [image] The URL of the image to display.
 * @param {string} [imageAlt] The alt text for the image.
 * @param {string} [actionText] The text to display on the action button.
 * @param {() => void} [onClick] The function to call when the action button is clicked.
 * @param {React.HTMLAttributes<HTMLDivElement>} [rest] Additional props to apply to the container.
 */
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