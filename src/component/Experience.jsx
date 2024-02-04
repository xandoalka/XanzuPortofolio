import image1 from '../assets/group-qodr.svg'
import image2 from '../assets/group-kewebsite.svg'
import image3 from '../assets/enlight.svg'
import image4 from '../assets/logo-xd.svg'

const Experience = () =>{

    return(
        <section className="text-white pt-4 pb-12 md:pt-8 md:pb-20 lg:py-20">
            <div className="w-[85%] lg:w-[80%] mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold max-w-sm leading-normal mb-8 md:mb-12">Saya bangga telah bekerja dengan berbagai startup</h2>
                <div className="flex flex-wrap lg:flex-nowrap gap-6 md:gap-8 justify-center items-stretch ">
                    <img className='w-5/12 lg:w-1/4 py-4 md:py-6 px-8 bg-neutral-card border-[1.5px] border-[#434343]' src={image1} alt="logo-qodr" />
                    <img className='w-5/12 lg:w-1/4 py-4 md:py-6 px-8 bg-neutral-card border-[1.5px] border-[#434343]' src={image2} alt="logo-kewebsite" />
                    <img className='w-5/12 lg:w-1/4 py-4 md:py-6 px-8 bg-neutral-card border-[1.5px] border-[#434343]' src={image3} alt="logo-enlight" />
                    <img className='w-5/12 lg:w-1/4 px-8 bg-neutral-card border-[1.5px] border-[#434343]' src={image4} alt="logo-enlight" />
                </div>
            </div>
        </section>
    )
}

export default Experience