import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Intro from "./Intro";
import Research from "./Research";
import Student from "./Student";
import Member from "./Member";
import Publication from "./Publication";
import StudentSet from "./StudentSet"
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
      <StudentSet
        student1={strings.Members.Albert}
        level1={strings.Members.Levels.masters}
        image1={img_Albert}
        student2={strings.Members.Alexandre}
        level2={strings.Members.Levels.undergrad}
        image2={img_Alexandre}
        student3={strings.Members.Andreanne}
        level3={strings.Members.Levels.phd}
        image3={img_Andreanne}
        student4={strings.Members.Anthony}
        level4={strings.Members.Levels.phd}
        image4={img_Anthony}
      />
      <StudentSet 
        student1={strings.Members.Benoit}
        level1={strings.Members.Levels.masters}
        image1={img_Benoit}
        student2={strings.Members.Catherine}
        level2={strings.Members.Levels.phd}
        image2={img_Catherine}
        student3={strings.Members.Frederic}
        level3={strings.Members.Levels.masters}
        image3={synapses}
        student4={strings.Members.JM}
        level4={strings.Members.Levels.masters}
        image4={img_JM}
      />
      <StudentSet
        student1={strings.Members.Laurence}
        level1={strings.Members.Levels.undergrad}
        image1={img_Laurence}
        student2={strings.Members.Owen}
        level2={strings.Members.Levels.phd}
        image2={img_Owen}
        student3={strings.Members.Philippe}
        level3={strings.Members.Levels.undergrad}
        image3={img_Philippe}
        student4={strings.Members.Renaud}
        level4={strings.Members.masters}
        image4={img_Renaud}
      />
      <div className="trailing-students__container">
        <Student
          img={img_William}
          student={strings.Members.William.name}
          level={strings.Members.Levels.masters}
          info={strings.Members.William.info}
        />
        <Student
          img={synapses}
          student={strings.Members.Zoe.name}
          level={strings.Members.Levels.undergrad}
          info={strings.Members.Zoe.info}
        />
      </div>
      {/* <StudentSet
        student1={strings.Members.William}
        level1={strings.Members.Levels.masters}
        image1={img_William}
        student2={strings.Members.Zoe}
        level2={strings.Members.Levels.undergrad}
        image2={synapses}
        student3={null}
        level3={null}
        image3={null}
        student4={null}
        level4={null}
        image4={null}
      /> */}
      { /* Gallery */ }
      <div className="gallery__label">
        {strings.Gallery.label}
      </div>

      <div className="publications__label">
        {strings.Publications.label}
      </div>
      <Publication data={strings.Publications.MicraNet} />
      <Publication data={strings.Publications.TAGAN} />
      <Publication data={strings.Publications.Theresa} />
      <Publication data={strings.Publications.FActin} />
      <Publication data={strings.Publications.FluoLifetime} />
      <Publication data={strings.Publications.MLAuto} />
      <Publication data={strings.Publications.GoldNano} />
      <Publication data={strings.Publications.RESOLFT} />

      <div className="affiliations__label">
        {strings.Affiliations.label}
      </div>

      <div className="funding__label">
        {strings.Funding.label}
      </div>

      <div className="contact__label">
        {strings.ContactUs.label}
      </div>
  
    </div>
  );
}

export default App;
