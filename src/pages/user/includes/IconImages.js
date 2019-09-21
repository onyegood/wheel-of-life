import React from "react";

const IconImages = ({ question }) => {
  return (
    <>
      { question === 1  &&
        <img src="/assets/img/icons/health.svg" title="Health" className="img-fluid" />
      }
      { question === 2 &&
        <img src="/assets/img/icons/family-and-friends.svg" title="Family and Friends" className="img-fluid" />
      }
      { question === 3 &&
        <img src="/assets/img/icons/business.svg" title="Business and Career" className="img-fluid" />
      }
      { question === 4 &&
        <img src="/assets/img/icons/physical-environment.svg" title="Physical Environment" className="img-fluid" />
      }
      { question === 5 &&
        <img src="/assets/img/icons/fun.svg" title="Fun and Recreation" className="img-fluid" />
      }
      { question === 6 &&
        <img src="/assets/img/icons/relationship.svg" title="Romance" className="img-fluid" />
      }
      { question === 7 &&
        <img src="/assets/img/icons/personal-growth.svg" title="Personal Growth" className="img-fluid" />
      }
      { question === 8 &&
        <img src="/assets/img/icons/business-and-finance.svg" title="Finance" className="img-fluid" />
      }
    </>
  );
};

export default IconImages;
