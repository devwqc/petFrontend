import styles from './Button.module.scss';

interface ButtonProps {
  size: 'large' | 'medium';
  text: string;
  backgroundColor: '#545454' | '#FFFFFF';
  onClick?: () => void;
}

export default function Button({ size, text, backgroundColor, onClick }: ButtonProps) {
  const sizeClass = styles[size];
  const backgroundClass = backgroundColor === '#545454' ? styles.backgroundBlack : styles.backgroundWhite;
  const className = `${styles.button} ${sizeClass} ${backgroundClass}`;

  return (
    <>
      <div>Button</div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
