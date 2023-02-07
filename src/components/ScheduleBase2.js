import "./ScheduleBase2.css";

export default function ScheduleBase2(){
    return (
        <div className="base2">
        <table id="myTable">
            <tr class="header">
                <th>Interval orar</th>
                <th>Interval săptămânal</th>
                <th>Beneficiar</th>
            </tr>
            <tr>
                <td>9:00 – 15:00</td>
                <td>LUNI-VINERI</td>
                <td>Cadre didactice și studenți UPT</td>
            </tr>
            <tr>
                <td>15:00 – 18:30</td>
                <td>LUNI-VINERI</td>
                <td>CSU Politehnica Timișoara</td>
            </tr>
            <tr>
                <td>18:30 – 20:30</td>
                <td>LUNI-VINERI</td>
                <td>Cadre didactice UPT</td>
            </tr>
            <tr>
                <td>20:30 – 22:00</td>
                <td>LUNI-VINERI</td>
                <td>Cadre didactice și studenți UPT; Alți abonați</td>
            </tr>
            <tr>
                <td>8:00 – 12:00</td>
                <td>SAMBATA</td>
                <td>CSU Politehnica Timișoara</td>
            </tr>
            <tr>
                <td>12:00 – 22:00</td>
                <td>SAMBATA</td>
                <td>Cadre didactice și studenți UPT; Alți abonați</td>
            </tr>
            <tr>
                <td>9:00 – 22:00</td>
                <td>DUMINICA</td>
                <td>Cadre didactice și studenți UPT; Alți abonaț</td>
            </tr>
        </table>
    </div>
    );
}