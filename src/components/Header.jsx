import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { headerData } from '../../public/navbar';

function Header({ aboutUser }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className=" relative">
            <nav className="backdrop-blur-sm w-full  text-white " >
                <div className="flex items-center justify-between py-5">
                    <div className="flex flex-shrink-0 items-center capitalize">
                        <Link to={'/'} className="font-bold text-2xl ">
                            {aboutUser?.name}
                        </Link>
                    </div>

                    <ul
                        className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 font-bold text-white"
                        id="navbar-default"
                    >
                        {headerData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.href} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
                                    <div className="text-sm  transition-colors  duration-300 hover:text-pink-600 hover:decoration-pink-600 hover:underline hover:u underline-offset-2">
                                        {item.title}
                                    </div>
                                </Link>
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
                className={`absolute  px-0 z-10 w-full backdrop-blur-xl text-white font-semibold overflow-hidden flex flex-col  md:hidden gap-12  origin-top duration-700 ${
                    !toggleMenu ? 'h-0' : 'h-screen'
                }`}
            >
                <div className="">
                    <div className="flex flex-col items-center gap-4 font-bold tracking-wider">
                        {headerData.map((item, index) => (
                            <Link key={index} to={item.href} className="block px-4 py-2 no-underline outline-none hover:no-underline">
                                <div className="text-sm  transition-colors  duration-300 hover:text-pink-600 hover:decoration-pink-600 hover:underline hover:underline-offset-2">
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
