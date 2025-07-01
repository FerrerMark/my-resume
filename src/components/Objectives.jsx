import { resumeData } from "../data";

const Objectives = () => {
    return (
        <div className="objectives">
            <h3>Objectives</h3>
            <p>{resumeData.objective}</p>
        </div>
    );
};

export default Objectives;