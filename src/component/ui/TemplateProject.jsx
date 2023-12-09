const TemplateProject = ({img, title, description}) => {


    return(
        <>
            <img src={img} alt="Project Kewebsite Telaga Sunnah" />
            <article className='relative px-5 pt-6 pb-10'>
                <h3 className='text-2xl font-semibold mb-4 leading-8 max-w-[15rem] xl:max-w-none'>{title}</h3>
                <p className='w-11/12 leading-7'>{description}</p>
                <span className='absolute top-[1.65rem] right-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M9.33337 9.33334H22.6667V22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.33337 22.6667L22.6667 9.33334" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </span>
            </article>
        </>
    )
}

export default TemplateProject