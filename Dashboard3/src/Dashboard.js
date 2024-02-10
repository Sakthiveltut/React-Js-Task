import { Breadcrumbs } from '@mui/material'
import CustomBreadcrumbs from './Components/Breadcrumbs'
import Dropdown from './Components/Dropdown/Dropdown'
import { DateDropdown } from './Components/Dropdown/DateDropdown'
import TooltipButton from './Components/TooltipButton'
import { RefreshBtn } from './Components/RefreshBtn'
import DonutChart from './Components/DonutChart'
import BarChart from './Components/BarChart'
import { ToggleBtn } from './Components/ToggleBtn/ToggleBtn'
import Table1 from './Components/Tables/Table1'
import Table2 from './Components/Tables/Table2'
import Table3 from './Components/Tables/Table3'
import { useState } from 'react'
import Table4  from './Components/Tables/Table4'
import { TableDropdown } from './Components/Tables/TableDropdown'
// import TableDemo from './Components/date demo/table9'


export function Dashboard(){

    const [showPopup, setShowPopup] = useState(false)

    const handlePopup = ()=>{
        setShowPopup(!showPopup);
    }

   const DateDropdownList =  ['This Month As of this month','This Month As of today','Last Month', 'Last Two Month','Last 30 Days','Last 60 Days' ]
    return(
        <>
        <div className='container-fluid dashboard-container' style={{backgroundColor:'#f1f3fa',height:'200rem'}}>
            <div className={`d-flex justify-content-center popupAlert ${showPopup? 'popupActive' : ''}`}>
                <Table3 handlePopup={handlePopup}/>
            </div>
            <CustomBreadcrumbs/>
            
            <div className="card mx-3">

                <div className='mx-3 my-4'>
                    <div className="d-flex flex-column justify-content-between flex-md-row my-3">
                        <div className='d-flex' style={{width:'50.5%'}}>
                            <Dropdown options={['All Offices','FGL']}/>
                            <DateDropdown options={DateDropdownList}/>
                        </div>
                        <div className='d-flex justify-content-between' style={{width:'49.5%'}}>
                            <div className='d-flex'>
                                <p>Time over Time Comparison</p>
                                <TooltipButton btnName={"M / M"} style={{backgroundColor:'white'}} titleName={"Month-over-Month Previous time period:"}/>
                                <TooltipButton btnName={"Y / Y"} style={{backgroundColor:'#e1e0e1'}} titleName={"Year-over-Year Previous time period:"}/>
                            </div>
                            <div>
                                <RefreshBtn/>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between dashboardCards my-3'>
                        <div className='card d-flex align-items-center justify-content-center' style={{width:'24%'}}>
                            <h6>TOTAL PROFIT</h6> 
                            <h2>10000</h2>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            <span>Prev. : 155</span>
                        </div>
                        <div className='card d-flex align-items-center justify-content-center' style={{width:'24%'}}>
                            <h6>TOTAL VOLUME (NO. OF B/L, AWB)</h6>
                            <h2>10000</h2>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            <span>Prev. : 155</span>
                        </div>
                        <div className='card d-flex align-items-center justify-content-center' style={{width:'24%'}}>
                            <h6>NO. OF ACTIVE CUSTOMERS</h6>
                            <h2>10000</h2>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            <span>Prev. : 155</span>
                        </div>
                        <div className='card d-flex align-items-center justify-content-center' style={{width:'24%'}}>
                            <h6>NO. OF LOST CUSTOMERS</h6>
                            <h2>10000</h2>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                            <span>Prev. : 155</span>
                            <button className='border-0'  style={{position:'absolute',right:'0',bottom:'0',cursor:'pointer'}} onClick={handlePopup}>
                                <span className='mx-1'>Details</span>
                                <i className="fas fa-external-link-alt mx-1"></i>
                            </button>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between my-5'>
                        <div className='card' style={{width:'49.5%',height:'305px'}}>
                            <div className='card-body'>
                                <div className='card-title font-weight-bold d-flex justify-content-center'>TOP 5 PROFIT CUSTOMERS</div>
                                <DonutChart name={"1"}/>
                            </div>
                            <p className='d-flex justify-content-center' style={{fontSize:'14px',color:'#c8c6cd'}}>*Percentage are calculated based on customers with positive profit only</p>
                        </div>
                        <div className='card'  style={{width:'49.5%',height:'305px'}}>
                            <div className='card-body'>
                                <div className='card-title font-weight-bold d-flex justify-content-center'>TOP 5 VOLUME CUSTOMERS (NO. OF B/L, AWB)</div>
                                <DonutChart name={"2"}/>
                            </div>
                        </div>
                    </div>

                    
                    


                </div>
            </div>

            <div className='card mx-3 my-4'>
                <div className='p-2 my-3'>
                    <div className='card-title d-flex align-items-center'>
                        <div className='d-flex' style={{width:'60%'}}>
                            <i className="fa fa-server mt-1 mx-2" aria-hidden="true" style={{color:'#4a77bf',fontSize:'20px'}}></i>
                            <h5 style={{color:'#4a77bf'}}>NEGATIVE PROFIT SHIPMENTS</h5>
                        </div>
                        <div className=' d-flex justify-content-between' style={{width:'40%'}}>
                            <ToggleBtn BtnName={['Show by MB/L', 'Show by HB/L']} name={"1"}/>
                            <div className='d-flex'>
                                <h5>Status:&nbsp;</h5>
                                <Dropdown options={['All','Notice','Ignored']} />
                            </div>
                            <div className=''>
                                <RefreshBtn/>
                            </div>
                        </div>
                    </div>
                    <hr className='mx-2' style={{backgroundColor:'#dcdddc', height:'1px'}}/>
                    <div>
                        <Table1/>
                    </div>
                </div>
            </div>

            <div className='card mx-3 my-4'>
                <div className='p-2 my-3'>
                    <div className='card-title d-flex align-items-center'>
                        <div className='d-flex' style={{width:'70%'}}>
                            <i className="fa fa-list mt-1 mx-2" aria-hidden="true" style={{color:'#4a77bf',fontSize:'20px'}}></i>
                            <h5 style={{color:'#4a77bf'}}>TO DO LIST</h5>
                        </div>
                        <div className=' d-flex justify-content-between' style={{width:'30%'}}>
                            <ToggleBtn BtnName={['Summary', 'Details']} name={"2"}/>
                            <div className='d-flex'>
                                <h5>OP:&nbsp;</h5>
                                <Dropdown options={['','Operations FGL(OPS.FGL)',]} width={210}/>
                            </div>
                        </div>
                    </div>
                        <hr className='mx-2' style={{backgroundColor:'#dcdddc', height:'1px'}}/>
                        <div>
                            <Table2/>
                            {/* <Table4/> */}
                            {/* <TableDemo/> */}
                            <TableDropdown/>
                        </div>
                </div>
            </div>

            <div className='card mx-3 my-4' style={{height:'643px'}}>
                <div className='p-2 my-3'>
                    <div className='card-title d-flex align-items-center'>
                        <i className="fa fa-bar-chart mb-2 mx-2" aria-hidden="true" style={{color:'#4a77bf',fontSize:'20px'}}></i>
                        <h5 style={{color:'#4a77bf'}}>BANK BALANCE</h5>
                    </div>
                        <hr className='mx-2' style={{backgroundColor:'#dcdddc', height:'1px'}}/>
                <BarChart/>
                </div>
            </div>


        </div>
        </>
    )
}


