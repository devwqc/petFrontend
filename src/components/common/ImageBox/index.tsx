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

export default function ImageBox({ size, src, alt, disabled, ...rest }: ImageBox) {
  return (
    <>
      {disabled && <div className={cx('disabled', size)} />}
      <div className={cx('imageBox', size)} {...rest}>
        <Image src={src} alt={alt} fill />
      </div>
    </>
  );
}

{
  /* 사용법
  <ImageBox size={'my'} src="/images/search.svg" alt="검색 아이콘" disabled />
  <ImageBox size={'my'} src="/images/search.svg" alt="검색 아이콘" />
  */
}
