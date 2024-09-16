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

import img_Alexis from "./img/members/Alexis_Lebrun_crop.jpg";
import img_Andreanne from "./img/members/Andreanne_Deschenes_crop.JPG";
import img_Anthony from "./img/members/Anthony_Bilodeau_crop.JPG";

import img_AntoineG from "./img/members/Antoine_Girard_crop.jpg";
import img_AntoineO from "./img/members/AntoineSeverinOllier.JPG";


import img_Alexy from "./img/members/Alexy_crop.jpg";
import img_Koraly from "./img/members/Koraly_crop.jpg";
import img_Kamylle from "./img/members/Kamylle_crop.jpg";
import img_LaurenceF from "./img/members/LaurenceF_crop.jpg";
import img_LaurenceD from "./img/members/LaurenceD_crop.jpg";

import img_Catherine from "./img/members/CatherineBouchard_crop.png";
import img_Hadi from "./img/members/Hadi_crop.png";

import img_Flavie from "./img/members/Flavie_Lavoie-Cardinal.png";
import img_Fred from "./img/members/Fred_Beaupre_crop.jpg";

import strings from "./strings.json";
import img_Julia from "./img/members/Julia_Chabbert_crop.jpg";
import img_Katrine from "./img/members/Katrine_crop.JPG";
import synapses from "./img/gallery/SynapticProteins.png"
import BassoonHomer from "./img/gallery/BassoonHomer.png"
import actinSpectrin from "./img/gallery/ActinSpectrin.png";
import confocalSted from "./img/gallery/confocal-sted-actin.png";
import cultures from "./img/gallery/cultures.png";
import Tubulin from "./img/gallery/LIVE610_Tubulin.png";
import synapticProteins from "./img/gallery/SynapticProteins.png";
import Fourcolors from "./img/gallery/4colors_VCF_february2022.png";
import Sledding from "./img/gallery/Fun/Sledding_Group.jpg";
import Pentathlon from "./img/gallery/Fun/pentathlon.jpeg";
import vieille from "./img/gallery/Fun/2019.png";
import Carte2019 from "./img/gallery/Fun/CHRISTMAS_CARD_2019.png";
import Carte2020 from "./img/gallery/Fun/CHRISTMAS_CARD_2020.png";
import Carte2021 from "./img/gallery/Fun/CHRISTMAS_CARD_2021.png";
import Carte2022 from "./img/gallery/Fun/CHRISTMAS_CARD_2022.png";
import Carte2023 from "./img/gallery/Fun/CHRISTMAS_CARD_2023.png";
import img_CatherineD from "./img/members/CatherineD_crop.png";
import Pentathlon2024 from "./img/gallery/Fun/Pentathlon2024.jpg";

function App() {
  const [introScroll, setIntroScroll] = useState(0);
  const [memberScroll, setMemberScroll] = useState(0);
  const [galleryScroll, setGalleryScroll] = useState(0);
  const [pubScroll, setPubScroll] = useState(0);
  const [fundScroll, setFundScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);

  const images = [

    {
        "id": 0,
        "img": BassoonHomer,
        "label": "Bassoon (STED, Magenta), Homer (STED, Cyan) and Actin (Confocal, Green)",
        "credit": "Theresa Wiesner",
    },
    {
        "id": 1,
        "img": actinSpectrin,
        "label": "Actin (Green) and Spectrin (Red), confocal (Left) and STED (Right)",
        "credit": "Flavie Lavoie-Cardinal and Mado Lemieux",
    },
    {
        "id": 2,
        "img": Tubulin,
        "label": "Tubulin labelled with Abberior LIVE 610-Tubulin",
        "credit": "Andréanne Deschênes",
    },
            {
        "id": 3,
        "img": Fourcolors,
        "label": "SMI31 (Confocal, magenta), Actin (STED, green), PSD95 (STED, red), Bassoon (STED, blue)",
        "credit": "Valérie Clavet-Fournier",
    },
            {
        "id":4,
        "img": confocalSted,
        "label": "F-Actin confocal (Left) and STED (Right)",
        "credit": "Flavie Lavoie-Cardinal",
    },
            {
        "id": 5,
        "img": cultures,
        "label": "Neuronal cultures, MAP2 (Green), GFAP (Red), Dapi (Blue)",
        "credit": "Flavie Lavoie-Cardinal",
    },
    {
        "id": 6,
        "img": synapticProteins,
        "label": "Synaptic Proteins; PSD95 (STED, Green), Bassoon (STED, Red), Actin (Confocal, Blue)",
        "credit": "Theresa Wiesner",
    }
  ]

  const funImages = [

    
        {
        "id": 0,
        "img": Pentathlon2024,
        "label": "",
    },
    {
        "id": 2,
        "img": Sledding,
        "label": "",
    },
    {
        "id": 1,
        "img": Pentathlon,
        "label": "",
    },
    {
        "id": 3,
        "img": vieille,
        "label": "",
    },
        {
        "id": 4,
        "img": Carte2019,
        "label": "",
    },
        {
        "id": 5,
        "img": Carte2020,
        "label": "",
    },
        {
        "id": 6,
        "img": Carte2021,
        "label": "",
    },
        {
        "id": 7,
        "img": Carte2022,
        "label": "",
    },
    {
      "id": 8,
      "img": Carte2023,
      "label": "",
  }
  ]

  let studentSet1 = [
    
    {"student": strings.Members.Alexis, "img": img_Alexis},
    {"student": strings.Members.Alexy, "img": img_Alexy},
    {"student": strings.Members.Andreanne, "img": img_Andreanne},
    {"student": strings.Members.Anthony, "img": img_Anthony},
  ]

  let studentSet2 = [
    
    {"student": strings.Members.AntoineG, "img": img_AntoineG},
    {"student": strings.Members.AntoineO, "img": img_AntoineO},
    {"student": strings.Members.Bolin, "img": synapses},
    {"student": strings.Members.Catherine, "img": img_Catherine},
  ]

  let studentSet3 = [
    
    {"student": strings.Members.Frederic, "img": img_Fred},
    {"student": strings.Members.Hadi, "img": img_Hadi},
    {"student": strings.Members.Julia, "img": img_Julia},
    {"student": strings.Members.Kamylle, "img": img_Kamylle},
  ]

  let studentSet4 = [
    {"student": strings.Members.Katrine, "img": img_Katrine},
        {"student": strings.Members.Koraly, "img": img_Koraly},
        {"student": strings.Members.LaurenceD, "img": img_LaurenceD},
        {"student": strings.Members.LaurenceF, "img": img_LaurenceF},
  ]

  let memberSet1 = [
    {"member": strings.Members.CatherineD, "img": img_CatherineD},

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


      <div className="alumni-label__container">
        <Link className="alumni__label" to="alumni">{strings.Members.alumni}</Link>
      </div>


      { /* Gallery */ }
      <div className="gallery__label" id="gallery-section">
        {strings.Gallery.label}
        {/* <Gallery /> */}
        <Carousel images={images} credit={true}/>
        <Carousel images={funImages} credit={false}/>
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
