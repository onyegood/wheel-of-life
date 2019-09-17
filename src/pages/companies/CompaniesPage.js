import React, { useState } from "react";
import Layout from "../../layout";
import CreateCompany from "./forms/CreateCompany";
import CompaniesTable from "./tables/CompaniesTable";
import SearchComponent from "../search/SearchComponent";
import CustomModal from "../../component/modal/CustomModal";

const CompaniesPage = (props) => {

  const [open, setOpen] = useState(false);

  const onModaleClose = () => {
    setOpen(false);
  };

  const onOpenModal = () => {
    setOpen(true);
  };



  return (
    <>
    <CustomModal 
      onModaleClose={onModaleClose}
      open={open}>
      <CreateCompany onModaleClose={onModaleClose} />
    </CustomModal>

    <Layout page="Companies">
      <div className="row p-3 mt-3">
        <div className="col-md-3 m-0 p-0 mb-4">
          <SearchComponent />
        </div>
        <div className="col-md-7" />
        <div className="col-md-2 m-0 p-0 mb-4">
          <button 
            onClick={() => onOpenModal()}
            className="btn-lg btn-success-onye text-white btn-block">
          Create Company
          </button>
        </div>
      </div>
      <CompaniesTable />
    </Layout>
    </>
  );
};

export default CompaniesPage;