//react router dom link
import { Link } from 'react-router-dom';
// styles .scss
import "./card.scss"


//destructuring item from featuredProduct component
const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
            {item?.attributes.isNew && <span>New Season</span>} 
            {/*  STRAPI URL/.ENV  / IMAGE*/ }
                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.attributes?.image.data.attributes.url} alt="" className="mainImage" />
                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.attributes?.image2.data.attributes.url} alt="" className="secImage" />
            </div>

            <h2>{item?.attributes.title} </h2>
             {/*  STRAPI PRICE*/ }
            <div className="prices">
                    <h3>${item.oldPrice || item?.attributes.price +30} </h3>
                    <h3>${item?.attributes.price} </h3>
            </div>
        </div>
    </Link>
  )
}

export default Card