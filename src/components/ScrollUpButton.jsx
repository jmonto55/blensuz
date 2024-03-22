import { IoIosArrowUp } from "react-icons/io";

const ScrollUpButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <button 
        onClick={scrollToTop} 
        className="absolute bottom-3 right-3 z-40 border-2 text-xl border-t-0 border-l-0 border-white/25 hover:scale-105 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 text-white p-5 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      >
        <IoIosArrowUp />
      </button>
    );
  };
  
  export default ScrollUpButton;