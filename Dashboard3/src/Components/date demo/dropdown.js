function Dropdown({ options}) {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectOption = (option) => {
      setIsOpen(false);
    };
  
    return (
      <div className={`group-select-menu ${isOpen ? 'active' : ''}`}>
        <div className="group-select-btn" onClick={toggleDropdown} >
        <div class="vertical-line"></div>
          <span className="group-sBtn-text mx-1">1</span>
          <div className='d-flex align-items-center'>
            <i className={`bx mx-1 ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
          </div>
        </div>
  
        <ul className="group-options">
          {options.map((option, index) => (
            <li
              key={index}
              className='group-option selected'
              onClick={() => selectOption(option)}
            >
              <span className="group-option-text">{option}</span>
            </li>
          ))}
        </ul>
  
      </div>
    );
  }