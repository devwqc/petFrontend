import Image, { ImageProps } from 'next/image';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

interface InputProps {
  id: string;
  type: string;
  label?: string;
  value?: string | number;
  size?: string;
  border?: string;
  isError: boolean;
  errorText?: string;
  labelStyle?: string;
  placeholder: string;
  image?: Omit<ImageProps, 'src' | 'alt'>;
  background?: string;
}

const cx = classNames.bind(styles);

export default function InputLayout({
  id,
  type,
  label,
  value,
  size,
  border,
  isError,
  errorText,
  labelStyle,
  placeholder,
  image,
  background,
}: InputProps) {
  return (
    <div className={cx('inputWithLabel')}>
      {label && (
        <label htmlFor={id} className={cx(labelStyle)}>
          {label}
        </label>
      )}
      <div className={cx('inputWithIcon', size)}>
        <input value={value} className={cx(border, { error: isError }, size, background)} placeholder={placeholder} />
        {image && <Image src="/images/search.svg" alt="검색 아이콘" width={24} height={24} className={cx('icon')} />}
      </div>
      {isError && <p className={cx('errorText')}>{errorText}</p>}
    </div>
  );
}
