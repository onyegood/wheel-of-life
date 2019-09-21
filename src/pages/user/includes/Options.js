import React from "react";

const Options = ({ state }) => {
  return (
    <div className="card">
      <div className="card-body">
        {state && state.health ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/health.svg" title="Health" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.health}</b>
            </h4>
            <p className="text-small text-right">Health</p>
          </div>
        </div> : null }

        {state && state.family ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/family-and-friends.svg" title="Family and Friends" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.family}</b>
            </h4>
            <p className="text-small text-right">Family and Friends</p>
          </div>
        </div> : null}

        {state && state.business ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/business.svg" title="Business and Career" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.business}</b>
            </h4>
            <p className="text-small text-right">Business and Career</p>
          </div>
        </div> : null }

        {state && state.environment ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/physical-environment.svg" title="Physical Environment" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.environment}</b>
            </h4>
            <p className="text-small text-right">Physical Environment</p>
          </div>
        </div> : null }

        {state && state.fun ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/fun.svg" title="Fun and Recreation" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.fun}</b>
            </h4>
            <p className="text-small text-right">Fun and Recreation</p>
          </div>
        </div> : null }

        {state && state.romance ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/relationship.svg" title="Romance" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.romance}</b>
            </h4>
            <p className="text-small text-right">Romance</p>
          </div>
        </div> : null }

        {state && state.growth ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/personal-growth.svg" title="Personal Growth" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.growth}</b>
            </h4>
            <p className="text-small text-right">Personal Growth</p>
          </div>
        </div> : null }

        {state && state.finance ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/business-and-finance.svg" title="Finance" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{state.finance}</b>
            </h4>
            <p className="text-small text-right">Finance</p>
          </div>
        </div> : null }
      </div>
    </div>
  );
};

export default Options;
