import classNames from 'classnames/bind';
import styles from './Input.module.scss';

interface InputProps {
  id: string;
  type: string;
  label?: string;
  value?: string | number;
  style?: string;
  isError: boolean;
  errorText?: string;
  labelStyle?: string;
  placeholder: string;
}

const cx = classNames.bind(styles);

export default function InputLayout({
  id,
  type,
  label,
  value,
  style,
  isError,
  errorText,
  labelStyle,
  placeholder,
}: InputProps) {
  return (
    <div className={cx('inputWithLabel')}>
      {label && (
        <label htmlFor={id} className={cx(labelStyle)}>
          {label}
        </label>
      )}
      <input id={id} type={type} value={value} className={cx({ error: isError }, style)} placeholder={placeholder} />
      {isError && <p className={cx('errorText')}>{errorText}</p>}
    </div>
  );
}
