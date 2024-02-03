const Contact = () =>{

    return(
        <section className="py-14 md:py-24 lg:py-40 text-white">
            <div className="flex justify-between py-6 px-8 md:py-10 md:px-16 contact w-[85%] md:w-[80%] mx-auto items-center">
                <span className="w-24 md:w-44 text-md md:text-3xl">Ayo bekerja bersama</span>
                <span className="hidden lg:block w-[21rem]">Tertarik bekerja bersama? ayo kita pesen kopi dan bahas bareng-bareng</span>
                <a href="https://api.whatsapp.com/send?phone=6281368449213&text=Hai%20Xanzu" target="_blank" className="inline-block font-extrabold text-xs md:text-sm py-3 px-5 border-2 border-transparent w-fit h-fit bg-primary text-white hover:bg-white hover:text-[#101010] transition-all ease-linear">Ayo ngobrol</a>
            </div>
        </section>
    )
}

export default Contact