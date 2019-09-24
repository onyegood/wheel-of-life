import React from "react";
import PolarChartComponent from "../../../component/chartjs/PolarChartComponent";
import BarChartComponent from "../../../component/chartjs/BarChartComponent";

const Analyse = ({ stats, sumcount, setStep, setCount, setGender, setState, setQuestionCount, setAnalyse }) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <PolarChartComponent 
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
            <BarChartComponent 
              labels={stats.map(x => x.label)}
              values={stats.map(x => x.value)}
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
                  <i style={{color: k.color}} className="fa fa-pie-chart" /> {k.label} - {k.value}%
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
                    sumcount >= 60 ? "text-success" : "" }>{sumcount}%</h1>
            </div>

            <button className="btn btn-outline-success mb-5 faa-pulse animated">Send to your email</button>

          </div>
          <div className="col-md-8">
            <div id="demo" className="carousel slide" data-ride="carousel">

              {/* <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active" />
                <li data-target="#demo" data-slide-to="1" />
                <li data-target="#demo" data-slide-to="2" />
                <li data-target="#demo" data-slide-to="3" />
                <li data-target="#demo" data-slide-to="4" />
                <li data-target="#demo" data-slide-to="5" />
                <li data-target="#demo" data-slide-to="6" />
                <li data-target="#demo" data-slide-to="7" />
              </ul> */}

              <div className="carousel-inner">
                <div className="carousel-item active min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 1).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital for full body check-up, 
                      take more of fruits, try exercise, take time off to rest, eat nuts. Drink more water, most especially before meals and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 1).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is fine but needs improvement. Find time to go for medical check-up, eat healthy food, exercise, more water intake, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 1).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Your health look great, please keep it up. Remember to go for check-up at when due, exercise, eat healthy food, take more water, Eat vegetables and fruits.
                    </h1> 
                  )}
                </div>


                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                      You have poor family and friends relation. Communication is key, make phone calls and take phone calls from loved onces, take out time to talk and have fun with your family, 
                      share your worries with your partner and make the solution a collective effort.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your family and friends relation is fine, but you may also want to put in more effort to make it better. Why not try taking your family out to see movies, hang out with friends at least once or twice a month.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Your family and friends relation look great, please keep it up. Remember to read books and blogs on happy home and good friendship relation. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 3).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 3).map(q => 
                    <h1 className="text-primary mt-3 text-wrap">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 3).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 4).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 4).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 4).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 5).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 5).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 5).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 6).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 6).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 6).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 7).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 7).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 7).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 3 && x.id === 8).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">{q.label} is wealth they said. You may conceder visiting the hospital, 
                      take more of fruits, try exercise, take time off to rest and sure your health will improve</h1>
                  )}

                  {stats.filter(x => x.value >= 4 && x.value <= 6 && x.id === 8).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      Your health is good but needs improvement. Find time to go for medical check up, eat health food, exercise, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value > 6 && x.id === 8).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                        Great, please keep it up. 
                    </h1>
                  )}
                </div>

              </div>

              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span><i className="fa fa-arrow-left fa-2x" /> </span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span><i className="fa fa-arrow-right fa-2x" /> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3 mx-auto text-center">
      <button onClick={() => {
        setStep(1);
        setCount(0);
        setGender(null);
        setState("");
        setQuestionCount(0);
        setAnalyse(false);
      }} className="btn btn-outline-warning mb-5">
        <i className="fa fa-arrow-left" />  Back to home
      </button>
    </div>
    </>
  );
};

export default Analyse;