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
              } hover:text-[#94c01f] text-[16px] sm:text-[18px] cursor-pointer rounded-xl`}
              onClick={() => setActive(link.title)}
          >
              <a href={`#${link.id}`}>{link.title}</a>
          </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar;