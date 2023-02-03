//react icons
import {FaFacebook, FaPinterest} from "react-icons/fa"
import {AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai"

//styles .scss
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>
                BE IN TOUCH WITH US: 
            </span>
            <div className="mail">
                <input type="text" placeholder='Enter Your Email...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
            <FaFacebook size={20}/>
            <AiFillTwitterCircle size={20}/>
            <AiOutlineInstagram size={20}/>
            <AiFillLinkedin size={20}/>
            <FaPinterest size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Contact