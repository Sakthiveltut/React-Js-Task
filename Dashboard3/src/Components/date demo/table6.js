import React, { useState, useEffect } from 'react';

function Table4() {
  const [data, setData] = useState([
    {
        id: 1,
        task: "Original B/L (1)1",
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
        task: "Original B/L (1)2",
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
        task: "Original B/L (1)3",
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
        task: "Original B/L (1)4",
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
        task: "Original B/L (1)45",
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
        task: "Original B/L (1)5",
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
        task: "Original B/L (1)",
        fileNo: "01-23090001",
        eta: "19-10-2023",
        mbL: "230279828",
        hbL: "230279878",
        pod: "PORT KLANG",
        consignee: "JAYA GLOBAL MARKETING (M)",
        status: "HBLOB/L received",
      },  ]);

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
      <table className="w-100 table-borderless table-sm">
          <thead className="border-0">
            <tr>
              <th>TASK</th>
              <th>FILE NO.</th>
              <th>ETA</th>
              <th>MB/L</th>
              <th>HB/L</th>
              <th>POD</th>
              <th>CONSIGNEE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((row) => (
              <tr
                key={row.id}
                style={{
                  borderTop: '10px solid white',
                  backgroundColor: '#f5f4f5',
                  lineHeight: '20px',
                }}
              >
                <td style={{ backgroundColor: '#89c5f5', position: 'relative' }}>
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
                </td>
                <td>{row.fileNo}</td>
                <td>{row.eta}</td>
                <td>{row.mbL}</td>
                <td>{row.hbL}</td>
                <td>{row.pod}</td>
                <td>{row.consignee}</td>
                <td>{row.status}</td>
                <td>
                  <button
                    className="border-0"
                    type="button"
                    style={{ borderRadius: '150px', backgroundColor: '#545554' }}
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    <i className="fa fa-times" aria-hidden="true" style={{ fontSize: '15px', color: 'white' }}></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>      </div>
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
