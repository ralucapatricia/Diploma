import team from "../IMG/team-icon.png";
import "./MiniFotbalTime.css";

export default function ShowTeam({rezervation, clickTeamHandler}){
    return (
        <>
        <img
        className="succes_booking"
        style={{ marginLeft: "16px" }}
        onClick={() => clickTeamHandler(rezervation.id)}
        src={team}
        alt=""
      />
      </>
    )
}