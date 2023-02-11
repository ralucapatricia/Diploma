import { useEffect, useState } from "react";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
import { UserAuth } from "../contexts/AuthContext";


import "./TextHistory.css";

export default function TextHistory() {
  const [booking, setBooking] = useState([]);
  const { user } = UserAuth();

  function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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
  useEffect(() => {
    const q = query(collection(db, 'rezervations'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let bookingArr = [];
      querySnapshot.forEach((doc) => {
         if(doc.data().store_email === user.email){
        bookingArr.push({ ...doc.data(), id: doc.id });
         }
      });
      setBooking(bookingArr);
    });
    return () => unsubscribe();
  }, [user.email]);

  return (
    <div className="text_history">
      <div className="title">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
        </style>
        <h1>
          <span className="firstLeter">I</span>storicul rezervărilor
        </h1>
      </div>
      <div className="scrollit">
        <input
          type="text"
          id="myInput"
          onKeyUp={searchFunction}
          placeholder="Search for names.."
          title="Type in a name"
        />
        <table id="myTable">
          <thead>
            <tr class="header">
              <th>Interval orar</th>
              <th>Data</th>
              <th>Beneficiar</th>
            </tr>
          </thead>
          <tbody>
          {booking.map((bookingHisory, index) => (
            <tr key={index}>
              <td>{bookingHisory.hour}</td>
              <td>{bookingHisory.date}</td>
              <td>{bookingHisory.store_email}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
