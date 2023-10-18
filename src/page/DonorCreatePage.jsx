// DonorCreatePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonorForm from "../component/DonorForm";
import { saveDonor } from "../utils/api";
import { Link } from 'react-router-dom';


const DonorCreatePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        bloodgroup: "",
    });
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saveDonor(formData);
            alert("New donor added");
            navigate("/donors");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <div className="row" style={{ marginTop: "60px" }}>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title" style={{ textAlign: "center" }}>
                                <h2>Add new Donor</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <DonorForm formData={formData} handleChange={handleChange} />
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-sm btn-success" type="submit">
                                                Save
                                            </button>
                                            <Link to="/donors" className="btn btn-sm btn-danger">
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonorCreatePage;
