import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { headerData } from '../../public/navbar';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="app">
            <nav>
                <nav className="backdrop-blur-sm w-full text-black">
                    <div className="flex items-center justify-between py-5">
                        <div className="flex flex-shrink-0 items-center">
                            <Link className="font-bold text-2xl ">John Doe</Link>
                        </div>

                        <ul
                            className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 font-bold text-black"
                            id="navbar-default"
              >
                {headerData.map((item,index) => (
                  <li key={index}>
                    <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
                      <div className="text-sm  transition-colors  duration-300 hover:text-pink-600 hover:underline underline-offset-2">{item.title}</div>
                    </a>
                  </li>
                ))}
                             
                        </ul>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                                <FaBars className="h-6" />
                            </button>
                        </div>
                    </div>
                </nav>
                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
                        !toggleMenu ? 'h-0' : 'h-full'
                    }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-gray-600">
                                Features
                            </a>
                            <a href="#">Pricing</a>
                            <a href="#">Download</a>
                            <a href="#">Classic</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
