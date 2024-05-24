import classNames from 'classnames/bind';
import ImageLayout from './ImageBoxLayout';
import styles from './ImageBox.module.scss';

const cx = classNames.bind(styles);

export default function ImageBox() {
  return (
    <>
      <ImageLayout size={cx('my')} src="/images/search.svg" alt="검색 아이콘" disabled />
    </>
  );
}
