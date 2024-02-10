import { useState} from "react";
import Table4 from "./Table4";

export function TableDropdown(){

    const tableData = [
        [
          {
            id:1,
            task: "ISF(1/1)",
            fileNo: "OI-23080002",
            eta: "27-08-2023",
            mbL: "MCLMAA2301248",
            hbL: "MCLMAA2301248",
            pod: "PORT KLANG",
            consignee: "GEMINI FLOUR MILLS (M) SDN. BHD.",
            additionalInfo: "HB/L: ISF No., ISF Matched Date"
          },
          {
            id:2,
            task: "ISF(1/1)",
            fileNo: "OI-23080002",
            eta: "27-08-2023",
            mbL: "MCLMAA2301248",
            hbL: "MCLMAA2301248",
            pod: "PORT KLANG",
            consignee: "GEMINI FLOUR MILLS (M) SDN. BHD.",
            additionalInfo: "HB/L: ISF No., ISF Matched Date"
          },
        ],
         [
          {
            id:3,
            task: "Pre-alert(1/1)",
            fileNo: "OI-23080002",
            eta: "27-08-2023",
            mbL: "MCLMAA2301248",
            hbL: "MCLMAA2301248",
            pod: "PORT KLANG",
            consignee: "GEMINI FLOUR MILLS (M) SDN. BHD.",
            additionalInfo: "MB/L: Oversea Agent"
          },
          {
            id:4,
            task: "Pre-alert(1/1)",
            fileNo: "OI-23080002",
            eta: "27-08-2023",
            mbL: "MCLMAA2301248",
            hbL: "MCLMAA2301248",
            pod: "PORT KLANG",
            consignee: "GEMINI FLOUR MILLS (M) SDN. BHD.",
            additionalInfo: "MB/L: Oversea Agent"
          },
        ]
      ]
      const [checkBoxClicked, setCheckBoxClicked] = useState(false)
      const handleCheckBox = ()=>{
          setCheckBoxClicked(!checkBoxClicked);
        }
    
    return(
      <div className="card">
        <div className="card-body">
        <input type="checkbox" onClick={handleCheckBox} />
          <div style={{listStyle:'none'}}>
          <li className='d-flex justify-content-between pb-1' style={{borderBottom:'1px solid black',color:'#538f9e'}}>
              <div style={{width:'12%'}}><i class="fa fa-exclamation-circle mx-2" aria-hidden="true"></i>TASK</div>
              <div style={{width:'10%'}}><i class="fa fa-slack mx-2" aria-hidden="true"></i>FILE NO.</div>
              <div style={{width:'10%'}}><i class="fa fa-clock-o mx-2" aria-hidden="true"></i>ETA</div>
              <div style={{width:'12%'}}><i class="fa fa-anchor mx-2" aria-hidden="true"></i>MB/L</div>
              <div style={{width:'10%'}}><i class="fa fa-anchor mx-2" aria-hidden="true"></i>HB/L</div>
              <div style={{width:'10%'}}><i class="fa fa-map-marker mx-2" aria-hidden="true"></i>POD</div>
              <div style={{width:'20%'}}><i class="fa fa-users mx-2" aria-hidden="true"></i>CONSIGNEE</div>
              <div style={{width:'10%'}}><i class="fa fa-pencil mx-2" aria-hidden="true"></i>STATUS</div>
              <div style={{width:'2%'}}></div>
          </li>
        </div>
        <Table4 BtnName={"ISF(1/1)"} dropdownOptions={tableData[0]} Clicked={checkBoxClicked}  />
        <Table4 BtnName={"Pre-alert(1/1)"} dropdownOptions={tableData[1]} Clicked={checkBoxClicked} />
        </div>
      </div>
    )
}