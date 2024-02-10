import React, { useState, useEffect } from 'react';

function Table4({BtnName,dropdownOptions,Clicked}) {

    const [data, setData] = useState(dropdownOptions)

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

  const [alertMessage, setAlertMessage] = useState(null);

  const handleDeleteRow = (id) => {
    const deletedRow = data.find((row) => row.id === id);
    if (deletedRow) {
      setAlertMessage(deletedRow);
      const updatedData = data.filter((row) => row.id !== id);
      setData(updatedData);
    }
  };

  const handleUndoDelete = () => {
    if (alertMessage) {
      setData([...data, alertMessage]); 
      setAlertMessage(null); 
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage(null); 
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null); 
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alertMessage]);

  return (
    <div className='my-2'>
        <div className={`group-select-menu ${isOpen ? 'active' : ''}`}>
          <div className='group-select-btn' onClick={toggleDropdown} style={{ display: Clicked ? '' : 'none' }}>
            <div class="vertical-line"></div>
              <span className="group-sBtn-text mx-1"></span>
              <div className='d-flex align-items-center'>
                {BtnName}
                <i className={`bx mx-1 ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
              </div>
          </div>
          {data.map((row) => (
          <div className="group-options" style={{ display: Clicked ? '' : 'block' }}>
                  <li key={row.id} style={{backgroundColor: '#f5f4f5',lineHeight: '20px'}} 
                  className='d-flex justify-content-between my-3 group-option selected' 
                  >
                    <div className='text-center text-light' style={{ backgroundColor: '#89c5f5', position: 'relative',width:'12%' }}>
                      <i
                        className="fa-solid fa-exclamation fa-lg"
                        style={{
                          position: 'absolute',
                          left: '-6px',
                          top: '-3px',
                          color: 'red',
                          backgroundColor: 'white',
                          borderRadius: '150px',
                          fontSize: '13px',
                          border: '2.5px solid #89c5f5',
                          padding: '9px',
                        }}
                      ></i>
                      <span className="ml-3">{row.task}</span>
                    </div>
                    <div style={{width:'10%'}}>{row.fileNo}</div>
                    <div style={{width:'10%'}}>{row.eta}</div>
                    <div style={{width:'12%'}}>{row.mbL}</div>
                    <div style={{width:'10%'}}>{row.hbL}</div>
                    <div style={{width:'10%'}}>{row.pod}</div>
                    <div style={{width:'20%'}}>{row.consignee}</div>
                    <div style={{width:'10%'}}>{row.status}</div>
                    <div style={{width:'2%'}}>
                      <button
                        className="border-0"
                        type="button"
                        style={{ borderRadius: '150px', backgroundColor: '#545554' }}
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        <i className="fa fa-times" aria-hidden="true" style={{ fontSize: '15px', color: 'white' }}></i>
                      </button>
                    </div>
                  </li>
              </div>
              ))}



        </div>
        

        <div className="d-flex justify-content-center mt-3 top-0 position-fixed w-100" style={{ zIndex: '20' }}>
          {alertMessage && (
            <div className="alert alert-success" role="alert" style={{ width: 'fit-content' }}>
              The task has been ignored successfully, and it won't appear in your to-do list anymore.
              <a className="undoBtn ml-2" onClick={handleUndoDelete} style={{ cursor: 'pointer', color: '#5a9bd0' }}>
                <i className="fa fa-reply" aria-hidden="true"></i>Undo
              </a>
              <button type="button" className="close ml-4" data-dismiss="alert" aria-label="Close" onClick={handleCloseAlert}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </div>


    </div>
  );
}


export default Table4;
