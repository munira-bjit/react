// DonorForm.js
import React from "react";

const DonorForm = ({ formData, handleChange }) => {
    return (
        <div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Blood Group</label>
                    <input
                        value={formData.bloodgroup}
                        onChange={(e) => handleChange("bloodgroup", e.target.value)}
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
};

export default DonorForm;
