import React, { useEffect, useState } from 'react';
import './TooltipCard.css'
import DateRangePicker from '../DateRangePicker';


export function DateDropdown({options}){

    const today = new Date();

    const lastDate = ((ld) => {
      const endDate = new Date(today);
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - ld);
    
      const startDateFormatted = `${String(startDate.getDate()).padStart(2, '0')}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${startDate.getFullYear()}`;
      const endDateFormatted = `${String(endDate.getDate()).padStart(2, '0')}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${endDate.getFullYear()}`;
    
      return `${startDateFormatted} ~ ${endDateFormatted}`;
  })


  const [selectedOption, setSelectedOption] = useState(lastDate(59))


    const handleSelect = (option) => {
       
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = String(today.getDate()).padStart(2, '0');
      
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1); 
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0); 
      
        const firstDayOfMonth = `01-${String(currentMonth).padStart(2, '0')}-${currentYear}`;
        const lastDayOfMonth = new Date(currentYear, currentMonth, 0);
      
        const lastMonthStartDate = `${String(lastMonth.getDate()).padStart(2, '0')}-${String(lastMonth.getMonth() + 1).padStart(2, '0')}-${lastMonth.getFullYear()}`;
        const lastMonthEndDate = `${String(lastMonthEnd.getDate()).padStart(2, '0')}-${String(lastMonthEnd.getMonth() + 1).padStart(2, '0')}-${lastMonthEnd.getFullYear()}`;
      
        const twoMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 2, 1); 
        const twoMonthsAgoEnd = new Date(today.getFullYear(), today.getMonth() - 1, 0); 
      
        const twoMonthsAgoStartDate = `${String(twoMonthsAgo.getDate()).padStart(2, '0')}-${String(twoMonthsAgo.getMonth() + 1).padStart(2, '0')}-${twoMonthsAgo.getFullYear()}`;
        const twoMonthsAgoEndDate = `${String(twoMonthsAgoEnd.getDate()).padStart(2, '0')}-${String(twoMonthsAgoEnd.getMonth() + 1).padStart(2, '0')}-${twoMonthsAgoEnd.getFullYear()}`;


        if(option == "This Month As of this month"){
            setSelectedOption(`${firstDayOfMonth} ~ ${String(lastDayOfMonth.getDate()).padStart(2, '0')}-${String(currentMonth).padStart(2, '0')}-${lastDayOfMonth.getFullYear()}`)
        }else if(option == "This Month As of today"){
            setSelectedOption(`${firstDayOfMonth} ~ ${currentDay}-${currentMonth}-${currentYear}`)
        }else if(option == "Last Month"){
            setSelectedOption(`${lastMonthStartDate} ~ ${lastMonthEndDate}`)
        }else if(option == "Last Two Month"){
            setSelectedOption(`${twoMonthsAgoStartDate} ~ ${lastMonthEndDate}`);
        }else if(option == "Last 30 Days"){
            setSelectedOption(lastDate(29))
        }else if(option == "Last 60 Days"){
            setSelectedOption(lastDate(59))
        }
      
    };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    handleSelect(option);
    setIsOpen(false);
  };
  const [showDate, setShowDate] = useState(false)
  const handleDateRangePicker = ()=>{
    setShowDate(!showDate)
  }

  return (
    <div className='d-flex'>
      <div className={`mx-4 month-select-menu ${isOpen ? 'active' : ''}`}>
        <div className="month-select-btn" onClick={toggleDropdown}>
          <span className="month-sBtn-text mx-1">{selectedOption}</span>
          <div className='d-flex align-items-center'>
            <i className={`bx mx-1 ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
          </div>
        </div>

          <ul className="month-options bubble bubble--arrow bubble--arrow-nw">
            {options.map((option, index) => (
              <li
                key={index}
                className={`month-option ${option === selectedOption ? 'selected' : ''}`}
                onClick={() => selectOption(option)}
              >  
                <span className="month-option-text d-flex">{option}</span>  
              </li>
            ))}
            <span className='DateRangePicker'>01-10-2023 ~ 31-10-2023</span>
              <i className="fa fa-pencil p-3" aria-hidden="true" style={{color:'blue'}} onClick={handleDateRangePicker}></i>
          </ul>
      </div>
      <div>
        <div className='card bg-light ml-5 mt-5 position-absolute' style={{zIndex:'1',width:'600px',height:'380px',display:`${showDate? '' : 'none'}`}}>
          <div className='card-body'>
            <DateRangePicker/>
          </div>
        </div>
      </div>
  </div>
  );
}

export default DateDropdown;
