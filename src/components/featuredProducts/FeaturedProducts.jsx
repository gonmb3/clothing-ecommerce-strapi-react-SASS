
import Card from "../card/Card"

import "./featuredProducts.scss"
import useFetch from './../../hooks/useFetch';

const FeaturedProducts = ({type}) => {
            //FETCH HOOK
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)


  return (
    <div className="featuredProducts">
                <div className="top">
                        <h4>{type} products </h4>
   
                </div>

                <div className="bottom">
                    {   error ? "Something went wrong!" :
                      loading ? "Loading.." 
                              :  data?.slice(0,4).map(item => (
                           <Card item={item} key={item.id}/>
                        ))
                    }
                </div>
    </div>
  )
}

export default FeaturedProducts