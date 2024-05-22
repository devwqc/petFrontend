import classNames from 'classnames/bind';
import InputLayout from './InputLayout';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export default function Input() {
  return (
    <>
      <InputLayout
        id=""
        type="email"
        size={cx('large')}
        isError={true}
        errorText="이메일을 확인해주세요"
        label="이메일"
        labelStyle={cx('label')}
        placeholder="이메일을 입력해주세요"
      />
      <InputLayout
        id=""
        type="text"
        size={cx('mediumLarge')}
        border={cx('roundBorder')}
        isError={false}
        errorText=""
        label=" "
        labelStyle={cx('label')}
        placeholder="검색어를 입력해주세요"
        image={{}}
        background={cx('background')}
      />
      <InputLayout
        id=""
        type="text"
        size={cx('medium')}
        border={cx('roundBorder')}
        isError={false}
        errorText=""
        label=" "
        labelStyle={cx('label')}
        placeholder="검색어를 입력해주세요"
        image={{}}
        background={cx('background')}
      />
    </>
  );
}
