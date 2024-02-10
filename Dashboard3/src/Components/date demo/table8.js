import React, { useState, useEffect } from 'react';

function Table4() {
  const [data, setData] = useState([
    {
        id: 1,
        task: "ISF(1/1)1",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 2,
        task: "ISF(1/1)2",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 3,
        task: "Pre-alert(1/1)1",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 4,
        task: "Pre-alert(1/1)2",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 5,
        task: "Arrival Notice(1/1)1",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 6,
        task: "Arrival Notice(1/1)2",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },
      {
        id: 7,
        task: "Original B/L1",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },  
      {
        id: 8,
        task: "Original B/L2",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },  
    
    ]);


    //drop down
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    const selectOption = () => {
    setIsOpen(false);
    };

  const [alertMessage, setAlertMessage] = useState(null);

  const handleDeleteRow = (id) => {
    const deletedRow = data.find((row) => row.id === id);
    if (deletedRow) {
      setAlertMessage(deletedRow); // Set the alert message
      const updatedData = data.filter((row) => row.id !== id);
      setData(updatedData);
    }
  };

  const handleUndoDelete = () => {
    if (alertMessage) {
      setData([...data, alertMessage]); // Restore the deleted row
      setAlertMessage(null); // Clear the alert message
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage(null); // Clear the alert message
  };

  useEffect(() => {
    if (alertMessage) {
      // Use setTimeout to clear the alert after 5 seconds
      const timer = setTimeout(() => {
        setAlertMessage(null); // Clear the alert message
      }, 5000);

      return () => {
        // Clear the timer when the component unmounts
        clearTimeout(timer);
      };
    }
  }, [alertMessage]);

  return (
    <div className="card" style={{}}>
      <div className="card-body">

        <ul style={{listStyle:'none'}}>
          <li className='d-flex justify-content-between' style={{borderBottom:'1px solid black',color:'#538f9e'}}>
              <div style={{width:'12%'}}><i class="fa fa-exclamation-circle mx-2" aria-hidden="true"></i>TASK</div>
              <div style={{width:'10%'}}><i class="fa fa-slack mx-2" aria-hidden="true"></i>FILE NO.</div>
              <div style={{width:'10%'}}><i class="fa fa-clock-o mx-2" aria-hidden="true"></i>ETA</div>
              <div style={{width:'10%'}}><i class="fa fa-anchor mx-2" aria-hidden="true"></i>MB/L</div>
              <div style={{width:'10%'}}><i class="fa fa-anchor mx-2" aria-hidden="true"></i>HB/L</div>
              <div style={{width:'10%'}}><i class="fa fa-map-marker mx-2" aria-hidden="true"></i>POD</div>
              <div style={{width:'20%'}}><i class="fa fa-users mx-2" aria-hidden="true"></i>CONSIGNEE</div>
              <div style={{width:'15%'}}><i class="fa fa-pencil mx-2" aria-hidden="true"></i>STATUS</div>
              <div style={{width:'2%'}}></div>
          </li>

          {data.map((row) => (
              <li key={row.id} style={{backgroundColor: '#f5f4f5',lineHeight: '20px'}} 
              className='d-flex justify-content-between my-3'
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
                <div style={{width:'10%'}}>{row.mbL}</div>
                <div style={{width:'10%'}}>{row.hbL}</div>
                <div style={{width:'10%'}}>{row.pod}</div>
                <div style={{width:'20%'}}>{row.consignee}</div>
                <div style={{width:'15%'}}>{row.status}</div>
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
            ))}
        </ul>

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
