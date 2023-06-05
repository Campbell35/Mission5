import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div>
      <div className={style.footer_main}>
        <div className={style.footer_container}>
          <div className={style.footer_div_left}>
            <img
              src="/images/Metro-logo.png"
              alt="logo"
              width="200"
              height="60"
            />
            <br></br>
            <br></br>
            <span>
              Metro NZ PM has offices conveniently located <br></br>
              in Central Auckland but also operate around<br></br>
              the country as well as internationally.
            </span>
           
          </div>
          <div className={style.footer_div_middle}>
            <span>Subscribe to our newsletter</span>
            <br></br>
            <input
              className={style.email_input_bar}
              type="text"
              placeholder="Enter your email to subscribe"
            />
            <br></br>
            <button className={style.subscribe_button}>Subscribe</button>
          </div>
          <div className={style.footer_div_right}>
            <div className={style.news_article_one}>
              <div className={style.image_placeholder}>IMAGE PLACEHOLDER</div>
              <div>
                Protecting your properties <br></br>during a natural disaster
              </div>
            </div>

            <div className={style.news_article_two}>
              <div className={style.image_placeholder}>IMAGE PLACEHOLDER</div>
              <div>
                Updates to the flooding<br></br>seen around New Zealand
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
