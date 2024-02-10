import React, { useState,useEffect } from 'react';
import Dropdown from './MainDropdown';

const districts = {
  'All': ['All', 'Ariyanayagipuram', 'Ariyanayagipuram'],
  'Puthur': ['All', 'Ariyanayagipuram', 'Ariyanayagipuram'],
  'Vilathikulam': ['All', 'Ariyanayagipuram', 'Ariyanayagipuram'],
};
const cities = {
  'All': ['Daily', 'Weekly', 'Monthly'],
  'Ariyanayagipuram': ['Daily', 'Weekly', 'Monthly'],
  'Ariyanayagipuram': ['Daily', 'Weekly', 'Monthly'],
};

const MultiLevelDropdownCard = () => {
  const states = ['All', 'Puthur', 'Vilathikulam'];

  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCity, setSelectedCity] = useState('Daily');

  const [cardValue, setCardValue] = useState([100,101,102,103])

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedDistrict('All');
    setSelectedCity('Daily');
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setSelectedCity('Daily');
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    updateCardValue(city);
  };

  const updateCardValue = (city)=>{
    if(selectedState == 'All' && selectedDistrict == 'All' && city == 'Daily'){
        setCardValue([100,101,102,103])
        console.log(selectedState,selectedDistrict,selectedCity)
    }
    else if(selectedState == 'All' && selectedDistrict == 'All' && city == 'Weekly'){
      setCardValue([200,201,202,203])
    }
    else if(selectedState == 'All' && selectedDistrict == 'All' && city == 'Monthly'){
      setCardValue([300,301,302,303])
    }
    else {
      setCardValue([999,999,999,999])
    }
  }
  const card_title = ['New Benificiary', 'Crop Yield', 'Total Volunteers','Land Registered']
  const filteredDistricts = districts[selectedState] || [];
  const filteredCities = cities[selectedDistrict] || [];

  return (
    <>
    <div>

      <div className="">
          <div className='d-flex flex-column justify-content-between align-items-center my-0 my-sm-4 flex-sm-row '>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12 '>
                  <h5 className='d-none d-xl-block d-md-block'>Dashboard</h5>
              </div>

              <div className="d-flex flex-column justify-content-end col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 flex-sm-row">
                <div className='d-flex justify-content-center my-sm-0 my-2 '>
                  <Dropdown 
                  options={states}
                  onSelect={handleStateChange}
                  selectedOption={selectedState}
                  />
                  <Dropdown
                    options={filteredDistricts}
                    onSelect={handleDistrictChange}
                    selectedOption={selectedDistrict}
                  />
                </div>
                <div className='d-flex justify-content-center my-sm-0 my-2'>
                  <Dropdown
                    options={filteredCities}
                    onSelect={handleCityChange}
                    selectedOption={selectedCity}
                  />
                </div>
                </div>
          </div>
      </div>

            <div className=''>
              <div className="d-flex flex-column justify-content-between flex-sm-row mx-auto w-100 w-sm-0">
                {cardValue.map((value,index) =>(
                  <div className="card p-3 border-0 col-xl-2 col-lg-2 col-md-3 col-sm-3 my-2 d-flex align-items-stretch" style={{backgroundColor:'#f4f5fb'}}>
                      <i className="fa-solid fa-house mr-2"></i>
                          <h6 key={index}>{card_title[index]}</h6>
                      <h5 key={index}>{value}</h5>
                  </div>
                ))}
              </div>
    </div>
    </div>
    </>
  );
};

export default MultiLevelDropdownCard;
