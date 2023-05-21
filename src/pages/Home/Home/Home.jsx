import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import OurBlog from "../OurBlog/OurBlog";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ShopByCategory/>
            <Gallery/>
            <OurBlog/>
            <FAQ/>
        </div>
    );
};

export default Home;