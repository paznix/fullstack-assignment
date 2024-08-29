import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-fit bg-black text-white font-roboto">
        <div className="flex justify-evenly flex-col md:flex-row py-20 md:gap-0 gap-14 ml-14 md:ml-0">
          <div>
            <h3 className="font-semibold text-2xl">Abstract</h3>
            <h4 className="mt-3 text-lg">
              <a className="decoration-none" href="#">
                Branches
              </a>
            </h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Resources</h3>
            <h4 className="mt-3 text-lg">
              <div className="flex flex-col gap-1.5">
                <a className="decoration-none" href="#">
                  Blog
                </a>
                <a className="decoration-none" href="#">
                  Help Center
                </a>
                <a className="decoration-none" href="#">
                  Release Notes
                </a>
                <a className="decoration-none" href="#">
                  Status
                </a>
              </div>
            </h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Community</h3>
            <h4 className="mt-3 text-lg">
              <div className="flex flex-col gap-1.5">
                <a className="decoration-none" href="#">
                  Twitter
                </a>
                <a className="decoration-none" href="#">
                  LinkedIn
                </a>
                <a className="decoration-none" href="#">
                  Facebook
                </a>
                <a className="decoration-none" href="#">
                  Dribbble
                </a>
                <a className="decoration-none" href="#">
                  Podcast
                </a>
              </div>
            </h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Company</h3>
            <h4 className="mt-3 text-lg">
              <div className="flex flex-col gap-1.5">
                <a className="decoration-none" href="#">
                  About Us
                </a>
                <a className="decoration-none" href="#">
                  Careers
                </a>
                <a className="decoration-none" href="#">
                  Legal
                </a>
                <div className="mt-5">
                  <h3 className="font-semibold pb-1.5">Contact Us</h3>
                  <h4>info@abstract.com</h4>
                </div>
              </div>
            </h4>
          </div>
          <div className="text-xl md:mt-36 pt-4">
            <img src={Logo} className="h-14 -m-4 mb-3" />
            <div className="mt-3">
              <h3>© Copyright 2024</h3>
              <h4>Abstract Studio Design, Inc.</h4>
              <h4>All rights reserved</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
