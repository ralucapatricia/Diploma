import React, { useState, useRef, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./MinifotbalField.css";
import minifotbal from "../IMG/minifotbal.jpg";
import chat from "../IMG/chat.png";
import ScheduleBase1 from "./ScheduleBase1";
import ScheduleBase2 from "./ScheduleBase2";
import MiniFotbalTime from "../BookingTimes/MiniFotbalTime";
import IconInfo from "../iconInformation/IconInfo";
import Chat from "../chat/Chat";
import ModalChat from "../chat/ModalChat";
import ChatNavBar from "../chat/ChatNavBar";
import ModalTeam from "../components/ModalTeam";
import { ModalContext } from "../contexts/ModalContext";
import TeamList from "../BookingTimes/TeamList";

export default function MinifotfalField() {
  const [calDate, setCalDate] = useState(new Date());
  const modalCtx = useContext(ModalContext);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [activeForum, setActiveForum] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  function Base1Handler() {
    setActive(true);
    setActive1(false);
    setActiveCalendar(false);
  }

  function Base2Handler() {
    setActive1(true);
    setActive(false);
    setActiveCalendar(false);
  }

  function CalendarHandler() {
    setActive1(false);
    setActive(false);
    setActiveCalendar(true);
    setShowTime(true);
  }

  function ForumHandler() {
    setActiveForum(true);
  }

  function CloseButtonHandler() {
    setActiveForum(false);
  }
  function closeModalHandler() {
    modalCtx.openModal(false);
  }

  if (modalCtx.open) {
    return (
      <ModalTeam onClosing={closeModalHandler}>
        <div className="team-app">
          <TeamList />
        </div>
      </ModalTeam>
    );
  }

  return (
    <div className="text_minifotbal">
      <div className="container">
        <img src={minifotbal} alt="" width="100%" height="900" />
        <button className="btn button" onClick={handleClick}>
          Rezervă acum
        </button>
      </div>
      <div ref={ref}></div>
      <div>
        <div className="result-calendar row2">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
          </style>
          <div className="position_team">
            <div>
              <Calendar
                onChange={setDate}
                value={calDate}
                onClickDay={CalendarHandler}
              />
            </div>
            <div>
              <IconInfo />
              <img src={chat} onClick={ForumHandler} />
            </div>
          </div>
          <div>
            {activeCalendar && (
              <MiniFotbalTime showTime={showTime} date={date} />
            )}
          </div>
          <div className="schedule_position">
            <div>{active && <ScheduleBase1 />}</div>
            <div>{active1 && <ScheduleBase2 />}</div>
          </div>
        </div>
        <div className="row">
          <button className="button1" onClick={Base1Handler}>
            Baza 1
          </button>
          <button className="button1" onClick={Base2Handler}>
            Baza 2
          </button>
        </div>
      </div>

      <div className="vl_mfield"></div>
      <div>
        {activeForum && (
          <ModalChat>
            <ChatNavBar />
            <Chat />
            <div className="btnContainer_chat">
              <button className="btnPrimary_chat" onClick={CloseButtonHandler}>
                <span className="bold_chat">Închide conversația</span>
              </button>
            </div>
          </ModalChat>
        )}
      </div>
    </div>
  );
}
