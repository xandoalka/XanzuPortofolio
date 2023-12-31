import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataProject } from './context/dataProjectContext'
import TemplateProject from './ui/TemplateProject'

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
            return project.type === 'application'
        } else if (activeButton === 'button3') {
            return project.type === 'fun'
        } else {
            return false
        }
    })

    const renderProjects = () => {
        if (filteredData.length === 0) {
            return <p className='text-3xl font-semibold'>Project Tidak Ada</p>
        }

        return filteredData.map(project => (
            <Link target={project.target} to={project.url} key={project.id} className='w-1/3 bg-neutral-card shadow-transparent hover:shadow-md hover:-translate-y-1 hover:shadow-neutral-600 duration-300 transition ease-in-out'>
                <TemplateProject 
                    img={project.img} 
                    title={project.title} 
                    description={project.description}
                >
                </TemplateProject>
            </Link>
        ))
    }

    return (
        <section className="py-20 text-white">
            <div className="w-[80%] mx-auto flex flex-col gap-32">
                <div className="grid grid-cols-3 tracking-wider">
                    <Link onClick={() => handleClick('button1')} className={`${activeButton === 'button1' ? 'bg-primary' : ''} py-6 text-center hover:bg-primary transition ease-linear`}>Website</Link>
                    <Link onClick={() => handleClick('button2')} className={`${activeButton === 'button2' ? 'bg-primary' : ''} py-6 text-center hover:bg-primary transition ease-linear`}>Aplikasi</Link>
                    <Link onClick={() => handleClick('button3')} className={`${activeButton === 'button3' ? 'bg-primary' : ''} py-6 text-center hover:bg-primary transition ease-linear`}>Fun</Link>
                </div>
                <div className={`flex gap-6 ${filteredData.length === 0 ? 'justify-center' : 'justify-start'}`}>
                    {renderProjects()}
                </div>
            </div>
        </section>
    )
}
export default Showchase