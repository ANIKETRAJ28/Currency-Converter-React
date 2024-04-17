import axios from "axios";
import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${currency}`)
        .then((res) => setData(res.data.conversion_rates));
    }, [currency])
    return data;
}

export default useCurrencyInfo;