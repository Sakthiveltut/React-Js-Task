import React, { useState } from 'react';

function Dropdown({ options, onSelect, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`mx-2 select-menu ${isOpen ? 'active' : ''}`} >
      <div className="select-btn" onClick={toggleDropdown}>
        <span className="sBtn-text">{selectedOption}</span>
        <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
      </div>

      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${option === selectedOption ? 'selected' : ''}`}
            onClick={() => selectOption(option)}
          >
            <span className="option-text">{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
