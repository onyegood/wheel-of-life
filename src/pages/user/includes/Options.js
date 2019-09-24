import React from "react";

const Options = ({ health, family, business, environment, fun, romance, growth, finance }) => {
  return (
    <div className="card options">
      <div className="card-body">
        {health ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/health.svg" title="Health" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{health}</b>
            </h4>
            <p className="text-small text-right">Health</p>
          </div>
        </div> : null }

        {family ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/family-and-friends.svg" title="Family and Friends" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{family}</b>
            </h4>
            <p className="text-small text-right">Family and Friends</p>
          </div>
        </div> : null}

        {business ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/business.svg" title="Business and Career" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{business}</b>
            </h4>
            <p className="text-small text-right">Business and Career</p>
          </div>
        </div> : null }

        {environment ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/physical-environment.svg" title="Physical Environment" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{environment}</b>
            </h4>
            <p className="text-small text-right">Physical Environment</p>
          </div>
        </div> : null }

        {fun ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/fun.svg" title="Fun and Recreation" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{fun}</b>
            </h4>
            <p className="text-small text-right">Fun and Recreation</p>
          </div>
        </div> : null }

        {romance ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/relationship.svg" title="Romance" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{romance}</b>
            </h4>
            <p className="text-small text-right">Romance</p>
          </div>
        </div> : null }

        {growth ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/personal-growth.svg" title="Personal Growth" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{growth}</b>
            </h4>
            <p className="text-small text-right">Personal Growth</p>
          </div>
        </div> : null }

        {finance ? <div className="row mb-3">
          <div className="col-sm-4">
            <img src="/assets/img/icons/business-and-finance.svg" title="Finance" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h4 className="text-success text-right mt-2">
              <b>{finance}</b>
            </h4>
            <p className="text-small text-right">Finance</p>
          </div>
        </div> : null }
      </div>
    </div>
  );
};

export default Options;
