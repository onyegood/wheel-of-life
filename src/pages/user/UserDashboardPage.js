import React, { Component } from "react";
import Layout from "../../layout";
import CountCard from "../../component/cards/count";
import DoughnutChartComponent from "../../component/chartjs/DoughnutChartComponent";
import BarChartMultipleComponent from "../../component/chartjs/BarChartMultipleComponent";
import { barchartBG, bg2, bgList } from "../../component/chartjs/bg";
import { number } from "../../helpers";
import HistogramChart from "../../component/fusionchart/HistogramChart";
import { withFormik, Form, Field } from "formik";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";

const categories = [
  {
    label: "APMT"
  }, 
  {
    label: "GDML"
  }, 
  {
    label: "Apapa Bulk"
  }, 
  {
    label: "ENL"
  }, 
  {
    label: "TCI"
  }, 
  {
    label: "Five Star"
  }, 
  {
    label: "Port and Cargo"
  }, 
  {
    label: "Josepdam"
  }, 
  {
    label: "Multiservice"
  }
];
const labels = [
  {
    value: 344,
    label: "ECC"
  }, 
  { value: 34,
    label: "Flat Bed"
  }, 
  {
    value: 1150,
    label: "Export Carrying"
  }, 
  {
    value: 66,
    label: "Sided Truck"
  }, 
  {
    value: 2200,
    label: "Arewa"
  }, 
  {
    value: 70,
    label: "Silos"
  }, 
  {
    value: 80,
    label: "Refers"
  }
];
const apmt = [
  {
    value: 1200,
    label: "ECC"
  }, 
  { value: 50,
    label: "Flat Bed"
  }, 
  {
    value: 90,
    label: "Export Carrying"
  }, 
  {
    value: 22,
    label: "Sided Truck"
  }, 
  {
    value: 52,
    label: "Arewa"
  }, 
  {
    value: 77,
    label: "Silos"
  }, 
  {
    value: 30,
    label: "Refers"
  }
];

export default class componentName extends Component {
  
  render() {
    return (
      <Layout page="Dashboard">
        <div className="card mt-4 mb-4 p-3 m-3">
          <div className="card-body">
            <div className="row">
              <form className="form-inline ml-4 mb-4">
                <div className="form-group">
                  <label for="date">Filter: </label>
                  <small id="today">
                    <div className="text-left ml-3">Today: </div>
                    <div className="ml-3">
                      <img src="/assets/img/calendar.svg" />
                      <input 
                        type="date" 
                        className="form-control mx-sm-3" 
                        aria-describedby="today"/>
                    </div>
                  </small>
                  <small id="all" className="text-muted">
                    <div className="text-left ml-3">All: </div>
                    <div className="ml-3">
                      <img src="/assets/img/calendar.svg" />
                      <input 
                        type="date" 
                        className="form-control mx-sm-3" 
                        aria-describedby="all"/>
                    </div>
                  </small>
                </div>
              </form>
            </div>
            <div className="row">
              <CountCard 
                title="Total number of appointments"
                count={number.format(3000)}
                link_to="/appointmemnts"
              />

              <CountCard 
                title="Total number of trucks"
                count={number.format(1000)}
                link_to="/trucks"
              />

              <CountCard 
                title="Total number of agents"
                count={number.format(300)}
                link_to="/agents"
              />

              <CountCard 
                title="Total number of companies"
                count={number.format(3000)}
                link_to="/companies"
              />
            </div>
            <div className="row">
              <CountCard 
                title="Total number of terminal operators"
                count={number.format(300)}
                link_to="/dashboard"
              />

              <CountCard 
                title="Total number of nominated parks"
                count={number.format(9000)}
                link_to="/dashboard"
              />

              <CountCard 
                title="Total number of transit parks"
                count={number.format(3000)}
                link_to="/dashboard"
              />
            </div>
            

            <h4 className="mt-3 mb-3">Analysis</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="card p-5 analytics">
                  <div className="card-boady">
                    <div className="inside-label">
                      <h4><img src="/assets/img/truck.svg" /> 200</h4>
                      <label>Total no. of operators</label>
                    </div>

                    <DoughnutChartComponent
                      labels={["GDNL Terminal", "APMT Terminal", "Apapa Bulk Terminal", "ENL Consortium"]}
                      values={[20, 204, 566, 666]}
                      bg={bgList.map(a => a.color)}
                      displayLegend={false}
                      displayTitle={false}
                      legendPosition='left'
                      titleText='Analysis'
                      titleFontSize={20}
                      height={50}
                    />

                    <div className="stats-key">
                      <ul>
                        <li>
                          <div style={{ background: bgList[0].color }} className="square-key"/>
                            GDNL Terminal
                        </li>
                        <li>
                          <div style={{ background: bgList[1].color }} className="square-key"/>
                            APMT Terminal
                        </li>
                        <li>
                          <div style={{ background: bgList[2].color }} className="square-key"/>
                            Apapa Terminal
                        </li>
                        <li>
                          <div style={{ background: bgList[3].color }} className="square-key"/>
                            ENL Terminal
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-5 analytics">
                  <div className="card-boady">

                    <div className="inside-label">
                      <h4><img src="/assets/img/truck.svg" /> 200</h4>
                      <label>Truck Types</label>
                    </div>

                    <DoughnutChartComponent
                      labels={["GDNL Terminal", "APMT Terminal", "Apapa Bulk Terminal", "ENL Consortium"]}
                      values={[20, 204, 566, 666]}
                      bg={bgList.map(a => a.color)}
                      displayLegend={false}
                      displayTitle={false}
                      legendPosition='left'
                      titleText='Analysis'
                      titleFontSize={20}
                      height={50}
                    />

                    <div className="stats-key">
                      <ul>
                        <li>
                          <div style={{ background: bgList[0].color }} className="square-key"/>
                            Container
                        </li>
                        <li>
                          <div style={{ background: bgList[1].color }} className="square-key"/>
                            Flat Bed
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="mt-5 mb-3">Truck types by operator</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-boady">
                    <div>
                      <label className="mt-2 mb-4 text-left ml-4 mr-4 pull-left"> 
                        Truck types: 
                      </label>
                      <div className="trucks-key mt-4">
                        <ul>
                          <li>
                            <div style={{ background: bgList[0].color }} className="square-key"/>
                              ECC
                          </li>
                          <li>
                            <div style={{ background: bgList[1].color }} className="square-key"/>
                              Flat Bed
                          </li>
                          <li>
                            <div style={{ background: bgList[2].color }} className="square-key"/>
                              Export Carrying
                          </li>
                          <li>
                            <div style={{ background: bgList[3].color }} className="square-key"/>
                              Sided Truck
                          </li>
                          <li>
                            <div style={{ background: bgList[4].color }} className="square-key"/>
                              Arewa
                          </li>
                          <li>
                            <div style={{ background: bgList[5].color }} className="square-key"/>
                              Silos
                          </li>
                          <li>
                            <div style={{ background: bgList[6].color }} className="square-key"/>
                              Refers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <HistogramChart 
                      type={
                        "stackedcolumn2dline"
                      } //mscolumn2d //stackedcolumn2dline
                      bg={bgList.map(x => x.color)}
                      caption=''
                      category={categories}
                      firstData={labels}
                      secondData={apmt}
                      thirdData={labels}
                      fourthData={apmt}
                      fifthData={labels}
                      sixthData={apmt}
                      seventhData={labels}
                      firstLabel='ECC'
                      secondLabel='Flat Bed'
                      thirdLabel='Export Carrying'
                      fourthLabel='Sided Truck'
                      fifthLabel='Arewa'
                      sixthLabel='Silos'
                      seventhLabel='Refers' />
                    <h5 className="mt-4 mb-4 text-center">Operators</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Layout>
    );
  }
}
