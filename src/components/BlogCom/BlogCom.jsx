import NftImg from "../images/blog-second-img.png"
import {FiUser} from "react-icons/fi"
import {FaRegCalendarAlt} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"
import "./BlogCom.css"

const BlogCom = () => {
  return (
    <div className="container blogcom-conta">
        <h1>Blog</h1>
        <div className="blogainer">
            <div className="flex-blog">
                <div className="blog-img-con">
                    <img src={NftImg} alt="" />
                </div>
                <div className="blog-details">
                    <p className="blog-header">
                        How Crypto Enables Economic Freedom
                    </p>
                    <div className="blg-title">
                        <p>Crypto</p>
                    </div>
                    
                    <p>Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales a..</p>
                    <div className="blog-id">
                        <div className="user-blog blog-id-item">
                            <FiUser />
                            <p>By Olga</p>
                        </div>
                        <div className="cal-blog blog-id-item">
                            <FaRegCalendarAlt />
                            <p>March 26, 2022</p>
                        </div>
                        <div className="mess-blog blog-id-item">
                            <BiMessage />
                            <p>No Comment</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BlogCom