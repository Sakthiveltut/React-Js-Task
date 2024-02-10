import React, { useState } from 'react';

function Dropdown({ options, onSelect, selectedOption,width }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setBorderColor('blue'); 
  };

  const selectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };
  const [borderColor, setBorderColor] = useState('#dcdddc');

  return (
    <div className={`select-menu ${isOpen ? 'active' : ''}`} style={{width:`${width}px`}}>
      <div className="select-btn" onClick={toggleDropdown}  style={{ border: `1px solid ${borderColor}` }}>
        <span className="sBtn-text mx-1">{selectedOption}</span>
        <div className='d-flex align-items-center'>
          <div class="vertical-line"></div>
          <i className={`bx mx-1 ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
        </div>
      </div>

      <ul className="options" style={{width:`${width}px`}}>
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
