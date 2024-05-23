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
}

export default function Dropdown({ options, placeholder }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (option: Option | null) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        className={styles.dropdown}
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder || '옵션'}
      />
    </>
  );
}
