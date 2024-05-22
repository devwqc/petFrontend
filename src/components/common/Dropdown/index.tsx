import styles from './Dropdown.module.scss';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  value: Option | null;
  onChange: (selectedOption: Option | null) => void;
  placeholder?: string;
}

export default function Dropdown({ options, value, onChange, placeholder }: DropdownProps) {
  return (
    <>
      <div>Dropdown</div>
      <div></div>
    </>
  );
}
