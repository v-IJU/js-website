import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { mealsDetails } from "../constants/index";
import { IoFastFood } from "react-icons/io5";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const filteredQuery = mealsDetails.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="search-container">
        <input
          className="search"
          type="search"
          onChange={handleQuery}
          value={query}
          placeholder="Search Foods and Drinks here..."
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search-results">
          {query.length >= 2 &&
            (filteredQuery.length > 0 ? (
              <div className="search-content">
                {filteredQuery.map((items) => (
                  <ul key={items.id}>
                    <div className="row py-1 ">
                      <div className="col-auto">
                        <img src={items.img} className="search-img" />
                      </div>
                      <div className="col">
                        <li className="">
                          <a className="search-product" href={items.link}>
                            {items.name}
                          </a>
                        </li>
                        <li className="fs-5">
                          <span >Price :</span> {items.price}
                          <span className="px-1">$</span>{" "}
                        </li>
                      </div>
                    </div>
                  </ul>
                ))}
              </div>
            ) : (
              query.length >= 2 && (
                <p className="text-center pt-5">No Results Found</p>
              )
            ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
