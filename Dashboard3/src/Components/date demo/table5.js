import React, { useState } from 'react';

function Table4() {
  const [data, setData] = useState([
    {
      id: 1,
      task: "Original B/L (1)",
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
      task: "Original B/L (1)",
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
      task: "Original B/L (1)",
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
      task: "Original B/L (1)",
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
      task: "Original B/L (1)",
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
      task: "Original B/L (1)",
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
    },
    // Add more rows to the data array as needed
  ]);

  const [deletedRows, setDeletedRows] = useState([]);
  const [nextId, setNextId] = useState(data.length + 1);

  const handleDeleteRow = (id) => {
    const deletedRow = data.find((row) => row.id === id);
    if (deletedRow) {
      setDeletedRows([...deletedRows, deletedRow]);
      const updatedData = data.filter((row) => row.id !== id);
      setData(updatedData);
    }
  };

  const handleUndoDelete = (id) => {
    const restoredRow = deletedRows.find((row) => row.id === id);
    if (restoredRow) {
      setDeletedRows(deletedRows.filter((row) => row.id !== id));
      setData([...data, restoredRow]);
    }
  };

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
        </table>
      </div>
      <div className="d-flex justify-content-center mt-3 top-0 position-fixed w-100" style={{zIndex:'20'}}>
        {deletedRows.map((row) => (
          <div key={row.id} className="alert alert-success" role="alert" style={{width:'fit-content'}}>
            The task has been ignored successfully, and it won't appear in your to-do list anymore.
            <a className='undoBtn ml-2' onClick={() => handleUndoDelete(row.id)} style={{cursor:'pointer',color:'#5a9bd0'}}>
              <i class="fa fa-reply" aria-hidden="true"></i>Undo
            </a>
            <button type="button" className="close ml-4" data-dismiss="alert" aria-label="Close" style={{marginTrim:'10px'}}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table4;
