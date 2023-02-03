import React from 'react'
import Card from './../card/Card';
import useFetch from './../../hooks/useFetch';
import "./list.scss"

const List = ({subCat, maxPrice, sort, catID}) => {
    

            //FETCH HOOK  / STRAPI FILTERS
        const {data, loading, error} = useFetch(`/products?populate=*&=[filters][categories][id]=${catID}${subCat.map(
              (item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
  console.log(data)

  return (
    <div className='list'>
                    {   loading ? "Loading.." :
                        data?.map(item=> (
                            <Card item={item} key={item.id} />
                        ))
                    }
    </div>
  )
}

export default List