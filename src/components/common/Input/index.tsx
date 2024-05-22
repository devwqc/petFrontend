import classNames from 'classnames/bind';
import InputLayout from './InputLayout';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export default function Input() {
  return (
    <InputLayout
      id=""
      type=""
      style={cx('large')}
      isError={true}
      errorText="이메일을 확인해주세요"
      label="이메일"
      labelStyle={cx('label')}
      placeholder="이메일을 입력해주세요"
    />
  );
}
