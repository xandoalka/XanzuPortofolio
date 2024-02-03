import profil from '../assets/profil.png'

const Hero = () => {

    return(
        <header className=" text-white font-medium pt-24 pb-8">
            <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-10">
                <div className="text-lg flex flex-col gap-2 justify-center items-center text-center">
                    <img className="w-20 h-20 bg-gray-300 rounded-full mb-2" src={profil} alt="" />
                    <p className="font-semibold">Xanzu Athando Alvinan Dika</p>
                    <p className="text-[#B6B6B6]">Frontend Developer</p>
                </div>
                <h1 className="text-4xl md:text-5xl leading-tight max-w-lg text-center">Web developer yang ga pake lama</h1>
                <ul className="flex flex-wrap justify-center gap-3 font-semibold">
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">Web Development</li>
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">HTML</li>
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">CSS</li>
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">JavaScript</li>
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">React</li>
                    <li className="cursor-none border-2 py-2 px-4 rounded-full hover:bg-primary hover:border-transparent transition ease-linear duration-200">Tailwind</li>
                </ul>
            </div>
        </header>
    )
}

export default Hero