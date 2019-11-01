import React from "react";
import PolarChartComponent from "../../../component/chartjs/PolarChartComponent";
import BarChartComponent from "../../../component/chartjs/BarChartComponent";

const Analyse = ({ stats, name, sumcount, setStep, setCount, setGender, setQuestionCount, setAnalyse }) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mt-5">
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

          <div className="col-md-8 mt-5">
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

          <div className="col-md-12 mt-2">
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
                  sumcount > 40 && sumcount <= 60  ? "text-primary" :
                    sumcount >= 61 ? "text-success" : "" }>{sumcount}%</h1>
            </div>

            {/* <button className="btn btn-outline-success mb-5 faa-pulse animated">Send to your email</button> */}

          </div>
          <div className="col-md-8">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 1).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                    Health is wealth they say. You may consider visiting the hospital for full body check-up, take more of fruits, try exercise, take time off to rest, eat nuts, 
                    drink more water, most especially before meals.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 1).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                    Your health is fine but needs improvement. Find time to go for medical check-up, eat healthy food, exercise,  drink more water, and rest well.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 1).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Your health looks great, please keep it up. Remember to go for check-up as at when due, exercise, eat healthy food, take more water, eat vegetables and fruits.
                    </h1> 
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 2).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                    You have poor family and friends relation. Communication is key, make phone calls and take phone calls from loved ones, take out time to 
                    talk and have fun with your family, share your worries with your partner and make the solution a collective effort.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 2).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                    Your family and friends relation is fine, but you may also want to put in more effort to make it better. Why not try taking your family out to see movies, 
                    hang out with friends at least once or twice a month.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 2).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Your family and friends relation looks great, please keep it up. Remember to read books and blogs on happy home and good friendship relation. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 3).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                    You are not happy at all with your current job. Try learning new things about your job or consider pursue another career.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 3).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                    Good to know you are reasonably satisfied with your job, but there is definitely a need and chance for improvement to achieve more goals.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 3).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Wow {name}, you are very satisfied with your job. It is important to ensure that this is maintained.
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 4).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                      {name}, your physical environment is too poor and will likely affect your thinking and productivity level. You may consider changing location.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 4).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      {name}, your physical environment look good, but do not hesitate to move to another place if you think it is no longer safe for you and your family. 
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 4).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                      {name}, your physical environment is great, remember to explore the city, take time off to say hello to your neighbours.  
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 5).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                      {name}, your fun and recreation is too poor. Try doing at least one fun activity at work per day, set aside one evening or day in a week  as an appointment with yourself to do something you enjoy.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 5).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      {name}, your fun and recreation looks good, but also needs to be improved. You may consider going for dinner or the movies  by yourself, spend more time playing board games or doing fun activities in the park.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 5).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                      {name}, your fun and recreation looks great please keep it up, you may also consider learning how to play musical instrument to add to your fun life.
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 6).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                    Hi {name}, your romance life is too poor, try as much as you can to work on yourself.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 6).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      {name}, your romance life looks good, but it can be better.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 6).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Great {name}, your romance life look good. Please keep it up. 
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 7).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                    Oh no! {name}, your personal growth is too poor. You may want to create a <b>Plan of Action (PA)</b>. A plan of action should include actions such as what you need to do and when to do them as that will support your goals. 
                    It’s always best to have a written plan of action to avoid forgetting important tasks.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 7).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      {name}, your personal growth look good but will be better if it  improves. Please do reward yourself for every milestone in the journey of personal growth.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 7).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Wow! {name}, your personal growth looks promising, please keep it up. Remember to share your experiences with others.
                    </h1>
                  )}
                </div>

                <div className="carousel-item min-height">
                  {stats.filter(x => x.value <= 4 && x.id === 8).map(q => 
                    <h1 className="text-danger mt-3 text-wrap font-300">
                      {name}, your finance is too poor and this can lead to crisis in the nearest future if not controlled. You must identify this as a problem, control your spending, create budget and set financial priorities.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 5 && x.value <= 7 && x.id === 8).map(q => 
                    <h1 className="text-primary mt-3 text-wrap font-300">
                      {name}, your finance look good but can be more better. Remember to save more and spend less.
                    </h1>
                  )}

                  {stats.filter(x => x.value >= 8 && x.id === 8).map(q => 
                    <h1 className="text-success mt-3 text-wrap text-center font-300">
                    Wow {name}, your finance is great, please keep it up.
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