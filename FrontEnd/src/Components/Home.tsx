import { useRef, useState, useSyncExternalStore } from "react"
import './Home.css';
import { Link } from "react-router-dom";
import TopTab from "./TopTab";


function Home() {
  const images = [
    {
      url: "https://blog.maccabi4u.co.il/wp-content/uploads/2020/05/%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%91%D7%99%D7%AA%D7%99-scaled.jpg",
      text: "בישול",
      link: "/category"
    },
    {
      url: "https://www.lolish.co.il/wp-content/uploads/2015/03/%D7%A0%D7%A7%D7%99%D7%95%D7%9F-%D7%A4%D7%A1%D7%97.jpg",
      text: "נקיון",
      link: ""
    },
       {
      url: "https://www.nashima.co.il/wp-content/uploads/2015/07/Screen-Shot-2015-07-26-at-11.50.03.png",
      text: "תינוקות",
      link: ""
    },
       {
      url: "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/05/07142141/homeubuntureleasesrelease_20190505071537webappmu-pluginsfoody-white-labeltmp1557228101-1bRsyW.jpg",
      text: "אפיה",
      link: ""
    },
        {
      url:  "https://www.efsharibari.gov.il/media/2280/sleep.jpg",
      text: "שינה",
      link: ""
    },
          {
      url: "https://www.officeyashir.co.il/wp-content/uploads/2015/08/article-1.jpg",
      text: "כלי כתיבה",
      link: ""
    },
            {
      url: "https://www.hardoor.co.il/wp-content/uploads/2018/01/Fashion-clothes-on-clothing-ra.jpg",
      text: "ביגוד",
      link: ""
    }, 
             {
      url: "https://cdn.goodlifetv.co.il/wp-content/uploads/2023/02/09125201/%D7%92%D7%9F-%D7%94%D7%A9%D7%9C%D7%95%D7%A9%D7%94-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%9E%D7%A0%D7%95-%D7%92%D7%A8%D7%99%D7%A0%D7%A9%D7%A4%D7%9F.jpg",
      text: "טיולים וטבע",
      link: ""
    }
  ];

  return (
    <div>
    <TopTab />
      <br/>
      <br/>
    <div className="category-container">
      {images.map((image, index) => (
        <div key={index} className="category-item">
          <div className="category-image-container">
          <Link to={image.link}>
            <img className="category-background" src={image.url} alt={image.text} />
            </Link>
            <p className="category-text">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Home;