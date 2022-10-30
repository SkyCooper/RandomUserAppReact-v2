import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/Footer";
import axios from "axios";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState([]);
  const [changedText, setChangedText] = useState("");
  const [changedValue, setChangedValue] = useState("");
  const [userList, setUserList] = useState([]);

  const getUser = async () => {
    try {
      const { data } = await axios(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  const { name, picture, email, dob, location, cell, login } = user;

  const showName = (e) => {
    const { title, first, last } = name;
    setChangedText(e.target.name);
    setChangedValue(title + " " + first + " " + last);
  };
  const showEmail = (e) => {
    setChangedText(e.target.name);
    setChangedValue(email);
  };
  const showStreet = (e) => {
    const {
      street: { number, name },
    } = location;
    setChangedText(e.target.name);
    setChangedValue(number + " " + name);
  };
  const showAge = (e) => {
    const { age } = dob;
    setChangedText(e.target.name);
    setChangedValue(age);
  };
  const showPhone = (e) => {
    setChangedText(e.target.name);
    setChangedValue(cell);
  };
  const showPassword = (e) => {
    const { password } = login;
    setChangedText(e.target.name);
    setChangedValue(password);
  };

  const newUser = () => {
    setChangedText("");
    setChangedValue("");
    getUser();
  };
  const addUser = () => {
    if (!userList.includes(user)) {
      setUserList([user, ...userList]);
    }
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p className="user-title">My {changedText} is</p>
          <p className="user-value">{changedValue}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={user?.gender === "female" ? womanSvg : manSvg}
                alt="user"
                id="iconImg"
                name="name"
                onMouseOver={showName}
              />
            </button>
            <button className="icon" data-label="email">
              <img
                src={mailSvg}
                alt="mail"
                id="iconImg"
                name="email"
                onMouseOver={showEmail}
              />
            </button>
            <button className="icon" data-label="age">
              <img
                src={user?.gender === "female" ? womanAgeSvg : manAgeSvg}
                alt="age"
                id="iconImg"
                name="age"
                onMouseOver={showAge}
              />
            </button>
            <button className="icon" data-label="street">
              <img
                src={mapSvg}
                alt="map"
                id="iconImg"
                name="street"
                onMouseOver={showStreet}
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                id="iconImg"
                name="phone"
                onMouseOver={showPhone}
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="lock"
                id="iconImg"
                name="password"
                onMouseOver={showPassword}
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={newUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={addUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => {
                return (
                  <tr key={index} className="body-tr">
                    <th className="th">{user.name.first}</th>
                    <th className="th">{user.email}</th>
                    <th className="th">{user.phone}</th>
                    <th className="th">{user.dob.age}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
