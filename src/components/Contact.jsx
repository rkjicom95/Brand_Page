import React from "react";
import { MdMessage, MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="container">
      <div className="main_com">
        <div className="container_section">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>
        <section className="contact_part">
          <div className="contact_form">
            <div className="top_btn">
              <button className="primary_btn">
                <MdMessage fontSize={24} />
                VIA SUPPORT CHAT
              </button>
              <button className="primary_btn">
                <MdCall fontSize={24} />
                VIA CALL
              </button>
            </div>
            <div>
              <button className="line_btn">
                <GrMail fontSize={24} />
                VIA EMAIL FORM
              </button>
            </div>
            <form>
              <div className="form_control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="form_control">
                <label htmlFor="mail">E-Mail</label>
                <input type="text" name="mail" />
              </div>
              <div className="form_control">
                <label htmlFor="text">Text</label>
                <textarea type="text" name="text" rows={8} />
              </div>
              <div className="submit_btn">
                <button type="text">SUBMIT</button>
              </div>
            </form>
          </div>
          <div className="last_img">
          <img src="/images/contact.svg" alt="contact image" />

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
