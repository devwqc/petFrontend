import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './ImageBox.module.scss';

interface ImageBox {
  size: string;
  src: string;
  alt: string;
  disabled?: boolean;
}

const cx = classNames.bind(styles);

export default function ImageBoxLayout({ size, src, alt, disabled, ...rest }: ImageBox) {
  return (
    <div className={cx(size, 'imageBox', { disabled })} {...rest}>
      <Image src={src} alt={alt} fill />
    </div>
  );
}
