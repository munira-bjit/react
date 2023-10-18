import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DonorForm from "../component/DonorForm";
import { getDonor, updateDonor } from "../utils/api";

function DonorEditPage() {
    const navigate = useNavigate();
    const { donorid } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        bloodgroup: "",
    });

    useEffect(() => {
        async function fetchDonorData() {
            try {
                const donorData = await getDonor(donorid);
                setFormData({
                    name: donorData.name,
                    bloodgroup: donorData.bloodGroup,
                });
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchDonorData();
    }, [donorid]);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDonor(donorid, formData);
            alert("Donor updated");
            navigate("/donors");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="row" style={{ marginTop: "60px" }}>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title" style={{ textAlign: "center" }}>
                                <h2 textAlign="center">Edit Donor</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <DonorForm formData={formData} handleChange={handleChange} />
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-sm btn-success" type="submit">
                                                Save
                                            </button>
                                            <button onClick={() => navigate("/donors")} className="btn btn-sm btn-danger">
                                                Cancel
                                            </button>
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
}

export default DonorEditPage;
