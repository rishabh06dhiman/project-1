import React, { useEffect, useState } from "react";
import backImg from "../assets/Back.svg";
import "../styles/books.css";
import book1 from "../assets/book1.jpg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const Books = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/`);
  };

  const [searchTerm, setSearchTerm] = useState("");

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

  const handle = (event) => {
    document.getElementById("header-search").value = "";
  };

  return (
    <div class="conatiner-fluid">
      <div class="row books-row">
        <div className="category-title">
          <img
            src={backImg}
            alt="backImg"
            height="25px"
            width="25px"
            onClick={routeChange}
          />
          <h1>{title}</h1>
        </div>

        <div class="searchBar">
          <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>

          <div class="clear-icon">
            {searchTerm.length !== 0 ? (
              <MdClear id="clear-btn" onClick={handle} />
            ) : (
              <MdSearch />
            )}
          </div>
        </div>
        {booksCollection
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.authors
                .map((i) => {
                  return i["name"].toLowerCase();
                })
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((curElem) => {
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
