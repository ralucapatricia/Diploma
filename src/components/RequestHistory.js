import { useContext } from "react";

import { ProblemContext } from "../contexts/ProblemsContext";
import "./RequestHistory.css";

export default function RequestHistory() {
  const problemsCtx = useContext(ProblemContext);

  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div className="base1_history">
      <div className="scrollit">
        <input
          type="text"
          id="myInput"
          onKeyUp={myFunction}
          placeholder="Search for names.."
          title="Type in a name"
        />
        <table id="myTable">
          <thead>
            <tr class="header">
              <th>Nume</th>
              <th>Prenume</th>
              <th>Baza sportiva</th>
              <th>Detalii</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {problemsCtx.problems.map((problem, index) => {
              return (
                <tr key={index} problem={problemsCtx.problems}>
                  <td>{problem.firstName}</td>
                  <td>{problem.lastName}</td>
                  <td>{problem.base}</td>
                  <td>{problem.text}</td>
                  <td>{problem.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
