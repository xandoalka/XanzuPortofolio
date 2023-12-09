import Contact from '../component/Contact'
import Experience from '../component/Experience'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Project from '../component/Project'
import Quote from '../component/Quote'

const Home = ()=> {

    return(
        <>
            <Hero></Hero>
            <Project></Project>
            <Experience></Experience>
            <Quote></Quote>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home