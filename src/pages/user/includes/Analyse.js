import React from "react";
import PieChartComponent from "../../../component/chartjs/PieChartComponent";
import LineChartComponent from "../../../component/chartjs/LineChartComponent";

const Analyse = ({ stats, sumcount, state }) => {

  return (
    <>
    <div className="card">
      <div className="card-body">
        <h1 className="text-center mt-3 mb-5">Here you go <b>{state.name}</b>, your wheel of life will look this</h1>
        <div className="row">
          <div className="col-md-4">
            <PieChartComponent 
              labels={stats.map(x => x.label)}
              values={stats.map(x => x.value)}
              bg={stats.map(x => x.color)}
              displayLegend={false}
              displayTitle={false}
              legendPosition='left'
              titleText='Analysis'
              titleFontSize={20}
              height={300}
            />
          </div>

          <div className="col-md-8">
            <LineChartComponent 
              labels={stats.map(x => x.label)}
              values1={stats.map(x => x.value)}
              bg={stats.map(x => x.color)}
              displayLegend={false}
              displayTitle={false}
              legendPosition='left'
              titleText='Analysis'
              titleFontSize={20}
              height={150}
            />
          </div>

          <div className="col-md-12">
            <div className="key">
              <ul>
                {stats.map(k => <li>
                  <i style={{color: k.color}} className="fa fa-pie-chart" /> {k.label} - %{k.value}
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="card text-center mt-5 mb-5">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h1 className="mt-5">Score</h1>
            <div className="score-text">
              <h1 className={
                sumcount <= 40 ? "text-danger" :
                  sumcount > 40 && sumcount <= 59  ? "text-primary" :
                    sumcount > 60 ? "text-success" : "" }>%{sumcount}</h1>
            </div>
          </div>
          <div className="col-md-8">
            
            <div id="demo" className="carousel slide" data-ride="carousel">

              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active" />
                <li data-target="#demo" data-slide-to="1" />
                <li data-target="#demo" data-slide-to="2" />
                <li data-target="#demo" data-slide-to="3" />
                <li data-target="#demo" data-slide-to="4" />
                <li data-target="#demo" data-slide-to="5" />
                <li data-target="#demo" data-slide-to="6" />
                <li data-target="#demo" data-slide-to="7" />
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 1).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 1).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 1).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1> 
                  )}
                </div>


                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 3).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 3).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 3).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 4).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 4).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 4).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 5).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 5).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 5).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 6).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 6).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 6).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 7).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 7).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 7).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 8).map(q => 
                    <h1 className="text-danger mt-3 text-wrap">{q.label} is wealth they said. You may conceder visiting the <b>hospital</b>, 
                      <b>take more of fruits</b>, <b>try exercise</b>, <b>take time off to rest</b> and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value > 4 && x.value <= 6 && x.id === 8).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 8).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center">
                      <i className="fa fa-thumbs-up fa-4x faa-bounce animated" /><br/>
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

              </div>

              {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a> */}

            </div>


            {/* <button className="btn btn-outline-success mb-5 faa-pulse animated">Send to your email</button> */}
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default Analyse;