import { useContext, useState } from 'react';
import { DataContext } from "../../../funcs/DataContext.jsx";
import { PointContext } from '../../../funcs/PointContext.jsx';
import { useNavigate } from "react-router-dom";
import { registerScore } from '../../../api/score.jsx';
import { UserContext } from '../../../funcs/userContext.jsx';

const Buttons = () => {

    const { data, fetchData } = useContext(DataContext);
    const { points, setPoints } = useContext(PointContext);
    const navigate = useNavigate();
    const [maxPoints, setMaxPoints ] = useState(0)
    // const { user, setUser } = useContext(UserContext);


    const handleApprove = () => {
        if (maxPoints == 25) {
            // const score = {
            //     "username": user,
            //     "now_level": 1,
            //     "first_level_score": points
            // }
            // async ({ setSubmitting }) => {
            //     await new Promise((r) => setTimeout(r, 500));
            //     setSubmitting(false);
            //     await registerScore(score);
            // }
            console.log("poo");
            navigate("/");
        }
        if (data.error_code == 0 || data.error_code == 2 || data.error_code == 3) {
            setPoints(points + 1);
            fetchData();
        } else {
            setPoints(points);
            fetchData();
        }
        setMaxPoints(maxPoints + 1);
    };
    const handleDeny = () => {
        if (maxPoints == 25) {
            console.log("poo");
            registerScore();
            navigate("/");
        }
        if (data.error_code == 0 || data.error_code == 2 || data.error_code == 3) {
            setPoints(points);
            fetchData();
        } else {
            setPoints(points + 1);
            fetchData();
        }
        setMaxPoints(maxPoints + 1);
    };

    return (
        <>
            <button className="btnY" onClick={handleApprove} type="button">
                Approve
            </button>
            <button className="btnN" onClick={handleDeny} type="button">
                Deny
            </button>
        </>
    )
}

export default Buttons;