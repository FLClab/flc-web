import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import Affiliations from "./Affiliations";
import Nav from "./Nav";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Funding from "./Funding";
import Gallery from "./Gallery";
import Intro from "./Intro";
import Research from "./Research";
import MemberSet from './MemberSet';
import PI from "./PI";
import PublicationSet from "./PublicationSet";
import StudentPair from "./StudentPair";
import StudentSet from "./StudentSet";
import Zooniverse from "./Zooniverse";
import img_Albert from "./img/members/Albert_Michaud_crop.png";
import img_Alexis from "./img/members/Alexis_Lebrun_crop.jpg";
import img_Andreanne from "./img/members/Andreanne_Deschenes_crop.JPG";
import img_Anthony from "./img/members/Anthony_Bilodeau_crop.JPG";
import img_AntoineG from "./img/members/Antoine_Girard_crop.png";
import img_AntoineO from "./img/members/AntoineSeverinOllier.JPG";
import img_Benoit from "./img/members/Benoit_Turcotte_crop.JPG";
import img_Catherine from "./img/members/Catherine_Bouchard_crop.png";
import img_JM from "./img/members/JeanMichelBellavance_crop.png";
import img_Flavie from "./img/members/Flavie_Lavoie-Cardinal.png";
import img_Fred from "./img/members/Fred_Beaupre_crop.jpg";
import img_Owen from "./img/members/OwenFerguson_crop.JPG";
import img_Renaud from "./img/members/renaud_bernatchez_crop.png";
import img_Valerie from "./img/members/Valerie_ClavetFournier_crop.jpg";
import img_Theresa from "./img/members/Theresa_Wiesner_crop.png";
import img_William from "./img/members/WilliamL_crop.png";
import img_Vincent from "./img/members/Vincent_Boily_crop.png";
import img_Roseline from "./img/members/RoselineOloryAgomma_crop.jpg";
import strings from "./strings.json";
import img_Julia from "./img/members/Julia_Chabbert_crop.jpg";
import img_Eric from "./img/members/EricBergeron_crop.jpg";
import synapses from "./img/gallery/cultures.png"


function App() {
  const [introScroll, setIntroScroll] = useState(0);
  const [memberScroll, setMemberScroll] = useState(0);
  const [galleryScroll, setGalleryScroll] = useState(0);
  const [pubScroll, setPubScroll] = useState(0);
  const [fundScroll, setFundScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);

  console.log(strings.Members)

  useEffect(() => {
    const introTemp = document.getElementById('intro-section').offsetTop;
    setIntroScroll(introTemp);
    const memberTemp = document.getElementById('members-section').offsetTop;
    setMemberScroll(memberTemp);
    const galleryTemp = document.getElementById('gallery-section').offsetTop;
    setGalleryScroll(galleryTemp)
    const pubTemp = document.getElementById('publications-section').offsetTop;
    setPubScroll(pubTemp);
    const fundTemp = document.getElementById('funding-section').offsetTop;
    setFundScroll(fundTemp);
    const contactTemp = document.getElementById('contact-section').offsetTop;
    setContactScroll(contactTemp);
  }, [])

  return (
    <div className="app">
      <Nav 
        id="nav-section" 
        navY={0}
        introY={introScroll}
        memberY={memberScroll}
        galleryY={galleryScroll}
        pubY={pubScroll}
        fundingY={fundScroll}
        contactY={contactScroll}
      />
      <Banner id="banner-section" />
      <Zooniverse />
      <div id="intro-section">
        <Intro/>
      </div>
      <Research id="research-section" />

      {/* Members */}
      <div className="members__label" id="members-section">
        {strings.Members.members}
      </div>
      <PI data={strings.Members.Flavie} level={strings.Members.Levels.pi} img={img_Flavie}/>
      <MemberSet
        member1={strings.Members.Valerie}
        member2={strings.Members.Theresa}
        member3={strings.Members.Roseline}
        level1={strings.Members.Levels.research}
        level2={strings.Members.Levels.postdoc}
        level3={strings.Members.Levels.postdoc}
        image1={img_Valerie}
        image2={img_Theresa}
        image3={img_Roseline}
        hasDirectors1={false}
        hasDirectors2={true}
        hasDirectors3={true}
        director1=""
        director2={strings.Members.Theresa.director}
        director3={strings.Members.Roseline.director}
        codirector1=""
        codirector2={strings.Members.Theresa.codirector}
        codirector3={strings.Members.Roseline.codirector}
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
        student3={strings.Members.Alexy}
        level3={strings.Members.Levels.undergrad}
        image3={synapses}
        student4={strings.Members.Andreanne}
        level4={strings.Members.Levels.phd}
        image4={img_Andreanne}
       

      />
      <StudentSet 
        student1={strings.Members.Anthony}
        level1={strings.Members.Levels.phd}
        image1={img_Anthony}
        student2={strings.Members.AntoineG}
        level2={strings.Members.Levels.masters}
        image2={img_AntoineG}
        student3={strings.Members.AntoineO}
        level3={strings.Members.Levels.masters}
        image3={img_AntoineO}
        student4={strings.Members.Benoit}
        level4={strings.Members.Levels.masters}
        image4={img_Benoit}

      
      />
      <StudentSet
        student1={strings.Members.Catherine}
        level1={strings.Members.Levels.phd}
        image1={img_Catherine}
        student2={strings.Members.Elodie}
        level2={strings.Members.Levels.undergrad}
        image2={synapses}
        student3={strings.Members.Eric}
        level3={strings.Members.Levels.masters}
        image3={img_Eric}
        student4={strings.Members.Frederic}
        level4={strings.Members.Levels.masters}
        image4={img_Fred}



      />
      <StudentSet
        student1={strings.Members.JM}
        level1={strings.Members.Levels.masters}
        image1={img_JM}
        student2={strings.Members.Julia}
        level2={strings.Members.Levels.phd}
        image2={img_Julia}
        student3={strings.Members.Kamylle}
        level3={strings.Members.Levels.undergrad}
        image3={synapses}
        student4={strings.Members.Katrine}
        level4={strings.Members.Levels.undergrad}
        image4={synapses}
      />
          
      <StudentSet
        student1={strings.Members.Koraly}
        level1={strings.Members.Levels.undergrad}
        image1={synapses}
        student2={strings.Members.LaurenceD}
        level2={strings.Members.Levels.undergrad}
        image2={synapses}
        student3={strings.Members.LaurenceF}
        level3={strings.Members.Levels.undergrad}
        image3={synapses}
        student4={strings.Members.Marie}
        level4={strings.Members.Levels.undergrad}
        image4={synapses}
      />
          
      <StudentSet
        student1={strings.Members.Owen}
        level1={strings.Members.Levels.phd}
        image1={img_Owen}
        student2={strings.Members.PhilippeGT}
        level2={strings.Members.Levels.undergrad}
        image2={synapses}
        student3={strings.Members.Renaud}
        level3={strings.Members.Levels.masters}
        image3={img_Renaud}
        student4={strings.Members.Samuel}
        level4={strings.Members.Levels.undergrad}
        image4={synapses}
      />
      <StudentPair
        student1={strings.Members.Vincent}
        level1={strings.Members.Levels.masters}
        image1={img_Vincent}
        student2={strings.Members.William}
        level2={strings.Members.Levels.masters}
        image2={img_William}
      />

      <div className="alumni-label__container">
        <Link className="alumni__label" to="alumni">{strings.Members.alumni}</Link>
      </div>

   
      { /* Gallery */ }
      <div className="gallery__label" id="gallery-section">
        {strings.Gallery.label}
        <Gallery />
      </div>

      <div className="publications__label" id="publications-section">
        {strings.Publications.label}
      </div>
      <PublicationSet />

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

      <footer className="designed__by">
          <span>Copyright &copy; 2021 FLC Lab</span>
          <hr className="closing__line"></hr>
          <span>Designed by: Frédéric Beaupré, Catherine Bouchard, Andréanne Deschênes</span>
        </footer>
  
    </div>
  );
}

export default App;
