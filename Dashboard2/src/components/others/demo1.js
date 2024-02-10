import React, { useState } from 'react';

// Dropdown component
function Dropdown({ options, onSelect }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const handleSelect = (level, option) => {
    const updatedOptions = { ...selectedOptions, [level]: option };
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  const renderOptions = (level, options) => {
    return (
      <select
        value={selectedOptions[level] || ''}
        onChange={(e) => handleSelect(level, e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {renderOptions('level1', options.level1)}
      {selectedOptions.level1 && renderOptions('level2', options.level2[selectedOptions.level1])}
      {selectedOptions.level2 && renderOptions('level3', options.level3[selectedOptions.level2])}
      {selectedOptions.level3 && renderOptions('level4', options.level4[selectedOptions.level3])}
    </div>
  );
}

// Card component
function Card({ text }) {
  return (
    <div className="card">
      <div className="card-body">
        <p>{text}</p>
      </div>
    </div>
  );
}

// App component
function App() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const handleOptionSelect = (options) => {
    setSelectedOptions(options);
  };

  const cardText = `Selected Options: ${Object.values(selectedOptions).join(' > ')}`;

  return (
    <div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <Card text={cardText} />
    </div>
  );
}

const options = {
  level1: ['Option A', 'Option B'],
  level2: {
    'Option A': ['Suboption A1', 'Suboption A2'],
    'Option B': ['Suboption B1', 'Suboption B2'],
  },
  level3: {
    'Suboption A1': ['Subsuboption A1a', 'Subsuboption A1b'],
    'Suboption A2': ['Subsuboption A2a', 'Subsuboption A2b'],
    'Suboption B1': ['Subsuboption B1a', 'Subsuboption B1b'],
    'Suboption B2': ['Subsuboption B2a', 'Subsuboption B2b'],
  },
  level4: {
    'Subsuboption A1a': ['Leaf A1a1', 'Leaf A1a2'],
    'Subsuboption A1b': ['Leaf A1b1', 'Leaf A1b2'],
    'Subsuboption A2a': ['Leaf A2a1', 'Leaf A2a2'],
    'Subsuboption A2b': ['Leaf A2b1', 'Leaf A2b2'],
    'Subsuboption B1a': ['Leaf B1a1', 'Leaf B1a2'],
    'Subsuboption B1b': ['Leaf B1b1', 'Leaf B1b2'],
    'Subsuboption B2a': ['Leaf B2a1', 'Leaf B2a2'],
    'Subsuboption B2b': ['Leaf B2b1', 'Leaf B2b2'],
  },
};

export default App;
