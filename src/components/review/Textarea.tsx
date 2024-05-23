import classNames from 'classnames/bind';
import styles from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
}

const cx = classNames.bind(styles);

export default function Textarea({ className, value, onChange, isDisabled }: TextareaProps) {
  return (
    <>
      <textarea
        className={cx('textareaStyle', className)}
        placeholder={isDisabled ? '' : '리뷰를 작성해 주세요'}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </>
  );
}
