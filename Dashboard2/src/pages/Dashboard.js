import MultiLevelDropdownCard from "../components/Dropdown/MultiLevelDropdownCard"
import DoughnutChart from "../components/DonutChart"
import CircularBar from "../components/CircularProgressbar/Circularbar"
import BarChart from "../components/BarChart"
import ProgressBarChart from "../components/Progress Bar Chart/ProgressBarChart"


export function Dashboard(){

    return(
            <div className="card my-container border-0 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12 leftSpace">
                <div className="card-body">
                    
                        <MultiLevelDropdownCard/>

                    <div className="d-flex flex-column justify-content-between mt-5 flex-lg-row">
                        <div className="card border-0 my-3 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12" style={{ height: '370px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'20px' }}>
                            <div className="card-body"> 
                                <ProgressBarChart/>
                            </div>
                        </div>

                        <div className="card border-0 my-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'20px' }}>
                            <h5 className="m-3">Infested by Prosophis juliflora</h5>
                            <div className="card-body d-flex justify-content-center align-items-center"> 
                                <CircularBar options={[90,70]}/>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column justify-content-between my-5 flex-lg-row" >
                        <div className="card border-0 my-3 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12" style={{ height: '380px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'20px'  }}>
                            <div className="card-body"> 
                            <BarChart/>
                            </div>
                        </div>

                        <div className="card border-0 my-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{ height: '380px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'20px'  }}>
                            <div className="card-body">
                                <div>
                                    <DoughnutChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}