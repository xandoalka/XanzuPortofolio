import { Link } from 'react-router-dom'
import profil from '../assets/profil.png'
import { useState } from 'react';

const Nav = () =>{
    const [activeButton, setActiveButton] = useState('home');

    const handleClick = (button) => {
        setActiveButton(button)
        window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
    } 

    return(
        <>
            <nav className="fixed z-10 top-0 left-0 right-0 bg-black-glass text-white backdrop-filter backdrop-blur">
                <div className="flex justify-between items-center h-[4.5rem] w-[85%] md:w-[80%] mx-auto">
                    <div className="flex">
                        <span className="text-xl font-bold mr-8 flex items-center gap-3">
                            <img className="w-8 h-8 bg-neutral-300 rounded-full" src={profil} alt="" />
                            <Link onClick={() => handleClick('home')} to={'/'}>Xanzu</Link>
                        </span>
                        {/* <Link onClick={() => handleClick('tentang-saya')} to="tentang-saya" className={`${activeButton === 'tentang-saya' ? 'border-b-[#5965D2]' : ''} lg:block hidden group duration-300 py-6 px-5 border-b-2 border-transparent transition ease-linear`}>
                            <span className={`${activeButton === 'tentang-saya' ? '-translate-y-1' : ''} block duration-300 group-hover:-translate-y-1 transition ease-linear`}>Tentang saya</span>
                        </Link> */}
                        <Link onClick={() => handleClick('portofolio')} to="portofolio" className={`${activeButton === 'portofolio' ? 'border-b-[#5965D2]' : ''} lg:block hidden group duration-300 py-6 px-5 border-b-2 border-transparent transition ease-linear`}>
                            <span className={`${activeButton === 'portofolio' ? '-translate-y-1' : ''} block duration-300 group-hover:-translate-y-1 transition ease-linear`}>Portofolio</span>
                        </Link>
                    </div>
                    <a className="inline-block font-semibold text-sm py-2 px-4 md:py-3 md:px-5 border border-transparent bg-primary hover:bg-white hover:text-[#101010] transition-all ease-linear duration-200" href="https://api.whatsapp.com/send?phone=6281368449213&text=Hai%20Xanzu" target="_blank">Hubungi saya</a>
                </div>
            </nav>
        </>
    )
}

export default Nav