import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const navLinks = [
      {
        id: "about",
        title: "Quiénes somos",
      },
      {
        id: "servicios",
        title: "Servicios",
      },
      {
        id: "contacto",
        title: "Contacto",
      },
    ];
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const ref1 = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (toggle && ref1.current && !ref1.current.contains(event.target)) {
        setToggle(!toggle);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [toggle]);

  return (
    <nav className="w-5/6 py-4 sm:py-2 z-30 backdrop-blur-sm opacity-90">
      <ul className="w-full list-none justify-evenly flex gap-10">
          {navLinks.map((link) => (
          <li
              key={link.id}
              className={`${
              active === link.title
                  ? "text-red-900 dark:text-white"
                  : "text-red-600 dark:text-white"
              } hover:text-[#94c01f] text-[20px] cursor-pointer rounded-xl`}
              onClick={() => setActive(link.title)}
          >
              <a href={`#${link.id}`}>{link.title}</a>
          </li>
          ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
          ref={ref1}
          className={`${!toggle ? 'ease-in-out duration-700 -right-40 -top-10 opacity-0' : 'ease-out duration-700 top-16 right-8 opacity-100'} shadow-5xl border-2 border-t-0 border-l-0 border-black/25 backdrop-filter backdrop-blur-sm flex p-6 black-gradient absolute mx-4 my-2 min-w-[140px] z-10 rounded-xl dark:bg-gradient-to-r from-slate-100 to-slate-300  dark:text-neutral-900`}
          >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
              <li
                  key={link.id}
                  className={`${
                  active === link.title
                      ? "text-white"
                      : "text-[##d0cecf]"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                  }}
              >
                  <a href={`#${link.id}`}>{link.title}</a>
              </li>
              ))}
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;