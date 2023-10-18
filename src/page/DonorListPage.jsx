import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DonorTable from "../component/DonorTable";
import Header from "../component/Header";
import useDonorData from "../hooks/useDonorData";
import { fetchAllDonors } from "../utils/api";

const DonorListPage = () => {
    const [donorData, setDonorData] = useState(null);
    const navigate = useNavigate();

    const confirmRemove = (id) => {
        if (window.confirm('Do you want to remove it?')) {
            fetch("http://localhost:9090/delete-patient/" + id, {
                method: "DELETE"
            }).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }

    const { donorData: donorDetails, loading } = useDonorData();

    useEffect(() => {
        fetchAllDonors()
            .then((data) => setDonorData(data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="card">
                <div className="card-title">
                    <h2>Donor List</h2>
                </div>
                <div className="card-body">
                    <DonorTable
                        donorData={donorData}
                        onEdit={(id) => navigate(`/update-patient/${id}`)}
                        onRemove={(id) => confirmRemove(id)}
                        onDetails={(id) => navigate(`/patient/${id}`)}
                    />
                </div>
            </div>
            <div className="divbtn">
                <Link to="/donor/create" className="btn btn-primary">
                    Add New Donor
                </Link>
            </div>
        </div>
    );
};
export default DonorListPage;