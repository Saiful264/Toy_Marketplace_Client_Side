import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import OurBlog from "../OurBlog/OurBlog";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <OurBlog/>
            <FAQ/>
        </div>
    );
};

export default Home;