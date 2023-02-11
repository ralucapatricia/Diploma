import "./FooterC.css";
import adresa from "../IMG/adresa.jpg";
import fax from "../IMG/fax.png";
import email from "../IMG/email.png";
import Map from "./Map";

export default function FooterC() {
    return (
        <div className="footerC">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <div>
                <div className="title">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
                    </style>
                    <h1><span className="firstLeter">C</span>ontact</h1>
                </div>
                <div className="row2">
                    <div style={{ marginLeft: '30px' }}>
                        <h3 className="written">Universitatea <span className="firstLeter">Politehnica</span> Timisoara</h3>
                        <div className="row">
                            <img src={adresa} alt='' width="40" height="40" />
                            <div className="column">
                                <span>Piaţa Victoriei Nr. 2,</span>
                                <span>300006 Timişoara,</span>
                                <span>jud. Timiş, România</span>
                            </div>
                        </div>
                        <div className="row">
                            <img style={{ marginLeft: '5px' }} src={fax} alt='' width="40" height="40" />
                            <span style={{ marginLeft: '40px', marginTop: '10px' }}>0256 - 403021</span>
                        </div>
                        <div className="row">
                            <img style={{ marginLeft: '7px' }} src={email} alt='' width="40" height="40" />
                            <span style={{ marginLeft: '40px', marginTop: '10px' }}>rector@upt.ro</span>
                        </div>
                    </div>

                    <div className="position_contact">
                        <h3 className="written">Baze <span className="firstLeter">Sportive</span></h3>
                        <div className="baze">
                            <b style={{ marginTop: '20px' }}>Baza sportivă nr.1</b>
                            <div className="row2">
                                <img style={{ marginTop: '10px' }} src={adresa} alt='' width="40" height="40" />
                                <span style={{ marginTop: '20px' }}> Timişoara, 300223 Traian Lalescu nr. 2A</span>
                            </div>
                            <b style={{ marginTop: '50px' }}>Baza sportivă nr.2</b>
                            <div className="row2">
                                <img style={{ marginTop: '10px' }} src={adresa} alt='' width="40" height="40" />
                                <span style={{ marginTop: '20px' }}> Timişoara, 300586 Str. Păunescu Podeanu nr.2, (lângă Stadionul Dan Paltinişanu)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="vl">

                    </div>
                   
                </div>
            </div>
            <div className="map_container">
            <Map />
            </div>
        </div>
    );
}