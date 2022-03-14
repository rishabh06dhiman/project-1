import React, { useEffect, useState } from "react";
import backImg from "../assets/Back.svg";
import searchImg from "../assets/Search.svg";
import "../styles/books.css";
import book1 from "../assets/book1.jpg";
import { useParams } from "react-router-dom";

const Books = () => {
  const { title } = useParams();
  const [booksCollection, setbooksCollections] = useState([]);

  const getBooks = async () => {
    const url = `http://skunkworks.ignitesol.com:8000/books?topic=${title}`;

    const response = await fetch(url);
    const data = await response.json();
    setbooksCollections(data["results"]);

    // console.log(data);
    console.log(booksCollection);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div class="conatiner-fluid">
      <div class="row books-row">
        <h1>{title}</h1>
        <div class="searchBar">
          {/* <img src={searchImg} alt="search"/>  */}
          <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
          ></input>
        </div>
        {booksCollection.map((curElem) => {
          return (
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4">
              <div class="bookcard">
                <img src={book1} />
                <h6>{curElem["title"]}</h6>
                <p>
                  {curElem["authors"].map((elm) => {
                    return elm["name"];
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
