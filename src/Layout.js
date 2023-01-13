import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import Affiliations from "./Affiliations";
import NavToo from './NavToo';
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel";
import DynamicMemberSet from './DynamicMemberSet';
import DynamicStudentSet from './DynamicStudentSet';
import Funding from "./Funding";
import Intro from "./Intro";
import Research from "./Research";
import PI from "./PI";
import PublicationSet from "./PublicationSet";
// import Zooniverse from "./Zooniverse";
import img_Albert from "./img/members/Albert_Michaud_crop.png";
import img_Alexis from "./img/members/Alexis_Lebrun_crop.jpg";
import img_Andreanne from "./img/members/Andreanne_Deschenes_crop.JPG";
import img_Anthony from "./img/members/Anthony_Bilodeau_crop.JPG";
import img_AntoineG from "./img/members/Antoine_Girard_crop.jpg";
import img_AntoineO from "./img/members/AntoineSeverinOllier.JPG";
import img_Benoit from "./img/members/Benoit_Turcotte_crop.JPG";
import img_Alexy from "./img/members/Alexy_crop.jpg";
import img_Koraly from "./img/members/Koraly_crop.jpg";
import img_Kamylle from "./img/members/Kamylle_crop.jpg";
import img_LaurenceF from "./img/members/LaurenceF_crop.jpg";
import img_LaurenceD from "./img/members/LaurenceD_crop.jpg";
import img_Catherine from "./img/members/Catherine_Bouchard_crop.png";
import img_JM from "./img/members/JeanMichelBellavance_crop.png";
import img_Flavie from "./img/members/Flavie_Lavoie-Cardinal.png";
import img_Fred from "./img/members/Fred_Beaupre_crop.jpg";
import img_Owen from "./img/members/OwenFerguson_crop.JPG";
import img_Renaud from "./img/members/renaud_bernatchez_crop.png";
import img_Valerie from "./img/members/Valerie_ClavetFournier_crop.jpg";
import img_William from "./img/members/WilliamL_crop.png";

import strings from "./strings.json";
import img_Julia from "./img/members/Julia_Chabbert_crop.jpg";
import img_Katrine from "./img/members/Katrine_crop.JPG"


function App() {
  const [introScroll, setIntroScroll] = useState(0);
  const [memberScroll, setMemberScroll] = useState(0);
  const [galleryScroll, setGalleryScroll] = useState(0);
  const [pubScroll, setPubScroll] = useState(0);
  const [fundScroll, setFundScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);

  let studentSet1 = [
    {"student": strings.Members.Albert, "img": img_Albert},
    {"student": strings.Members.Alexis, "img": img_Alexis},
    {"student": strings.Members.Alexy, "img": img_Alexy},
    {"student": strings.Members.Andreanne, "img": img_Andreanne},
  ]

  let studentSet2 = [
    {"student": strings.Members.Anthony, "img": img_Anthony},
    {"student": strings.Members.AntoineG, "img": img_AntoineG},
    {"student": strings.Members.AntoineO, "img": img_AntoineO},
    {"student": strings.Members.Benoit, "img": img_Benoit}
  ]

  let studentSet3 = [
    {"student": strings.Members.Catherine, "img": img_Catherine},
    {"student": strings.Members.Frederic, "img": img_Fred},
    {"student": strings.Members.JM, "img": img_JM},
    {"student": strings.Members.Julia, "img": img_Julia},
  ]

  let studentSet4 = [
   {"student": strings.Members.Kamylle, "img": img_Kamylle},
    {"student": strings.Members.Katrine, "img": img_Katrine},
    {"student": strings.Members.Koraly, "img": img_Koraly},
    {"student": strings.Members.LaurenceD, "img": img_LaurenceD}, 
  ]

  let studentSet5 = [
    {"student": strings.Members.LaurenceF, "img": img_LaurenceF},
    {"student": strings.Members.Owen, "img": img_Owen},
    {"student": strings.Members.Renaud, "img": img_Renaud},
    {"student": strings.Members.William, "img": img_William},
  ]

  let memberSet1 = [  
    {"member": strings.Members.Valerie, "img": img_Valerie},
  ]

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
      {/* <Nav 
        id="nav-section" 
        navY={0}
        introY={introScroll}
        memberY={memberScroll}
        galleryY={galleryScroll}
        pubY={pubScroll}
        fundingY={fundScroll}
        contactY={contactScroll}
      /> */}
      <NavToo 
        id='nav-section'
        navY={0}
        introY={introScroll}
        memberY={memberScroll}
        galleryY={galleryScroll}
        pubY={pubScroll}
        fundingY={fundScroll}
        contactY={contactScroll}
      />
      <Banner id="banner-section" />
      {/* <Zooniverse /> */}
      <div id="intro-section">
        <Intro/>
      </div>
      <Research id="research-section" />

      {/* Members */}
      <div className="members__label" id="members-section">
        {strings.Members.members}
      </div>
      <PI data={strings.Members.Flavie} level={strings.Members.Levels.pi} img={img_Flavie}/>
      
      <DynamicMemberSet
        data={memberSet1}
      />

      { /* Students */ }
      <div className="students__label" id="students-section">
        {strings.Members.students}
      </div>
      <DynamicStudentSet
        data={studentSet1}
      />
      <DynamicStudentSet
        data={studentSet2}
      />
      <DynamicStudentSet
        data={studentSet3}
      />
      <DynamicStudentSet
        data={studentSet4}
      />
          
      <DynamicStudentSet
        data={studentSet5}
      />

      <div className="alumni-label__container">
        <Link className="alumni__label" to="alumni">{strings.Members.alumni}</Link>
      </div>

   
      { /* Gallery */ }
      <div className="gallery__label" id="gallery-section">
        {strings.Gallery.label}
        {/* <Gallery /> */}
        <Carousel />
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
