import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useState } from "react";
import { IoBoatSharp } from "react-icons/io5";
import { ImAirplane } from "react-icons/im";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { TiExport } from "react-icons/ti";
import { FaRoute } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { GiHandTruck } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ScrollUpButton from "./components/ScrollUpButton";
import header from "./assets/header.jpg";
import logo from "./assets/logo.png";
import boat from "./assets/boat.jpg";
import logistics from "./assets/logistics.jpg";
import exportt from "./assets/exportt.jpeg";
import importt from "./assets/importt.jpg";
import consult from "./assets/consult.jpg";
import car1 from "./assets/car1.jpeg";

const App = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({service: "", perks: []});
  
  const handleModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  const servicesData = [
    {service: "Asesoría en comercio internacional", perks: ["Análisis de mercados nacionales e internacionales", "Asesoramiento en regulaciones y normativas del comercio exterior", "Estrategias de entrada a nuevos mercados"], picture: header},
    {service: "Gestión de exportaciones", perks: ["Búsqueda y selección de compradores/mercados potenciales", "Negociación de términos y condiciones comerciales", "Preparación y tramite de documentos de exportación", "Coordinación logística y trasporte nacional e internacional"], picture: importt},
    {service: "Gestión de importaciones", perks: ["Negociación de compras y contratos nacionales e internacional", "Gestión de aduanas y tramitación de documentación", "Coordinación en la recepción y distribución de mercancías"], picture: exportt},
    {service: "Importación de vehículos", perks: ["Análisis de mercados nacionales e internacionales", "Asesoramiento en regulaciones y normativas del comercio exterior", "Estrategias de entrada a nuevos mercados"], picture: car1},
    {service: "Logística y distribución", perks: ["Servicios logísticos integrales: Transporte Marítimo, aéreo y terrestre", "Almacenamiento, manejo, distribución", "Seguimiento y control"], picture: logistics},
    {service: "Consultoria personalizada", perks: ["Manejo de procesos de exportación e importación", "Asesoramiento personalizado de acuerdo a tus requerimientos específicos", "Estrategias de entrada a nuevos mercados"], picture: consult},
  ];

  return (
    <div className="overflow-x-hidden pt-4 w-full h-full flex flex-col items-center bg-[#00010e]">
      <header className="h-[700px] w-full max-w-[1800px] bg-center w-max-[100px] bg-no-repeat flex flex-col items-center">
        <Navbar />
        <img src={header} alt="Hero" className="opacity-80 max-w-[1800px] w-full h-full object-cover absolute top-0" />
        <div className="z-20 absolute mt-32 gap-8 flex flex-col items-center w-[380px] text-white text-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <img src={logo} alt="Logo" className="w-52 mb-10" />
          <p>
            Logística Blensuz
          </p>
          <p>
            Gestión de importación y exportación de mercancías
          </p>
        </div>
      </header>
      <main className="max-w-[1800px] flex flex-col items-center w-full relative bg-gradient-to-t from-[#373949] to-[#00010e]">
        <section id="about" className="opacity-100 p-8 sm:p-16 pt-20 flex flex-col items-center text-center text-white w-full mb-4">
          <h2 className="text-4xl font-bold mb-10">¿Quiénes somos?</h2>
          <p className="my-4 tracking-wider leading-relaxed text-2xl">
            Somos especialistas en la exportación e importación de mercancías, ofreciendo soluciones integrales personalizadas destinadas a las estrategias que plantea el comercio nacional e internacional.
          </p>
          <p className="my-4 tracking-wider leading-relaxed text-2xl">
            Contamos con una amplia experiencia y un equipo de profesionales altamente cualificados, lo que nos permite garantizar un servicio <b>EFICIENTE</b>, <b>SEGURO</b> y acorde a las regulaciones <b>GLOBALES</b>.
          </p>
          <div className="flex w-full justify-evenly text-4xl my-20">
            <IoBoatSharp className="hover:scale-125" />
            <ImAirplane className="hover:scale-125" />
            <FaTruckMoving className="hover:scale-125" />
          </div>
        </section>
        <section id="" className="relative w-full bg-slate-300">
          <div className="w-full flex justify-center">
            <img src={boat} alt="Hero" className="hidden md:block w-1/2 object-cover " />
            <div className="px-5 sm:px-10 flex flex-col justify-evenly text-center md:w-1/2 tracking-wider leading-relaxed">
              <div>
                <h3 className="font-bold text-3xl mt-14 mb-4">Misión</h3>
                <p className=" text-xl">
                  Por medio de nuestra labor facilitamos el comercio nacional e internacional con servicios de exportación e importación eficientes, lo cual contribuye al éxito y crecimiento de nuestros clientes en el mercado global.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mt-14 mb-4">Visión</h3>
                <p className="pb-10 text-xl">
                  Para el 2026, LOGISTICA BLENSUZ S.A.S será reconocida como líder nacional en soluciones de exportación e importación, estableciendo estándares enfocados en la <b>EFICIENCIA</b>, <b>SEGURIDAD</b> e <b>INNOVACIÓN</b>. Transformaremos la logística  de comercio exterior, facilitando a nuestros clientes un flujo de mercancías sin fronteras alrededor del mundo, promoviendo de esta manera el crecimiento económico inclusivo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="pb-20 text-white opacity-100 relative w-full bg-[#151625]">
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex text-start flex-wrap justify-evenly gap-4">
              <div className="w-1/2 min-w-[350px]">
                <h3 className="text-start font-bold text-4xl mb-8">{modalData.service}</h3>
                <img src={modalData.picture} alt="Service" className="w-5/6 rounded-xl" />
              </div>
              <div className="flex flex-col w-1/2 min-w-[350px] max-w-[500px]">
                <h3 className="font-bold text-3xl mb-6 hidden 2xl:block">Detalles</h3>
                <ul className="text-xl sm:text-2xl flex flex-col gap-2">
                  {modalData.perks.map((perk, index) => (
                    <li key={index}>- {perk}.</li>
                  ))}
                </ul>
                </div>
            </div>
          </Modal>
          <h2 className="text-center my-20 font-bold text-4xl">Servicios</h2>
          <div className="flex flex-wrap justify-evenly gap-8">
            <div onClick={() => handleModal(servicesData[0])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <AiOutlineGlobal className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Asesoría en comercio internacional</h3>
            </div>
            <div onClick={() => handleModal(servicesData[1])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <TiExport className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Gestión de exportaciones</h3>
            </div>
            <div onClick={() => handleModal(servicesData[2])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <FaRoute className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Gestión de importaciones</h3>
            </div>
            <div onClick={() => handleModal(servicesData[3])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <IoCarSportSharp className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Importación de vehículos</h3>
            </div>
            <div onClick={() => handleModal(servicesData[4])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <GiHandTruck className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Logística y distribución</h3>
            </div>
            <div onClick={() => handleModal(servicesData[5])} className="border-2 border-t-0 border-l-0 border-white/25 hover:scale-105 w-[350px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-4 w-[70px] h-[70px] flex items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 text-center rounded-full bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <GrUserExpert className="text-4xl" />
              </div>
              <h3 className="font-bold text-3xl text-left">Consultoria personalizada</h3>
            </div>
          </div>
        </section>
        <section id="contacto" className="bg-slate-300 py-20 w-full h-full">
          <div className="flex justify-evenly items-center flex-wrap">
            <div className="w-full sm:w-1/2 flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-52 mb-10" />
              <h3 className="font-bold">Logística Blensuz S.A.S.</h3>
              <div className="font-bold w-full flex justify-evenly mb-20 text-md flex-wrap">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-xl" />
                  <p>Avenida 29C #25-13 Cartagena, Bolivar, Colombia</p>
                </div>
                <p>NIT 901346968-8</p>
              </div>
              <div className="w-full font-bold flex justify-evenly flex-wrap mb-10">
                <div className="flex items-center justify-center gap-2">
                  <MdEmail className="text-xl" />
                  <p>logisticablensuz@gmail.com</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaPhone className="text-xl" />
                  <p>(+57) 314 386 53 37</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8 flex flex-col items-center gap-2 font-bold">
                <p className="text-center text-2xl mt-10">
                  ¿Tienes alguna duda o inquietud? ¡Contáctanos!
                </p>
                <p className="text-center text-2xl">
                  Estamos para ayudarte.
                </p>
              </div>
              <form className="flex flex-col items-center gap-4">
                <input type="text" placeholder="Nombre" className="w-[360px] p-4 bg-[#00010e] text-white rounded-xl" />
                <textarea placeholder="Mensaje" className="w-[360px] h-[200px] p-4 bg-[#00010e] text-white rounded-xl" />
                <button className="w-[360px] p-4 bg-[#00010e] text-white rounded-xl">Enviar</button>
              </form>
            </div>
          </div>
        </section>
        <footer className="bg-slate-300 w-full text-center py-10 relative pb-20">
          <p>2024 Blensuz SAS, all rights reserved</p>
          <ScrollUpButton/>
        </footer>
        
      </main>
    </div>
  )
}

export default App;
