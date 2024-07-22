import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataProject } from './context/dataProjectContext'
import TemplateProject from './template/TemplateProject'

const Showchase = () => {
    const [data] = useContext(DataProject)
    const [activeButton, setActiveButton] = useState('button1')

    const handleClick = (button) => {
        setActiveButton(button)
    }

    const filteredData = data.filter(project => {
        if (activeButton === 'button1') {
            return project.type === 'website'
        } else if (activeButton === 'button2') {
            return project.type === 'app'
        } else if (activeButton === 'button3') {
            return project.type === 'fun'
        } else {
            return false
        }
    })

    const renderProjects = () => {
        if (filteredData.length === 0) {
            return <p className='md:text-2xl lg:text-3xl font-semibold'>Project Tidak Ada</p>
        }

        return filteredData.map(project => (
            <Link target={project.target} to={project.url} key={project.id} className='sm:w-full mb-6 lg:mb-0 md:w-1/2 xl:w-1/3 max-w-72 xl:max-w-sm min-h-[28rem] bg-neutral-card shadow-transparent hover:shadow-md hover:-translate-y-1 hover:shadow-neutral-600 duration-300 transition ease-in-out'>
                <TemplateProject 
                    img={project.image} 
                    title={project.title} 
                    description={project.description}
                >
                </TemplateProject>
            </Link>
        ))
    }

    return (
        <section className="lg:py-20 text-white">
            <div className="w-[85%] md:w-[80%] mx-auto flex flex-col gap-14 md:gap-16 lg:gap-32">
                <div className="grid grid-cols-3 tracking-wider">
                    <Link onClick={() => handleClick('button1')} className={`${activeButton === 'button1' ? 'bg-primary' : ''} py-2 md:py-4 lg:py-6 text-sm md:text-base text-center hover:bg-primary transition ease-linear`}>Website</Link>
                    <Link onClick={() => handleClick('button2')} className={`${activeButton === 'button2' ? 'bg-primary' : ''} py-2 md:py-4 lg:py-6 text-sm md:text-base text-center hover:bg-primary transition ease-linear`}>Aplikasi</Link>
                    <Link onClick={() => handleClick('button3')} className={`${activeButton === 'button3' ? 'bg-primary' : ''} py-2 md:py-4 lg:py-6 text-sm md:text-base text-center hover:bg-primary transition ease-linear`}>Fun</Link>
                </div>
                <div className={`flex justify-center lg:gap-6 flex-wrap xl:flex-nowrap lg:mb-10 ${filteredData.length === 0 ? 'justify-center' : 'justify-start lg:justify-start md:justify-evenly'}`}>
                    {renderProjects()}
                </div>
            </div>
        </section>
    )
}
export default Showchase