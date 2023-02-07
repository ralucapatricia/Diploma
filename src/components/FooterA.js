import "./FooterA.css";
import campus from "../IMG/campus.jpg";

export default function FooterA() {
    return (
        <div className="footerA">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <div className="title">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
                </style>
                <h1><span className="firstLeter">D</span>espre noi</h1>
            </div>
            <div className="content">
                <p>Înfiinţată în anul 1920, la scurt timp după unirea teritoriilor româneşti, într-un context european marcat de redefinirea statală şi tarele primului război mondial, Şcoala Politehnică din Timişoara – cum s-a numit la început – a constituit răspunsul pentru una din cerinţele formulate de societatea românească a vremii, şi anume formarea de ingineri.
                </p>
                <p>Universitatea Politehnica Timişoara, universitate de cercetare avansată şi educaţie, este astăzi una dintre şcolile româneşti cu tradiţie, recunoscută în plan naţional şi internaţional, atât prin activitatea generaţiilor de cadre didactice, cât şi prin activitatea de excepţie a unor academicieni prestigioşi. În spiritul tradiţiei, misiunea Universităţii Politehnica Timişoara constă în satisfacerea cerinţelor de competenţă ale mediului societal, prin asigurarea formării profesionale superioare, de nivel universitar şi postuniversitar. Purtătoare de valori fundamentale, misiunea reflectă, totodată, preocuparea pentru viitorul societăţii, prin trasarea direcţiilor de dezvoltare a acesteia în plan local, regional, naţional, internaţional.</p>
                <p>În structura Universităţii Politehnica Timişoara sunt incluse facultăţi, departamente, institute şi centre de cercetare, laboratoare, biblioteci, cămine, cantine, baze sportive, precum şi serviciile tehnice şi administrative, editura şi tipografia, policlinica studenţească. Cele 10 facultăţi ale universităţii asigură programe de studii pentru aproximativ 13500 studenţi. În cadrul celor 25 departamente îşi desfăşoară activitatea peste 800 cadre didactice, iar personalul administrativ şi auxiliar numără în jur de 1000 cadre.  </p>
                <p>Campus-ul universitar cuprinde 16 cămine studenţeşti care oferă 6500 locuri de cazare, cu aproximatie, o cantină studenţească, o policlinică studenţească şi două baze sportive performante.</p>
            </div>
            <div className="photo">
                <img src={campus} alt='' width="900" height="900" />
            </div>
        </div>
    );
}