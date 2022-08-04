import "./aboutMe.css";
import {useState} from 'react';

const AboutMe = () => {
  const [name, setName] = useState('');
  const toggleName = () => {
    setName('Tom Van Hook');
  };

  return (
  <div className="about-me">
  <h1>Hello! My name is</h1>
  <h4 className="name">{name}</h4>

  <button onClick={toggleName}>See my name</button>
  </div>
  );
};

export default AboutMe;