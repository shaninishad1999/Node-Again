import { useEffect, useState } from "react";
import axios from "axios";

const Salary = () => {
    const [totalSalary, setTotalSalary] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:9000/employee/salary")
            .then(res => setTotalSalary(res.data.totalSalary))
            .catch(() => setTotalSalary(0));
    }, []);

    return (
        <div className="text-center p-4">
            <h2 className="text-xl font-bold">Total Salary: {totalSalary}</h2>
        </div>
    );
};

export default Salary;