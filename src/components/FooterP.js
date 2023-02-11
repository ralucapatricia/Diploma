import { useState, useContext, useEffect } from "react";
import { db } from '../firebase';
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

import history from "../IMG/historyIcon.png";
import RequestHistory from "./RequestHistory";
import "./FooterP.css";
import problem from "../IMG/problem.png";
import solution from "../IMG/solution.png";
import LaundryHelp from "./LaundryHelp";
import OtherHelp from "./OtherHelp";
import Modal from "./Modal";
import { ModalContext } from "../contexts/ModalContext";
import success1 from "../IMG/success.jpg";
import error1 from "../IMG/error.jpg";
import { ProblemContext } from "../contexts/ProblemsContext";
import { UserAuth } from "../contexts/AuthContext";

export default function FooterP() {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [base, setBase] = useState('');
    const [defBase, setDefBase] = useState();
    const [text, setText] = useState('');

    const problemsCtx = useContext(ProblemContext);
    const modalCtx = useContext(ModalContext);
    const { user } = UserAuth();

    function LaundryProblemHandler() {
        setActive(true);
        setActive1(false);
        setActive2(false);
    }

    function BasesProblemHandler() {
        setActive1(true);
        setActive(false);
        setActive2(false);
    }

    function RequstHistoryHandler() {
        setActive1(false);
        setActive2(true);
        setActive(false);
    }

    function closeModalHandler() {
        modalCtx.openModal(false);
    }

    function firstNameHandler(event) {
        setFirstName(event.target.value);
    }

    function lastNameHandler(event) {
        setLastName(event.target.value);
    }

    function baseHandler(event) {
        setBase(event.target.value);
    }

    function textHandler(event) {
        setText(event.target.value);
    }


    const createTodo = async (event) => {
        event.preventDefault(event);
        try {
            if (firstName === "" || lastName === "" || text === "" || base === "") {

                modalCtx.messageModal("Nu sunt completate toate câmpurile!");
                modalCtx.imageModal(error1);
            }
            else {
                modalCtx.messageModal("Problema dumneavoastră a fost înregistrată! Vom reveni în scurt timp cu o soluție.");
                modalCtx.imageModal(success1);
                await addDoc(collection(db, 'problems'), {
                    email_store: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    base: base,
                    text: text,
                    date: new Date().toDateString(),
                });
            }
        }
        catch (error) {
            console.log("error!");
        }
        setFirstName("");
        setLastName("");
        setText("");
        setBase("");
        setDefBase(<option disabled selected value> -- select an option -- </option>);
        modalCtx.openModal(true);
    };
    useEffect(() => {
        const q = query(collection(db, 'problems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let baseProblemsArr = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().email_store === user.email) {
                    baseProblemsArr.push({ ...doc.data(), id: doc.id });
                }
            });
            problemsCtx.getProblems(baseProblemsArr);
        });
        return () => unsubscribe();
    }, [user.email]);

    return (

        <div className="footerP">
            {modalCtx.open && <Modal onClosing={closeModalHandler} messageModal={modalCtx.message} imageModal={modalCtx.image} />}

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
            </style>
            <div>
                <div className="title">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
                    </style>
                </div>
            </div>
            <div className="column2" >
                <div className="column">
                    <div>
                        <div className="elements">
                            <h2>Descrierea problemei</h2>
                            <img src={problem} alt='' width="205" height="190" />
                        </div>
                        <div className="row">
                            <img className="history_icon" onClick={RequstHistoryHandler} src={history} alt='' width="80" height="70" />

                            <button className="button1" onClick={BasesProblemHandler}>Baze sportive</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {active1 && <OtherHelp firstNameHandler={firstNameHandler}
                                lastNameHandler={lastNameHandler}
                                baseHandler={baseHandler}
                                textHandler={textHandler}
                                createTodo={createTodo}
                                firstName={firstName}
                                lastName={lastName}
                                defBase={defBase}
                                base={base}
                                text={text}
                                date={new Date().toDateString()}
                            />}
                        </div>
                        <div>
                            {active2 && <RequestHistory />}
                        </div>
                    </div>
                    <div className="vl2">

                    </div>
                </div>
                <img className="image" src={solution} alt='' width="100%" height="600" />
            </div>
        </div>

    );
}