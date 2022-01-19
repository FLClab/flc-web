import React from 'react';
import './App.css';
import Affiliations from "./Affiliations";
import Nav from "./Nav";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Funding from "./Funding";
import Gallery from "./Gallery";
import Intro from "./Intro";
import Research from "./Research";
import MemberSet from './MemberSet';
import Publication from "./Publication";
import StudentSet from "./StudentSet"
import img_Albert from "./img/members/Albert_Michaud_crop.png";
import img_Alexis from "./img/members/Alexis_Lebrun_crop.jpg";
import img_Andreanne from "./img/members/Andreanne_Deschenes_crop.JPG";
import img_Anthony from "./img/members/Anthony_Bilodeau_crop.JPG";
import img_AntoineG from "./img/members/Antoine_Girard_crop.png";
import img_AntoineO from "./img/members/AntoineSeverinOllier.JPG";
import img_Benoit from "./img/members/Benoit_Turcotte_crop.JPG";
import img_Catherine from "./img/members/Catherine_Bouchard_crop.png";
import img_JM from "./img/members/JeanMichelBellavance_crop.png";
import img_Fred from "./img/members/Fred_Beaupre_crop.jpg"
import img_Laurence from "./img/members/Laurence_Fontaine_crop.png";
import img_Owen from "./img/members/OwenFerguson_crop.JPG";
import img_Renaud from "./img/members/renaud_bernatchez_crop.png";
import img_Valerie from "./img/members/Valerie_ClavetFournier_crop.jpg";
import img_Theresa from "./img/members/Theresa_Wiesner_crop.png";
import img_William from "./img/members/WilliamL_crop.png";
import img_Vincent from "./img/members/Vincent_Boily_crop.png";
import strings from "./strings.json";
import synapses from "./img/gallery/SynapticProteins.png";

function App() {
  return (
    <div className="app">
      <Nav id="nav-section" />
      <Banner id="banner-section" />
      <div id="intro-section">
        <Intro/>
      </div>
      <Research id="research-section" />

      {/* Members */}
      <div className="members__label" id="members-section">
        {strings.Members.members}
      </div>
      <MemberSet
        member1={strings.Members.Valerie}
        member2={strings.Members.Theresa}
        member3={strings.Members.Roseline}
        level1={strings.Members.Levels.research}
        level2={strings.Members.Levels.postdoc}
        level3={strings.Members.Levels.postdoc}
        image1={img_Valerie}
        image2={img_Theresa}
        image3={synapses}
      />
      { /* Students */ }
      <div className="students__label" id="students-section">
        {strings.Members.students}
      </div>
      <StudentSet
        student1={strings.Members.Albert}
        level1={strings.Members.Levels.masters}
        image1={img_Albert}
        student2={strings.Members.Alexis}
        level2={strings.Members.Levels.phd}
        image2={img_Alexis}
        student3={strings.Members.Andreanne}
        level3={strings.Members.Levels.phd}
        image3={img_Andreanne}
        student4={strings.Members.Anthony}
        level4={strings.Members.Levels.phd}
        image4={img_Anthony}

      />
      <StudentSet 
        student1={strings.Members.AntoineG}
        level1={strings.Members.Levels.masters}
        image1={img_AntoineG}
        student2={strings.Members.AntoineO}
        level2={strings.Members.Levels.masters}
        image2={img_AntoineO}
        student3={strings.Members.Benoit}
        level3={strings.Members.Levels.masters}
        image3={img_Benoit}
        student4={strings.Members.Catherine}
        level4={strings.Members.Levels.phd}
        image4={img_Catherine}
      
      />
      <StudentSet
        student1={strings.Members.Frederic}
        level1={strings.Members.Levels.masters}
        image1={img_Fred}
        student2={strings.Members.JM}
        level2={strings.Members.Levels.masters}
        image2={img_JM}
        student3={strings.Members.Julia}
        level3={strings.Members.Levels.phd}
        image3={synapses}
        student4={strings.Members.Laurence}
        level4={strings.Members.Levels.undergrad}
        image4={img_Laurence}

      />
      <StudentSet
        student1={strings.Members.Owen}
        level1={strings.Members.Levels.phd}
        image1={img_Owen}
        student2={strings.Members.Renaud}
        level2={strings.Members.Levels.masters}
        image2={img_Renaud}
        student3={strings.Members.Vincent}
        level3={strings.Members.Levels.masters}
        image3={img_Vincent}
        student4={strings.Members.William}
        level4={strings.Members.Levels.masters}
        image4={img_William}
      />
   
      { /* Gallery */ }
      <div className="gallery__label" id="gallery-section">
        {strings.Gallery.label}
        <Gallery />
      </div>

      <div className="publications__label" id="publications-section">
        {strings.Publications.label}
      </div>
      <Publication data={strings.Publications.MicraNet} />
      <Publication data={strings.Publications.TAGAN} />
      <Publication data={strings.Publications.Theresa} />
      <Publication data={strings.Publications.FActin} />
      <Publication data={strings.Publications.FluoLifetime} />
      <Publication data={strings.Publications.MLAuto} />
      <Publication data={strings.Publications.Prefnet} />
      <Publication data={strings.Publications.GoldNano} />
      <Publication data={strings.Publications.RESOLFT} />
      <Publication data={strings.Publications.GFP} />
      <Publication data={strings.Publications.Mitos} />
      <Publication data={strings.Publications.Dreiklang} />
      <Publication data={strings.Publications.Crystals} />
      <Publication data={strings.Publications.Crystals2} />
      <Publication data={strings.Publications.Crystals3} />
      <Publication data={strings.Publications.Crystals4} />

      <div className="affiliations__label" id="affiliations-section">
        {strings.Affiliations.label}
      </div>
      <Affiliations />

      <div className="funding__label" id="funding-section">
        {strings.Funding.label}
      </div>
      <Funding />

      <div className="contact__label" id="contact-section">
        {strings.ContactUs.label}
        <hr className="contact__hr"></hr>
        <ContactUs description={strings.ContactUs.description} email={strings.Members.Flavie.email} />
      </div>

      <footer class="designed__by">
          <span>Copyright &copy; 2021 FLC Lab</span>
          <hr class="closing__line"></hr>
          <span>Designed by: Frédéric Beaupré, Catherine Bouchard, Andréanne Deschênes</span>
        </footer>
  
    </div>
  );
}

export default App;
