import React from "react";
import "./Blog.css";
import winTypeM2 from "../../public/winTypeM2.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogsCard = [
    {
      image: "../../public/winTypeL1.jpg",
      descripton: "The 3 best picks for uPVC windows",
      time: "8 min ago",
    },
    {
      image: "../../public/winTypeS1.jpg",
      descripton: "Durability test Aluminium vs uPVC",
      time: "1 hour ago",
    },
    {
      image: "../../public/winTypeL3.jpg",
      descripton: "34% rise in uPVC purchase in 2024",
      time: "yesterday",
    },
  ];
  return (
    <>
      <div className="blog-container">
        <div className="blog-text">
          <p>Our Blogs</p>
          <h1>Stories & Ideas</h1>
          <p>The latest news to drive aspirational luxury to your doorstep</p>
        </div>
        <div className="blogs">
          <Link to="/blogs">
            <div className="blog-latest">
              <img src={winTypeM2} alt="" />
              <div>
                <h5>Which thing Excites the uPVC buyer the most ?</h5>
                <p>5 min ago</p>
                <span>Read more</span>
              </div>
            </div>
          </Link>

          <div className="blog-recent-container">
            {blogsCard.map((blog) => (
              <div className="blog-recent-card">
                <img src={blog.image} alt="" />
                <div>
                  <h5>{blog.descripton}</h5>
                  <p>{blog.time}</p>
                  <span>Read more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
