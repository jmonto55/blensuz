import { IoClose } from "react-icons/io5";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className={`backdrop-blur-sm z-40 fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/80" : "invisible"}`}
    >
      <div
        className={`rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} border-2 border-t-0 border-l-0 border-white/25 w-3/4 min-w-[350px] max-w-[1500px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-6 text-center rounded-2xl bg-[#00010e] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-white`}
        onClick={e => e.stopPropagation()}
      >
        <IoClose onClick={onClose} className="absolute top-2 right-2 p-1 text-4xl cursor-pointer" />
        {children}
      </div>
    </div>
  );
};

export default Modal;