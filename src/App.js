import logo from './logo.svg';
import './App.css';
import "./Nav.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Intro from "./Intro";
import Research from "./Research";
import Student from "./Student";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Student />
      <Intro />
      <Research />
      <Student 
        img1="./img/members/Albert_Michaud_crop.png"
        img2="./img/members/Alexandre_Boulay_crop.JPG"
        student1="Albert"
        student2="Alexandre"
        description1='lorem ipsum'
        description2="lorem ipsum"
      />

    </div>
  );
}

export default App;
