import { useState } from 'react';
import './ToggleBtn.css'

export function ToggleBtn3({BtnName,name}){
    const [selectedToggleBtn, setSelectedToggleBtn] = useState('0');

    const handleToggleBtnChange = (e) => {
        setSelectedToggleBtn(e.target.value);
      };

    return(
        <div className="radio-group">
            <label className="radio-button b1">
                <input type="radio" name={name} value={BtnName[0]} checked={selectedToggleBtn==BtnName[0]} onClick={handleToggleBtnChange}/>
                <span className="radio-label">{BtnName[0]}</span>
            </label>
            <label className="radio-button b2">
                <input type="radio" name={name} value={BtnName[1]} checked={selectedToggleBtn==BtnName[1]} onClick={handleToggleBtnChange}/>
                <span className="radio-label">{BtnName[1]}</span>
            </label>
            <label className="radio-button b3">
                <input type="radio" name={name} value={BtnName[2]} checked={selectedToggleBtn==BtnName[2]} onClick={handleToggleBtnChange}/>
                <span className="radio-label">{BtnName[2]}</span>
            </label>
        </div>
    )
}

// return(
//     <div className="radio-group">
//         {name.map((value,index)=>(
//         <label className="radio-button" key={index}>
//             <input type="radio" name="options" value={index} checked={selectedToggleBtn==index} onClick={handleToggleBtnChange}/>
//             <span className="radio-label">{value}</span>
//         </label>
//         ))}
//         {/* <label className="radio-button">
//             <input type="radio" name="options"/>
//             <span className="radio-label">Radiofasdfadf</span>
//         </label> */}
//     </div>
// )