import { Link } from "react-router-dom";
import logo from "../../../assets/002-lightbulb.png";
import { FaFacebookF, FaInstagram,  FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link className="normal-case text-xl flex items-center gap-1">
            <div className="bg-pink-400 p-3 rounded-full">
              <img className="w-7" src={logo} alt="" />
            </div>
            <span className="text-4xl text-slate-700 font-mono font-bold">
              Learn<span className="text-yellow-400">IQ</span>
            </span>
          </Link>
          <p>
            Learn IQ Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-4">
            <div className="p-2 rounded-full border border-black"><FaFacebookF/></div>
            <div className="p-2 rounded-full border border-black"><FaInstagram/></div>
            <div className="p-2 rounded-full border border-black"><FaYoutube/></div>
            <div className="p-2 rounded-full border border-black"><FaLinkedinIn/></div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Home</span>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Learn IQ Industries Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
