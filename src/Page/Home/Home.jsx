import React from "react";
import SlideShow from "../../component/SlideShow/SlideShow";
import products from "../../assets/dataTest/product";
import PaginatedList from "../components/PaginatedList/PaginatedList";
import "./Home.scss";
import Community from "../../component/Community/Community";
import { FaPen } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

const Home = () => {
  const itemsPerPage = 4;
  const saleProducts = [...products].sort((a, b) => b.price - a.price);

  return (
    <div className="warpper_home">
      <SlideShow />
      <div className="warpper_intro">
        <div className="wrap_container">
          <div className="box_container">
            <div className="title_wrapper">
              <span>
                <FaPen />
              </span>
              CLEAN THEME
            </div>
            <p>
              Ut nec lorem id orci convallis porta. Donec pharetra neque eu
              velit dictum molestie. Duis porta gravida augue sed viverra.
              Quisque at nulla leo, non aliquet mi.
            </p>
            <a>
              <MdOutlineNavigateNext />
              Read More
            </a>
          </div>
          <div className="box_container">
            <div className="title_wrapper">
              <span>
                <FaPen />
              </span>
              RESPONSIVE DESIGN
            </div>
            <p>
              Ut nec lorem id orci convallis porta. Donec pharetra neque eu
              velit dictum molestie. Duis porta gravida augue sed viverra.
              Quisque at nulla leo, non aliquet mi.
            </p>
            <a>
              <MdOutlineNavigateNext />
              Read More
            </a>
          </div>
          <div className="box_container">
            <div className="title_wrapper">
              <span>
                <FaPen />
              </span>
              FULLY LAYERED PSD
            </div>
            <p>
              Ut nec lorem id orci convallis porta. Donec pharetra neque eu
              velit dictum molestie. Duis porta gravida augue sed viverra.
              Quisque at nulla leo, non aliquet mi.
            </p>
            <a>
              <MdOutlineNavigateNext />
              Read More
            </a>
          </div>
          <div className="box_container">
            <div className="title_wrapper">
              <span>
                <FaPen />
              </span>
              READY FOR CODING
            </div>
            <p>
              Ut nec lorem id orci convallis porta. Donec pharetra neque eu
              velit dictum molestie. Duis porta gravida augue sed viverra.
              Quisque at nulla leo, non aliquet mi.
            </p>
            <a>
              <MdOutlineNavigateNext />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="sale_off">
        <PaginatedList
          title="LATEST WORKS"
          productList={saleProducts}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <Community />
    </div>
  );
};

export default Home;
