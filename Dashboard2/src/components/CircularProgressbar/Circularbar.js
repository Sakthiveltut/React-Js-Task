import { useState,useEffect } from 'react';
import React from 'react';
import MainCircularBar from './MainCircularbar';

function CircularBar({options}) {
  const [percentage, setPercentage] = useState(options[0]);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('1');

  const handleRadioBtnChange = (e) => {
    setSelectedRadioBtn(e.target.value);
  };

  const updatePercentage = () => {
    if (selectedRadioBtn === '1') {
      setPercentage(options[0]);
    } else {
      setPercentage(options[1]);
    }
  };

  useEffect(() => {
    updatePercentage();
  }, [selectedRadioBtn]);

  return (
    <>
    <div className=' d-flex flex-column flex-xl-row justify-content-center'>
      <div className='col-xl-8 col-12'>
      <MainCircularBar percentage={percentage} />
      </div>
      <div class="d-flex flex-column justify-content-center col-xl-5 col-12 my-4 my-sm-0 mx-4 mx-sm-0" id="circularBar" >
          <label className="custom-radio">
            <input type="radio" name="custom" value="1" checked={selectedRadioBtn === '1'} onChange={handleRadioBtnChange} />
            <span className="radio-button"></span>
            <span className="radio-label" style={{fontSize:'12px'}}>Affected Area</span>
          </label>

          <label className="custom-radio">
            <input type="radio" name="custom" value="2" checked={selectedRadioBtn === '2'} onChange={handleRadioBtnChange} />
            <span className="radio-button"></span>
            <span className="radio-label" style={{fontSize:'12px'}}>Unaffected Area</span>
          </label>
      </div>
      </div>
    </>
  );
}

export default CircularBar;
