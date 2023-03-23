import NftImg from "../images/blog-second-img.png"
import {FiUser} from "react-icons/fi"
import {FaRegCalendarAlt} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"
import { blog } from "../Data/Data"
import "./BlogCom.css"

const BlogCom = () => {
  return (
    <div className="container blogcom-conta">
        <h1>Blog</h1>
        <div className="blogainer">
            {blog.map((item) => {
                return(
                    <div className="flex-blog" key={item.id}>
                        <div className="blog-img-con">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="blog-details">
                            <p className="blog-header">
                                {item.header}
                            </p>
                            <div className="blg-title">
                                <p>{item.subText}</p>
                            </div>
                            
                            <p>{item.text}</p>
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
                )
            })}            
        </div>
    </div>
  )
}

export default BlogCom