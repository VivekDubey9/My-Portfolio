import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../Images/contact1.jpg";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);
    console.log(localStorage);
    const userData = { name, email, message };

    localStorage.setItem("userData", JSON.stringify(userData));
    const data = localStorage.getItem("userData");

    const userInfo = JSON.parse(data);
    setInfo(userInfo.name);

    console.log(userInfo.name);
    setName("");
    setEmail("");
    setMessage("");

    //emailjs configurations..
    emailjs
      .sendForm("service_sphwbjs", "template_n52blux", form.current, {
        publicKey: "AZitopbUN1xkm_s17",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" max-w-[1050px] mx-auto mt-16 sm:p-4 md:p-4 ">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 items-center justify-center gap-10">
        <img
          className="sm:hidden mix-blend-multiply h-[400px] rounded-lg mt-6 shadow-2xl"
          src={logo}
          alt="contact us img here"
        />
        <div className="flex flex-col gap-4 justify-center">
          {info.length > 0 ? (
            <h1 className="text-customGreen font-bold text-2xl ">
              Greetings! {info}
            </h1>
          ) : (
            <h1 className="text-customGreen font-bold text-2xl ">
              Contact me!
            </h1>
          )}
          {info.length > 0 ? (
            <p className="text-customPara">
              Your message brightened my day. Let's work together to bring your
              ideas to life ,will connect with you soon
            </p>
          ) : (
            <p className="text-customPara ">
              Just fill the form or shoot me an email
            </p>
          )}
          {info.length === 0 ? (
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col border-l-2 border-t-2  shadow-lg border-customGreen p-2 rounded-lg mt-2 gap-2"
            >
              <input
                className="rounded-lg  peer-focus-visible: p-2 "
                type="text"
                name="user_name"
                placeholder="your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="rounded-lg  p-2"
                type="email"
                placeholder="your email here"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="rounded-lg p-2"
                rows="4"
                cols="25"
                name="message"
                placeholder="your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <input
                type="submit"
                value="Send"
                className="rounded-lg p-2 border-2 text-white bg-customGreen  hover:shadow-2xl hover:shadow-customBlack"
              />
            </form>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
