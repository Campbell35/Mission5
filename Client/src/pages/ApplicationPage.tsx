import React from "react";
import style from "./ApplicationPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function ApplicationPage() {
  return (
    <div className={style.application_main_page}>
      <Header />
      <div className={style.mainPage}>
        <div className={style.heroImage_container}>
          <div className={style.heroImage_left}>
            <img
              src="./images/Subs/hero-img.png"
              alt="house"
              width="600"
              height="350"
            />
          </div>
          <div className={style.heroImage_right}>
            <img
              src="./images/Subs/grid-image1.png"
              alt="house"
              width="220"
              height="165"
            />
            <img
              src="./images/Subs/grid-image2.png"
              alt="house"
              width="220"
              height="165"
            />
            <img
              src="./images/Subs/grid-image3.png"
              alt="house"
              width="220"
              height="165"
            />
            <img
              src="./images/Subs/grid-image5.png"
              alt="house"
              width="220"
              height="165"
            />
          </div>
        </div>
        <div className={style.buttonDiv}>
          <button className={style.button_photo}>Photo</button>
          <button className={style.button_floorplan}>Floor plans</button>
          <button className={style.button_map}>Map</button>
        </div>
        <div className={style.central_main}>
          <div className={style.central_container}>
            <div className={style.paragraph}>
              <span className={style.address_header}>
                21/105 Kingston Street
                <br />
                Auckland City
                <br />
                $1050.00 per week.
              </span>
              <br />
              <br />
              <span>
                Tidy two bedroom home in the heart of the city. Offered to the
                rental market for the first time in over 7 years, this
                outstanding duplex offers charm and character featuring two
                bedrooms (One double, one single) serviced by one bathroom. A
                separate spacious lounge and a separate kitchen. With original
                features of its era, including timber floors throughout. Single
                garage for storage and laundry.
                <br />
                <br /> Located across the road from Walker Park, a short stroll
                to the beach at Eric Armishaw reserve, playground and boat ramp
                and City Fitness Gym.
                <br />
                <br />
                Only a few minutes walk to popular restaurants and cafes and
                Auckland shops. Also in zone for Auckland Chevalier School and
                Western Springs College. With easy access to the CBD, motorway
                access, buses and beach life, it's no wonder Pt Chevalier is
                such a desirable suburb. This won't last long on the market so
                do not hesitate to register your interest. For more information,
                please contact Mark Thompson on 021479566.
                <br />
                <br /> Available unfurnished from 17th June, $500 per week. Move
                in cost: First two weeks rent and the bond, equivalent to four
                weeks rent.
                <br />
                Call for more inquiries
              </span>
            </div>
            <div className={style.form_container}>
              <div className={style.agentProfile_main}>
                <span>Interested in this property?</span><br></br>
                <span>Drop us a line and we'll get in touch </span>
                <br></br>
                <br></br>
                <img
                className={style.agentProfile_image}
                  src="./images/AgentProfilePic.jpg"
                  alt="Agent Profile"
                  width="380"
                  height="250"
                />
                <button className={style.agentProfile_button}>Enquiry Form:</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ApplicationPage;
