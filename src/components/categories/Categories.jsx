//react router dom link
import { Link } from "react-router-dom";
// styles .scss
import "./categories.scss";

const Categories = () => {
  //categories images
  const imagesCateg = [
    {
      image:
        "https://images.unsplash.com/photo-1576748872293-f4972ceda096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "SALE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "WOMEN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "NEW SEASON",
    },
    {
      image:
        "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      text: "MEN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588347617290-1417620074be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      text: "ACCESORIES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "SHOES",
    },
  ];

  return (
    <div className="categories">
      <div className="col">
        
                {/* maping images from [0] to [3]*/}
        {imagesCateg.slice(0, 3).map((img, index) => (
          <div className="row" key={index}>
            <img src={img.image} alt="categories-images" />
            <button>
              <Link to="/products">{img.text} </Link>
            </button>
          </div>
        ))}
      </div>

                 {/* maping images from [4] to [6]*/}
      <div className="col col-l">
        <div className="row">
          {imagesCateg.slice(3, 5).map((img, index) => (
            <div className="row" key={index}>
              <img src={img.image} alt="categories-images" />
              <button>
                <Link to="/products">{img.text} </Link>
              </button>
            </div>
          ))}
        </div>

        <div className="row">
                    {/* maping images from [5] to [6]*/}
          {imagesCateg.slice(5, 6).map((img, index) => (
            <>
              <img key={index} src={img.image} alt="categories-images" />
              <button>
                <Link to="/products">{img.text} </Link>
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
