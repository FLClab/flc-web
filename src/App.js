import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Intro from "./Intro";
import Research from "./Research";
import Student from "./Student";
import Member from "./Member";
import Publication from "./Publication";
import img_Albert from "./img/members/Albert_Michaud_crop.png";
import img_Andreanne from "./img/members/Andreanne_Deschenes_crop.JPG";
import img_Alexandre from "./img/members/Alexandre_Boulay_crop.JPG";
import img_Anthony from "./img/members/Anthony_Bilodeau_crop.JPG";
import img_AntoineG from "./img/members/Antoine_Girard_crop.png";
import img_AntoineO from "./img/members/AntoineSeverinOllier.JPG";
import img_Benoit from "./img/members/Benoit_Turcotte_crop.JPG";
import img_Catherine from "./img/members/Catherine_Bouchard_crop.png";
import img_Flavie from "./img/members/Flavie_Lavoie-Cardinal.png";
import img_JM from "./img/members/JeanMichelBellavance_crop.png";
import img_Laurence from "./img/members/Laurence_Fontaine_crop.png";
import img_Owen from "./img/members/OwenFerguson_crop.JPG";
import img_Philippe from "./img/members/Philippe_Gagnon_crop.png";
import img_Renaud from "./img/members/renaud_bernatchez_crop.png";
import img_Theresa from "./img/members/Theresa_Wiesner_crop.png";
import img_William from "./img/members/WilliamL_crop.png";
import synapses from "./img/gallery/SynapticProteins.png";
import strings from "./strings.json";



function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Intro />
      <Research />

      {/* Members */}
      <div className="members__label">
        {strings.Members.members}
      </div>
      <Member 
        img={synapses}
        level={strings.Members.Levels.research}
        member={strings.Members.Valerie.name}
        info={strings.Members.Valerie.info}
      />
      <Member
        img={img_Theresa}
        level={strings.Members.Levels.postdoc}
        member={strings.Members.Theresa.name}
        info={strings.Members.Theresa.info}
      />

      { /* Students */ }
      <div className="students__label">
        {strings.Members.students}
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_Albert}
          level={strings.Members.Levels.masters}
          student={strings.Members.Albert.name}
          info={strings.Members.Albert.info}
        />
        <Student 
          img={img_Alexandre}
          level={strings.Members.Levels.undergrad}
          student={strings.Members.Alexandre.name}
          info={strings.Members.Alexandre.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_Andreanne}
          level={strings.Members.Levels.phd}
          student={strings.Members.Andreanne.name}
          info={strings.Members.Andreanne.info}
        />
        <Student 
          img={img_Anthony}
          level={strings.Members.Levels.phd}
          student={strings.Members.Anthony.name}
          info={strings.Members.Anthony.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_AntoineG}
          level={strings.Members.Levels.masters}
          student={strings.Members.AntoineG.name}
          info={strings.Members.AntoineG.info}
        />
        <Student 
          img={img_AntoineO}
          level={strings.Members.Levels.masters}
          student={strings.Members.AntoineO.name}
          info={strings.Members.AntoineO.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_Benoit}
          level={strings.Members.Levels.masters}
          student={strings.Members.Benoit.name}
          info={strings.Members.Benoit.info}
        />
        <Student 
          img={img_Catherine}
          level={strings.Members.Levels.phd}
          student={strings.Members.Catherine.name}
          info={strings.Members.Catherine.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={synapses}
          level={strings.Members.Levels.masters}
          student={strings.Members.Frederic.name}
          info={strings.Members.Frederic.info}
        />
        <Student 
          img={img_JM}
          level={strings.Members.Levels.masters}
          student={strings.Members.JM.name}
          info={strings.Members.JM.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_Laurence}
          level={strings.Members.Levels.undergrad}
          student={strings.Members.Laurence.name}
          info={strings.Members.Laurence.info}
        />
        <Student 
          img={img_Owen}
          level={strings.Members.Levels.phd}
          student={strings.Members.Owen.name}
          info={strings.Members.Owen.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_Philippe}
          level={strings.Members.Levels.undergrad}
          student={strings.Members.Philippe.name}
          info={strings.Members.Philippe.info}
        />
        <Student 
          img={img_Renaud}
          level={strings.Members.Levels.masters}
          student={strings.Members.Renaud.name}
          info={strings.Members.Renaud.info}
        />
      </div>
      <div className="student-pair__container">
        <Student 
          img={img_William}
          level={strings.Members.Levels.masters}
          student={strings.Members.William.name}
          info={strings.Members.William.info}
        />
        <Student 
          img={synapses}
          level={strings.Members.Levels.undergrad}
          student={strings.Members.Zoe.name}
          info={strings.Members.Zoe.info}
        />
      </div>

      { /* Gallery */ }
      <div className="gallery__label">
        {strings.Gallery.label}
      </div>

      { /* Publications */ }
      <div className="publications__label">
        {strings.Publications.label}
      </div>
      
      <Publication
        authors={strings.Publications.MicraNet.authors}
        title={strings.Publications.MicraNet.title}
        link={strings.Publications.MicraNet.source}
        journal={strings.Publications.MicraNet.journal}
      />
      

    </div>
  );
}

export default App;
