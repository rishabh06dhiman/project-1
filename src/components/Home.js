import React from "react";
import "../styles/home.css";
import fictionImg from "../assets/Fiction.svg";
import nextImg from "../assets/Next.svg";

import dramaImg from "../assets/Drama.svg";
import humourImg from "../assets/Humour.svg";
import politicsImg from "../assets/Politics.svg";
import philosophyImg from "../assets/Philosophy.svg";
import historyImg from "../assets/History.svg";
import adventureImg from "../assets/Adventure.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const { title } = useParams();
  const category = [
    {
      id: "c1",
      title: "FICTION",
      cat_Icon: fictionImg,
      next_Icon: nextImg,
    },
    {
      id: "c2",
      title: "PHILOSOPHY",
      cat_Icon: philosophyImg,
      next_Icon: nextImg,
    },
    {
      id: "c3",
      title: "DRAMA",
      cat_Icon: dramaImg,
      next_Icon: nextImg,
    },
    {
      id: "c4",
      title: "HISTORY",
      cat_Icon: historyImg,
      next_Icon: nextImg,
    },
    {
      id: "c5",
      title: "HUMOUR",
      cat_Icon: humourImg,
      next_Icon: nextImg,
    },
    {
      id: "c6",
      title: "ADVENTURE",
      cat_Icon: adventureImg,
      next_Icon: nextImg,
    },
    {
      id: "c7",
      title: "POLITICS",
      cat_Icon: politicsImg,
      next_Icon: nextImg,
    },
  ];

  return (
    
    <div class="container-fluid">
      <div class="row title-row">
        <h1>Gutenberg</h1>
        <p>
          A social cataloging website that allows you to freely search its
          database of books, annotations,
          <br></br>
          and reviews.
        </p>
      </div>

      <div class="row category-row">
        {category.map((books) => {
          return (
            <div class="col-lg-6 col-md-12 col-sm-12 category-col-1">
              <Link to={`/books/${books.title}`}>
                <div class="card">
                  <div class="card-body">
                    <img src={books.cat_Icon} alt="fiction" />
                    <h5>{books.title}</h5>
                    
                    
                  </div>
                  {/* <div class="next-icon">
                    <img src={books.next_Icon} />
                  </div> */}
                </div>
              </Link>
            </div>
          );
        })}  
      </div>
    </div>
  );
};

export default Home;
