import "./MiniFotbalTime.css";

export default function Delete({ deleteHandler, rezervation, children }) {
  return (
    <button className="rezervation_button" style={{marginLeft: "16px"}} onClick={() => deleteHandler(rezervation.id, rezervation)}>
        {children}
    </button>
  );
}
