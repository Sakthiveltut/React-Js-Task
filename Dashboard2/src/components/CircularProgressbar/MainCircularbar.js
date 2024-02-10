import React, { useRef, useEffect } from 'react';

const MainCircularBar = ({percentage}) => {
  const numberElement = useRef(null);
  const circleElement = useRef(null);

  useEffect(() => {
    const updateDashOffset = () => {
      const dashOffset = 450 - (percentage / 100) * 450;
      circleElement.current.style.strokeDashoffset = dashOffset;
    };

    updateDashOffset();
  }, [percentage]);

  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div ref={numberElement}><h5>{percentage}</h5></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#165cfe" />
            <stop offset="100%" stopColor="#165cfe" />
          </linearGradient>
        </defs>
        <circle ref={circleElement} id="progress-circle" cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default MainCircularBar;
