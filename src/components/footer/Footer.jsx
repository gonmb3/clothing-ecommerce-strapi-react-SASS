import payment from "../../assets/img/payments.png"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className='footer'>

          <div className="top">
            <div className="item">
              <h5>Categories</h5>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accesories</span>
              <span>New Arrivals</span>
            </div>

            <div className="item">
            <h5>Links</h5>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
            </div>

            <div className="item">
            <h5>About</h5>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Mollitia veritatis optio asperiores. Reiciendis pariatur totam 
                 ea autem quos quod ullam dolores dolorem vitae, quidem amet!
                </span>
            </div>
            <div className="item">
            <h5>Contact</h5>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Mollitia veritatis optio asperiores. Reiciendis pariatur totam 
                 ea autem quos quod ullam.
                </span>
            </div>
          </div>


          <div className="bottom">
            <div className="left">
              <span className="logo">GZM</span>
              <span className="copy">Copyright 2023. All Rigths Reserverd</span>
            </div>

            <div className="right">
              <img src={payment} alt="payments" />
            </div>
          </div>
    </footer>
  )
}

export default Footer