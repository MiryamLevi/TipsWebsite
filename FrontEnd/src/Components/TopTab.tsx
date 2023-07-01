import { useEffect, useState } from 'react';
import logo from '../site-name.png';
import './TopTab.css';

function TopTab() {

  // const [scrolled, setScrolled] = useState(false);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
    return (
      <div className="top-tab">
        {/* <img src={logo} alt="Logo" className={`logo ${scrolled ? 'scrolled' : ''}`}/>  */}
        <img src={logo} alt="Logo"  className='logo'/>
      </div>
    );
  }
  
  export default TopTab;


  