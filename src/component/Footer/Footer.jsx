import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <section className="address">
        <div className="address_detail">
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor.
            Phasellus at ultricies nisl. Integer at leo eros. Ut nec lorem id
            orci convallis porta. Donec pharetra neque eu velit dictum molestie.
          </p>
        </div>
        <div className="address_detail">
          <div className="address_detail">
            <h3>explore</h3>
            <NavLink>about us</NavLink>
            <NavLink>events</NavLink>
            <NavLink>the blog</NavLink>
            <NavLink>join our rewards program</NavLink>
          </div>
        </div>
        <div className="address_detail">
          <h3>browse</h3>
          <NavLink>fit guilde</NavLink>
          <NavLink>size charts</NavLink>
          <NavLink>contact us</NavLink>
          <NavLink>faqs</NavLink>
        </div>
        <div className="address_detail">
          <h3>contact us</h3>
          <p>BisLite Inc. Always Street 265 0X - 125 - Canada</p>
          <p>Phone: 987-6543-210 Fax: 987-6543-210</p>
        </div>
        <div className="address_detail sub_info">
          <h3>connect with us</h3>
          <div className="wrap_icon">
            <NavLink>
              <FaFacebookF />
            </NavLink>
            <NavLink>
              <FaPinterestP />
            </NavLink>
            <NavLink>
              <GrShareOption />
            </NavLink>
            <NavLink>
              <FaFacebookF />
            </NavLink>
            <NavLink>
              <FaPinterestP />
            </NavLink>
            <NavLink>
              <GrShareOption />
            </NavLink>
          </div>
        </div>
      </section>
      <div className="coppy_right">
        <p>
          Copyright 2024 © <span>Nguyen Huynh Quang Truong</span>
        </p>
        <h1 to="/" className="logo">
          Bis<span>Lite</span>
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
