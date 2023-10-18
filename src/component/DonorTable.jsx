import React from "react";
import { useNavigate } from "react-router-dom";

const DonorTable = ({ donorData, onEdit, onRemove, onDetails }) => {
    const navigate = useNavigate();

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <td>Donor ID</td>
                    <td>Name</td>
                    <td>Blood Group</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {donorData &&
                    donorData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.bloodGroup}</td>
                            <td>
                                <button onClick={() => onEdit(item.id)} className="btn btn-sm btn-success">Edit</button>
                                <button onClick={() => onRemove(item.id)} className="btn btn-sm btn-danger">Remove</button>
                                <button onClick={() => onDetails(item.id)} className="btn btn-sm btn-primary">Details</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default DonorTable;
