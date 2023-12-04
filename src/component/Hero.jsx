const Hero = () => {

    return(
        <header className=" text-white font-medium bg">
            <div className="w-10/12 pt-24 pb-8 mx-auto flex flex-col justify-center items-center gap-10">
                <div className="text-lg flex flex-col gap-2 justify-center items-center text-center">
                    <img className="w-20 h-20 bg-gray-300 rounded-full mb-2" src="" alt="" />
                    <p className="font-semibold">Xanzu Athando Alvinan Dika</p>
                    <p className="text-[#B6B6B6]">Frontend Developer</p>
                </div>
                <h1 className="text-5xl leading-tight max-w-lg text-center">Web developer yang ga peke lama</h1>
                <ul className="flex gap-3 font-semibold">
                    <li className="border-2 py-2 px-4 rounded-full">Web Development</li>
                    <li className="border-2 py-2 px-4 rounded-full">HTML</li>
                    <li className="border-2 py-2 px-4 rounded-full">CSS</li>
                    <li className="border-2 py-2 px-4 rounded-full">JavaScript</li>
                    <li className="border-2 py-2 px-4 rounded-full">React</li>
                    <li className="border-2 py-2 px-4 rounded-full">Tailwind</li>
                </ul>
            </div>
        </header>
    )
}

export default Hero