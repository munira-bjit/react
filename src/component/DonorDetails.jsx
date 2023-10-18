import React from "react";
import { Link } from "react-router-dom";

const DonorDetails = ({ donorData, loading, donorid }) => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Patient Info</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Patient ID:</strong> {donorid}
                        </p>
                        <p className="card-text">
                            <strong>Patient Name:</strong> {donorData.name}
                        </p>
                        <p className="card-text">
                            <strong>Patient Blood Group:</strong> {donorData.bloodGroup}
                        </p>
                        <Link to="/donors" className="btn btn-primary">
                            Back
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonorDetails;
