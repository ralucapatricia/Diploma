import "./ScheduleBase1.css";

export default function ScheduleBase1() {
    return (
        <div className="base1">
            <table id="myTable">
                <tr class="header">
                    <th>Interval orar</th>
                    <th>Interval săptămânal</th>
                    <th>Beneficiar</th>
                </tr>
                <tr>
                    <td>8:00 – 16:00</td>
                    <td>LUNI-VINERI</td>
                    <td>în cadrul programelor didactice, cursul de bază</td>
                </tr>
                <tr>
                    <td>16:00 – 24:00</td>
                    <td>LUNI-VINERI</td>
                    <td>în afara programului didactic</td>
                </tr>
                <tr>
                    <td>8:00 – 24:00</td>
                    <td>SAMBATA-DUMINICA</td>
                    <td>în afara programului didactic</td>
                </tr>
                <tr>
                    <td>8:00 – 24:00</td>
                    <td>LUNI-DUMINICA</td>
                    <td>Pentru echipe sportive (cf. aprobării de catre Conducerea UPT)
Pe perioada vacanţei studenţeşti, pentru toate categoriile de utilizatori cf. programării</td>
                </tr>
            </table>
        </div>
    );
}