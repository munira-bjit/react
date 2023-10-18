import { useEffect, useState } from "react";
import { fetchDonorData } from "../utils/api";

const useDonorData = (donorid) => {
    const [donorData, setDonorData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonorData(donorid)
            .then((resp) => {
                setDonorData(resp);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    }, [donorid]);

    return { donorData, loading };
};

export default useDonorData;
