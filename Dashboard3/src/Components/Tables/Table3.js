import React, { useState } from 'react';

const App = ({handlePopup}) => {

  const initialData = [
    {
      key: '1',
      name: 'FGV RUBBER INDUSTRIES SDN BHD',
      daysWithoutShipment: 101,
      lastShipmentPostDate: '16-08-2023',
      ignore: false,
    },
    {
      key: '2',
      name: 'ALPHA INTEGRATED MANAGEMENT',
      daysWithoutShipment: 105,
      lastShipmentPostDate: '12-08-2023',
      ignore: false,
    },
    {
      key: '3',
      name: 'WIPRO MANUFACTURING (LDW) SDN BHD',
      daysWithoutShipment: 106,
      lastShipmentPostDate: '11-08-2023',
      ignore: false,
    },
    {
      key: '4',
      name: 'RP CHEMICALS (M) SDN BHD',
      daysWithoutShipment: 109,
      lastShipmentPostDate: '08-08-2023',
      ignore: false,
    },
  ]

  const [dataState1, setDataState1] = useState(initialData);
  const [dataState2, setDataState2] = useState([]);
  const [allData, setAllData] = useState([...dataState1,...dataState2]);
  const [activeState, setActiveState] = useState(1);

  const handleCheckboxChange = (key) => {
    const updateState1 = ()=>{
      const updatedDataState1 = dataState1.filter((item) => item.key !== key);
      const selectedRow = dataState1.find((item) => item.key === key);
      setDataState1(updatedDataState1);
      selectedRow.ignore = !selectedRow.ignore;
      setDataState2([...dataState2, selectedRow]);
    }
    const updateState2 = ()=>{
      const updatedDataState2 = dataState2.filter((item) => item.key !== key);
      const selectedRow = dataState2.find((item) => item.key === key);
      selectedRow.ignore = !selectedRow.ignore;
      setDataState2(updatedDataState2);
      setDataState1([...dataState1, selectedRow]);
    }

    if (activeState === 1) {
      updateState1()
    } else if(activeState === 2) {
      updateState2()
    }else if(activeState === 3){     
      const selectedRow = allData.find((item) => item.key === key);
      console.log(selectedRow.ignore)
      if(selectedRow.ignore){
        updateState2()
      }else{
        updateState1()
      }
    }
  };

  const handleSwitchToState1 = () => {
    setActiveState(1);
  };

  const handleSwitchToState2 = () => {
    setActiveState(2);
  };

  const handleShowAll = () => {
    setActiveState(3);
    setAllData([...dataState1,...dataState2]);
  };

  const [selectedToggleBtn, setSelectedToggleBtn] = useState('1');

  const handleToggleBtnChange = (e) => {
    setSelectedToggleBtn(e.target.value);
  };

  return (
    <div className='card position-absolute my-4' style={{width:'600px',zIndex:'1',top:''}}>

      <div className='d-flex justify-content-between'>   
        <div className='card-title mx-3 mt-3'>Lost Customers Details</div>
        <button type="button" class="mt-3 mr-3 btn-close shadow-none text-dark" aria-label="Close" style={{fontSize:'10px'}} onClick={handlePopup}></button>      
      </div>
      <hr className='bg-dark'/>
        <div className='card-body'>
        <div className="radio-group">
            <label className="radio-button b1">
                <input type="radio" name='All' value='0' checked={selectedToggleBtn=='0'} onClick={handleToggleBtnChange} />
                <span className="radio-label" onClick={handleShowAll}>All</span>
            </label>
            <label className="radio-button b2">
                <input type="radio" name='Active' value='1' checked={selectedToggleBtn=='1'} onClick={handleToggleBtnChange} />
                <span className="radio-label" onClick={handleSwitchToState2}>Active</span>
            </label>
            <label className="radio-button b3">
                <input type="radio" name='Ignored' value='2' checked={selectedToggleBtn=='2'} onClick={handleToggleBtnChange} />
                <span className="radio-label" onClick={handleSwitchToState1}>Ignored</span>
            </label>
        </div>

      {/* <button onClick={handleSwitchToState1}>State 1</button>
      <button onClick={handleSwitchToState2}>State 2</button>
      <button onClick={handleShowAll}>All</button> */}
        <table className='table table-bordered table-striped table-sm'>
          <thead>
            <tr>
              <th className='col-5'>Name</th>
              <th className='col-2'>Days without Shipment</th>
              <th className='col-3'>Last Shipment Post Date</th>
              <th className='col-2'>Ignore</th>
            </tr>
          </thead>
          <tbody>
            {activeState === 1 &&
              dataState1.map((item) => (
                <tr key={item.key}>
                  <td><a href="" style={{fontSize: '11px'}}>{item.name}</a></td>
                  <td>{item.daysWithoutShipment}</td>
                  <td>{item.lastShipmentPostDate}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={!item.ignore}
                      onChange={() => handleCheckboxChange(item.key)}
                    />
                  </td>
                </tr>
              ))}
            {activeState === 2 &&
              dataState2.map((item) => (
                <tr key={item.key}>
                  <td><a href="" style={{fontSize: '11px'}}>{item.name}</a></td>
                  <td>{item.daysWithoutShipment}</td>
                  <td>{item.lastShipmentPostDate}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={!item.ignore}
                      onChange={() => handleCheckboxChange(item.key)}
                    />
                  </td>
                </tr>
              ))}
            {activeState === 3 &&
              allData.map((item) => (
                <tr key={item.key}>
                  <td><a href="" style={{fontSize: '11px'}}>{item.name}</a></td>
                  <td>{item.daysWithoutShipment}</td>
                  <td>{item.lastShipmentPostDate}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={!item.ignore}
                      onChange={() => handleCheckboxChange(item.key)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <hr className='bg-dark'/>
      <div className='d-flex justify-content-end p-3'>
        <button className='mx-2 btn btn-primary'>Print</button>
        <button className='mx-2 btn btn-primary'  onClick={handlePopup}>Ok</button>
      </div>

    </div>
  );
};

export default App;
