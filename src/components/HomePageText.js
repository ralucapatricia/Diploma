import "./HomePageText.css";
import homepage from "../IMG/homepag2.jpg";
import upt_run from "../IMG/upt_run.jpg";

export default function HomePageText() {
    return (
        <div className="text_home">
            <img src={upt_run} alt='' width="100%" height="1000" />
            <div className="info"><b>„Mereu în mișcare, mereu învingători”</b>
            </div>
        </div>
    );
}