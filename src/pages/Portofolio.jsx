import ContactPortofolio from "../component/ContactPortofolio"
import Description from "../component/Description"
import Footer from "../component/Footer"
import Showchase from "../component/Showchase"


const Portofolio = ()=>{

    return(
        <section className="bg-neutral-black">
            <Description></Description>
            <Showchase></Showchase>
            <ContactPortofolio></ContactPortofolio>
            <Footer></Footer>
        </section>
    )
}

export default Portofolio