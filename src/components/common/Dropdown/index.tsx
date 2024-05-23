import React, { useState } from 'react';
import Select from 'react-select';
import styles from './Dropdown.module.scss';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  size: 'large' | 'small';
  [key: string]: any;
}

export default function Dropdown({ size, options, placeholder, ...rest }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const sizeClass = styles[size];

  const handleChange = (option: Option | null) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <>
      <input type="hidden" value={selectedOption?.value} {...rest} />
      <Select
        className={`${styles.dropdown} ${sizeClass}`}
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder || '옵션'}
      />
    </>
  );
}
