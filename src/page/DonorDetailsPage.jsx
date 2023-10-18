import React from "react";
import { useParams } from "react-router-dom";
import DonorDetails from "../component/DonorDetails";
import useDonorData from "../hooks/useDonorData";

const DonorDetailsPage = () => {
    const { donorid } = useParams();
    const { donorData, loading } = useDonorData(donorid);

    return <DonorDetails donorData={donorData} loading={loading} donorid={donorid} />;
};

export default DonorDetailsPage;
