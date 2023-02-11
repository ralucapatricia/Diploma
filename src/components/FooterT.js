import {
   CarouselProvider,
   Slider,
   Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./FooterT.css";
import target from "../IMG/target.png";
import sport from "../IMG/football.png";
import new_photo from "../IMG/new.png";
import partners from "../IMG/partners.png";
import guide from "../IMG/user-guide.png";
import booking from "../IMG/booking.png";
import problem_app from "../IMG/problem_app.png";
import text from "../IMG/text.png";
import stand_out from "../IMG/stand-out.png";
import profile from "../IMG/profile.png";
import swipe from "../IMG/swipe.png";
import swipe_left from "../IMG/swipe_left.png";

export default function FooterT() {
   return (
      <div className="footerT">
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Coda+Caption&display=swap');
         </style>
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One&display=swap');
         </style>
         <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={10}
         >
            <Slider className="carusel">
               <Slide index={0}>
                  <div className="position">
                     <div className="style_title">Care e scopul acestei aplicații?</div>
                     <img src={target} />
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           
                        </span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={1}>
                  <div className="position">
                     <span className="style_text">Această aplicație vine în ajutorul studențiilor, ea stimulează
                        comunicarea și creșterea timpului petrecut în bazele sportive.</span>
                     <p><img src={sport} /></p>
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={2}>
                  <div className="position">
                     <div className="style_title">Ce aduce nou această aplicație?</div>
                     <img src={new_photo} />
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={3}>
                  <div className="position">
                     <span className="style_text">
                        Deja există o aplicație de booking pentru bazele sportive
                        aparținătoare de UPT , dar această varinată aduce ceva cu totul nou.
                        Dând posibilitatea să poți să îți crezi o echipă și să știi deja cu
                        cine îți petreci tipul. Multe dintre sporturile plăcute de tineri
                        sunt realizate în echipă. Cea mai grea parte este construirea
                        echipei, de exemplu pentru un meci de footbal ea nevoie de 12
                        persoane. Aplicația facilitează construirea echipei deoarece nu e
                        nevoie să cunoști 12 persoane pentru a merge la un meci de fotbal. E
                        suficient să faci o rezervare pe aplicație și jucătorii vor veni la
                        tine nu tu la ei.</span>
                     <p><img src={partners} /></p>
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={4}>
                  <div className="position">
                     <div className="style_title">Cum folosești această aplicație?</div>
                     <img src={guide} />
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={5}>
                  <div className="position">
                     <span className="style_text">
                        Aplicația se folosește cu ușurință. Tot ce trebuie să faci este să
                        îți alegi sportul, cu ajutorul calendarului alegi ziua și ora și
                        faci o rezervare. Se va crea un un eveniment unde jucătorii se pot
                        înscrie iar tu poți să alegi cu cine dorești să joci.</span>
                     <p><img src={booking} /></p>
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>

               <Slide index={6}>
                  <div className="position">
                     <div className="style_title">Ce se întâmplă dacă întâmpini o problemă?</div>
                     <img src={problem_app} />
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={7}>
                  <div className="position">
                     <span className="style_text">
                        Avem o secțiune unde fiecare utilizator poate să ne trimită un mesaj cu problema
                        întâmpinată, iar mai apoi noi o să revenim cu o rezolvarea.
                        Se poate vedea chiar și un istoric al mesajelor trimise către noi.</span>
                     <p><img src={text} /></p>
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={8}>
                  <div className="position">
                     <div className="style_title">Cum poți să ieși în evidență?</div>
                     <img src={stand_out} />
                  </div>
                  <div className="carousel-button">
                     <div>
                        <span className="swipe" >
                           <img src={swipe} /></span>
                        <img className="swipe_left" src={swipe_left} />
                     </div>
                  </div>
               </Slide>
               <Slide index={9}>
                  <div className="position">
                     <span className="style_text">
                        Poți să îți creezi un profil oferind câteva date despre tine.</span>
                     <p><img src={profile} /></p>
                  </div>
                  <div className="all_swipe">
                     <div className="swipe_left">
                        <img src={swipe_left} />
                     </div>
                  </div>
               </Slide>
            </Slider>
         </CarouselProvider>
      </div>
   );
}
