import MainDropdown from './MainDropdown';
import { useState } from 'react';

function Dropdown({options}) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <MainDropdown
        options={options}
        onSelect={handleSelect}
        selectedOption={selectedOption}
      />
    </div>
  );
}

export default Dropdown;