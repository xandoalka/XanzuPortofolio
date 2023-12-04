const Nav = () =>{

    return(
        <nav className="fixed z-10 top-0 left-0 right-0 bg-black-glass text-white backdrop-filter backdrop-blur">
            <div className="flex justify-between items-center h-[4.5rem] w-10/12 mx-auto">
                <div className="flex">
                    <span className="text-xl font-bold mr-8 flex items-center gap-3">
                        <img className="w-8 h-8 bg-neutral-300 rounded-full" src="" alt="" />
                        <span>Xanzu</span>
                    </span>
                    <span className="p-6">Tentang saya</span>
                    <span className="p-6">Portofolio</span>
                </div>
                <a className="inline-block font-semibold text-sm py-3 px-5 border border-transparent bg-primary" href="https://api.whatsapp.com/send?phone=6281368449213&text=Hallo%20Naxqy">Hubungi saya</a>
            </div>
        </nav>
    )
}

export default Nav