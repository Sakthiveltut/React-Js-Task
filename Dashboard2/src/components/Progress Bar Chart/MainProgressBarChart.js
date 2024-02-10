import React from 'react';

const MainProgressBarChart = ({ data }) => {
  return (
      <div className="d-flex my-4" style={{ height: '200px' }}>
        <ul className="d-flex flex-column justify-content-between m-0 p-0" style={{ listStyleType: 'none' }}>
          {data.labels.map((label, index) => (
            <li key={index} style={{fontSize:'10px'}} >{label}</li>
          ))}
        </ul>

          {data.datasets.map((dataset, index) => (
            <>
        <ul className="d-flex justify-content-between m-0 p-0 w-100" style={{ listStyleType: 'none' }}>
            <li key={index}>
              <div className="barcontainer h-100 mx-1">
                <div className="bar" style={{ height: dataset.value }}>
                </div>
              </div>
              <div className='text-left progressBarChartText1' style={{fontSize:'9px',position:'relative',bottom:'50px',left:'18px'}}>
                <p className='progressBarChartText2' style={{height:'50px'}}>{dataset.label}</p>
              </div>
            </li>
        </ul>
            </>
          ))}
      </div>
  );
};

export default MainProgressBarChart;


