import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCard.css"; // Import custom CSS for additional styling

const ProductCard = () => {
  return (
    <div className="product-card-container-fluid my-4"> {/* Adjust margin from top and bottom */}
      <div className="row g-3 justify-content-center">


        {/* Adjust card column size */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="card no-border"> {/* Add class to remove borders */}
            <img
              src="/Images/Glass_Collection__Featured_img.webp"
              className="card-img-top img-fluid responsive-image"
              alt="Product Card 1"
            />
          </div>
          <div className="card-text-container mt-2"> {/* Adjust padding inside card */}
              <h5 className="card-title">Card title</h5>
            </div>
        </div>
        


      </div>
    </div>
  );
};

export default ProductCard;
