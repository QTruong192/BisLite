import React from "react";
import "./Community.scss";
import { GoDownload } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoLogoWindows } from "react-icons/io";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Community = () => {
  return (
    <section className="community">
      <div className="wrap_container">
        <div className="box_container">
          <div className="title_wrapper">
            <span>
              <MdOutlineMessage />
            </span>
            TESTIMONIALS
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam
            commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec
            nisi in nisl euismod fringilla.
          </p>
          <strong>John Travis, CEO, DomainName.com</strong>
        </div>
        <div className="box_container">
          <div className="title_wrapper">
            <span>
              <IoPersonSharp />
            </span>
            OUR CLIENTS
          </div>
          <div className="wrap_icon">
            <NavLink>
              <IoLogoWindows />
            </NavLink>
            <NavLink>
              <IoLogoBitbucket />
            </NavLink>
            <NavLink>
              <IoLogoLinkedin />
            </NavLink>
            <NavLink>
              <IoLogoWindows />
            </NavLink>
            <NavLink>
              <IoLogoBitbucket />
            </NavLink>
            <NavLink>
              <IoLogoLinkedin />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="download_psd">
        <p>
          This is a clean and modern, four column website PSD template. You can
          code it into a Wordpress website, HTML5 responsive website for your
          personal or client works. So ahead and download this wonderful PSD
          template!
        </p>
        <button className="wrap_btn">
          <span>
            <GoDownload />
          </span>
          download psd
        </button>
      </div>
    </section>
  );
};
export default Community;
