import React from "react";
import "./BlogPage.css";
import aagmanlogo from "../../public/aagmanLogo.png";
import blogImage2 from "../../public/blogImage2.jpg";
import { MdOutlineCalculate } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogsSuggestion = [
    {
      image: "../../public/blogImage.jpg",
      postDate: "January 14, 2025",
      heading: "Which thing Excites the uPVC buyer the most ?",
      tag1: "Design",
      tag2: "Research",
    },
    {
      image: "../../public/winTypeL3.jpg",
      postDate: "January 4, 2025",
      heading: "Why Choose uPVC Sliding Windows for Your Home?",
      tag1: "Window",
      tag2: "Latest",
    },
    {
      image: "../../public/winTypeS2.jpg",
      postDate: "February 4, 2025",
      heading: "All you need to know about about uPVC",
      tag1: "Technology",
      tag2: "Trend",
    },
    {
      image: "../../public/winTypeM1.jpg",
      postDate: "1 hour ago",
      heading: "uPVC is becoming customer's first choice",
      tag1: "Aluminium",
      tag2: "Premium",
    },
    {
      image: "../../public/blogImage.jpg",
      postDate: "January 14, 2025",
      heading: "Which thing Excites the uPVC buyer the most ?",
      tag1: "Design",
      tag2: "Research",
    },
  ];
  return (
    <>
      <div className="blog-content">
        <div className="blog-nav">
          <Link to="/">
            <div className="aagman-logo">
              <img src={aagmanlogo} alt="" />
              <h2>AAGMAN</h2>
            </div>
          </Link>

          <div className="blog-navigation">
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Faqs</li>
            <li>Windows</li>
            <li>Blogs</li>
          </div>
        </div>

        <div className="blog-content-text">
          <h1>Inside Designs : Stories, Gallery & More</h1>
          <p>Subscribe to know about the latest design & innovations in uPVC</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <h4>Recent Blog Post</h4>
        <div className="blog-main">
          <div className="blog-clicked">
            <img src={blogImage2} alt="" />
            <div>
              <p>January 14, 2025</p>
              <h3>Which thing Excites the uPVC buyer the most ?</h3>
              <div className="tags">
                <span>Design</span>
                <span>uPVC</span>
                <span>Research</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                aliquid harum praesentium quidem fugiat excepturi illum pariatur
                consequatur quibusdam ipsa? Delectus ex eos, ipsa possimus
                necessitatibus tempora! Repellat modi temporibus consectetur
                necessitatibus assumenda deserunt. Repudiandae amet cumque
                quidem. Modi sit quas asperiores iste neque amet ipsum delectus
                totam repellat error architecto porro eveniet ex, praesentium
                fuga tempore nisi ipsam iure ullam aliquid. Ullam autem
                provident perspiciatis labore repellendus voluptatem soluta
                harum veritatis earum ab porro eveniet rem officiis amet odit,
                in consectetur consequatur saepe explicabo laboriosam officia
                ducimus laudantium! Sapiente cum corrupti excepturi perspiciatis
                similique porro eveniet laboriosam magnam laborum vero
                voluptatem dolorum blanditiis dolore architecto placeat quis rem
                doloremque, optio molestiae illum. Iste non inventore quaerat
                explicabo voluptatibus atque earum voluptas sed, totam delectus
                sunt, dignissimos nostrum ratione dolores ullam cupiditate
                impedit. Sint veniam ipsam impedit tenetur odit maxime deserunt
                vel corrupti a maiores architecto sapiente eos, doloremque
                cumque illum ducimus totam, omnis perferendis, nihil nulla?
                Ullam perspiciatis totam laboriosam. Ab consectetur placeat
                ipsum quam pariatur reiciendis suscipit voluptatum quae
                recusandae hic labore, autem reprehenderit obcaecati quo
                adipisci quisquam deserunt. Atque, fugiat assumenda? Adipisci
                sit minima ullam quo qui perspiciatis explicabo error. Ullam
                quasi officia iusto provident cupiditate in.
              </p>
            </div>
          </div>
          <div className="blog-suggestion">
            {blogsSuggestion.map((card) => (
              <div className="blog-suggestion-card">
                <img src={card.image} alt="" />
                <div>
                  <p>
                    {card.postDate} <GoArrowUpRight />
                  </p>
                  <h5>{card.heading}</h5>
                  <span>{card.tag1}</span>
                  <span>{card.tag2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
