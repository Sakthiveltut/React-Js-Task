import React, { useEffect } from 'react';

const TooltipButton = ({btnName,style,titleName}) => {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl, {
        placement: 'top',
      });
      return null;
    });
  }, []);

  return (
    <div>
      <button
        type="button"
        className='mx-2'
        data-toggle="tooltip"
        title={`${titleName}`}
        style={{border:'1px solid #dcdddc',...style}}
      >
        {btnName}
      </button>
    </div>
  );
};

export default TooltipButton;
