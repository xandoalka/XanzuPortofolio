import frontend from '../assets/frontend.png'
import { Link } from 'react-router-dom'
import TemplateProject from './template/TemplateProject'
import { useContext } from 'react'
import { DataProject } from './context/dataProjectContext'

const Project = () => {
    const [data] = useContext(DataProject)

    return (
        <section className="text-white pt-20 pb-0 sm:py-20">
            <div className="w-[85%] lg:w-[80%] mx-auto">
                <h2 className="text-2xl md:text-3xl text-center sm:text-start font-semibold max-w-sm leading-normal mb-12">Project selama <span className="text-[#8B97FF]">1 tahun</span> sebagai web developer</h2>
                <div className="flex justify-around lg:gap-6 flex-wrap xl:flex-nowrap mb-10 md:mb-12 lg:mb-10">
                    {data.map(project => (
                        <Link target={project.target} to={project.url} key={project.id} className='sm:w-full mb-6 lg:mb-0 md:w-1/2 xl:w-1/3 max-w-72 xl:max-w-sm min-h-[28rem] bg-neutral-card shadow-transparent hover:shadow-md hover:-translate-y-1 hover:shadow-neutral-600 duration-300 transition ease-in-out'>
                            <TemplateProject
                                img={project.img}
                                title={project.title}
                                description={project.description}
                            >
                            </TemplateProject>
                        </Link>
                    ))}
                </div>
                <div className='w-full flex justify-center items-center mt-6 mb-10'>
                    <Link to={'/portofolio'} className='border-2 py-[0.88rem] px-5 font-bold text-sm hover:bg-white hover:text-black  transition ease-linear duration-200'>Lihat lebih banyak</Link>
                </div>
                <div className='hidden md:flex bg-neutral-card flex-col md:flex-row lg:justify-between'>
                    <div className='flex flex-col justify-center px-12 py-10 xl:pl-16 xl:pr-0 max-w-md'>
                        <p className='text-xl md:text-xl xl:text-2xl leading-10 font-semibold h-20 lg:h-32'>Tidak semua projek harus serius.<br />Cek beberapa fun project saya.</p>
                        <Link to={'/portofolio'} className='flex gap-1 w-fit text-sm font-extrabold h-10 items-center px-3 border-2 border-transparent bg-primary hover:bg-white hover:text-[#101010] transition-all ease-linear duration-200'>Lihat katalog
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <img className='hidden lg:block sm:w-1/2' src={frontend} alt="frontend-image" />
                </div>
            </div>
        </section>
    )
}

export default Project