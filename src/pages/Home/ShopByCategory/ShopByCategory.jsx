import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../../../assets/subCatagory/lan.jpg";
import img3 from "../../../assets/subCatagory/lange.jpg";
import img4 from "../../../assets/subCatagory/math.jpg";
import img5 from "../../../assets/subCatagory/mathB.jpg";
import img6 from "../../../assets/subCatagory/mag.jpg";
import img2 from "../../../assets/subCatagory/soler.jpg";

const ShopByCategory = () => {
  return (
    <div className="py-8">
      <h1 className="text-center font-bold text-2xl lg:text-4xl italic">
        Shop By Category
      </h1>

      <Tabs>
        <TabList>
          <Tab>Language Toys</Tab>
          <Tab>Math Toys</Tab>
          <Tab>Science Toys</Tab>
        </TabList>
    {/* 1 */}
        <TabPanel>
          <div className="flex justify-around pt-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Alphabet Puzzle</h1>
                  <h1 className="text-xl font-bold">$19.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.5}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Spelling Bee Game</h1>
                  <h1 className="text-xl font-bold">$24.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.4}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* 2 */}
        <TabPanel>
          <div className="flex justify-around">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img5} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Math Dice Set</h1>
                  <h1 className="text-xl font-bold">$12.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.2}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Pattern Blocks Set</h1>
                  <h1 className="text-xl font-bold">$14.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.7}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* 3 */}
        <TabPanel>
          <div className="flex justify-around">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img6} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Solar System Model</h1>
                  <h1 className="text-xl font-bold">$39.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.9}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Magnetic Science Kit</h1>
                  <h1 className="text-xl font-bold">$29.99</h1>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-bold capitalize py-2">
                    <span className="font-extrabold">Rating :</span>
                    <Rating
                      placeholderRating={4.8}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    />
                  </div>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
