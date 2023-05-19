import gallery1 from "../../../assets/gallery/gallery1.jpg"
import gallery2 from "../../../assets/gallery/gallery2.jpg"
import gallery3 from "../../../assets/gallery/gallery3.jpg"
import gallery4 from "../../../assets/gallery/gallery4.jpg"
import gallery5 from "../../../assets/gallery/gallery5.jpg"
import gallery6 from "../../../assets/gallery/gallery6.jpg"

const Gallery = () => {
    return (
        <div className="">
            <h1 className="text-center font-bold text-2xl lg:text-4xl italic">Learning is where we play</h1>
            {/* <p className="text-center">Gallery</p> */}
            <div className="grid grid-cols-3 gap-4 justify-items-center pt-7 px-4 lg:px-0">
                <img className="rounded-xl" src={gallery1} alt="gallery_img" />
                <img className="rounded-xl" src={gallery2} alt="gallery_img" />
                <img className="rounded-xl" src={gallery3} alt="gallery_img" />
                <img className="rounded-xl" src={gallery4} alt="gallery_img" />
                <img className="rounded-xl" src={gallery5} alt="gallery_img" />
                <img className="rounded-xl" src={gallery6} alt="gallery_img" />
            </div>
        </div>
    );
};

export default Gallery;