import ProductCard from "../../components/ProductCard/ProductCard";
import "./HomeView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const HomeView = () => {
  console.log("Home Rendered");
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <picture>
                {/* For Extra Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-1.webp"
                  // media="(min-width: 1200px)"
                />
                {/* For Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-1-Small.webp"
                  // media="(min-width: 992px) and (max-width: 1199px)"
                />
                {/* For Medium Screens */}
                <source
                  srcSet="/Images/Seva-Home-1-Small.webp"
                  // media="(min-width: 768px) and (max-width: 991px)"
                />
                <source
                  srcSet="/Images/Seva-Home-1-Small.webp"
                  // media="(min-width: 0px)"
                />
                {/* For Small Screens */}
                <img
                  src="/Images/Seva-Home-1-Small.webp"
                  alt="Snitch-Home-2"
                  className="d-block w-100"
                />
              </picture>
            </div>

            <div className="carousel-item">
              <picture>
                {/* For Extra Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-2.webp"
                  // media="(min-width: 1200px)"
                />
                {/* For Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-2.webp"
                  // media="(min-width: 992px) and (max-width: 1199px)"
                />
                {/* For Medium Screens */}
                <source
                  srcSet="/Images/Seva-Home-2-Small.webp"
                  // media="(min-width: 768px) and (max-width: 991px)"
                />
                <source
                  srcSet="/Images/Seva-Home-2-Small.webp"
                  // media="(min-width: 0px)"
                />
                {/* For Small Screens */}
                <img
                  src="/Images/Seva-Home-2-Small.webp"
                  alt="Snitch-Home-1"
                  className="d-block w-100"
                />
              </picture>
            </div>

            <div className="carousel-item">
              <picture>
                {/* For Extra Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-3.webp"
                  // media="(min-width: 1200px)"
                />
                {/* For Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-3.webp"
                  // media="(min-width: 992px) and (max-width: 1199px)"
                />
                {/* For Medium Screens */}
                <source
                  srcSet="/Images/Seva-Home-3-Small.webp"
                  // media="(min-width: 768px) and (max-width: 991px)"
                />
                <source
                  srcSet="/Images/Seva-Home-3-Small.webp"
                  // media="(min-width: 0px)"
                />
                {/* For Small Screens */}
                <img
                  src="/Images/Seva-Home-3-Small.webp"
                  alt="Snitch-Home-2"
                  className="d-block w-100"
                />
              </picture>
            </div>

            <div className="carousel-item">
              <picture>
                {/* For Extra Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-4.webp"
                  // media="(min-width: 1200px)"
                />
                {/* For Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-4.webp"
                  // media="(min-width: 992px) and (max-width: 1199px)"
                />
                {/* For Medium Screens */}
                <source
                  srcSet="/Images/Seva-Home-4-Small.webp"
                  // media="(min-width: 768px) and (max-width: 991px)"
                />
                <source
                  srcSet="/Images/Seva-Home-4-Small.webp"
                  // media="(min-width: 0px)"
                />
                {/* For Small Screens */}
                <img
                  src="/Images/Seva-Home-4-Small.webp"
                  alt="Snitch-Home-2"
                  className="d-block w-100"
                />
              </picture>
            </div>

            <div className="carousel-item">
              <picture>
                {/* For Extra Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-5.webp"
                  // media="(min-width: 1200px)"
                />
                {/* For Large Screens */}
                <source
                  srcSet="/Images/Seva-Home-5.webp"
                  // media="(min-width: 992px) and (max-width: 1199px)"
                />
                {/* For Medium Screens */}
                <source
                  srcSet="/Images/Seva-Home-5-Small.webp"
                  // media="(min-width: 768px) and (max-width: 991px)"
                />
                <source
                  srcSet="/Images/Seva-Home-5-Small.webp"
                  // media="(min-width: 0px)"
                />
                {/* For Small Screens */}
                <img
                  src="/Images/Seva-Home-5-Small.webp"
                  alt="Snitch-Home-2"
                  className="d-block w-100"
                />
              </picture>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <div className="greet-text-container">

      <div className="head-greet">
      <h1 className="greet-text">Welcome to Seva Home, a celebration of "Selfless Service"</h1>
      </div>

      <div className="description">
        <p className="description-text">Seva Home is a community-driven initiative that brings together individuals</p>
      </div>

    </div> */}

      <section className="greeting-text">
        <div className="isolate">
          <div className="rich-text content-container color-background-2 gradient rich-text--full-width content-container--full-width section-template--22952532410659__7eada86b-4a92-4893-8e17-637fbf0b9df2-padding">
            <div className="rich-text__wrapper rich-text__wrapper--center page-width">
              <div className="rich-text__blocks center">
                <h1 className="rich-text__heading rte inline-richtext h2">
                  Welcome to Seva Home, a celebration of "Selfless Service"
                </h1>
                <div className="rich-text__text rte">
                  <p>
                    <em>
                      Presenting a collection of hand crafted fragrances,
                      curated to create an ambience, an experience and a moment
                      to cherish.
                    </em><br />
                    <em>
                    All with an intention of giving back to the
                    underprivileged.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="product-card">
        <ProductCard />
      </div>
    </React.Fragment>
  );
};

export default HomeView;
