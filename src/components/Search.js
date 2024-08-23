import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "../api/data";
import { Link } from "react-router-dom";
import { MyLoaderSearch } from "./Loader";

const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get("/recipes", {
          params: { search: "pizza" },
        });

        const {
          data: { recipes },
        } = response.data;

        setData(recipes);
      } catch (error) {
        setError(error);
        console.log("Error searching recipes:", error);
      } finally {
        setTimeout(()=>setLoading(false),5000);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const handleClickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setQuery("");
        console.log("clicked outside");
      }
    };

    document.addEventListener("mousedown", handleClickOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const filteredQuery = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="">
 
        <div className="search-container" ref={ref}>
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
        {query.length >= 2 && (
          <div className="search-results">
            {filteredQuery.length > 0 ? (
              <div className="search-content">
                {filteredQuery.map((item) => (
                  <ul key={item.id} className=" px-4">
                    <Link
                      className=" text-decoration-none"
                      target="_blank"
                      to={`recipe/${item.id}`}
                    >
                      {loading ? (<MyLoaderSearch />) : (
                      <div className="row py-1 ">
                        
                        <div className="col-auto">
                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="search-img"
                          />
                        </div>
                        <div className="col">
                          <li className="search-product">{item.title}</li>
                          <li className="search-publisher">
                            <span>Publisher :</span> {item.publisher}
                          </li>
                        </div>
                      </div>
                    )}
                    </Link>
                  </ul>
                ))}
                {error && <p className="text-center pt-5 fs-5">Error: {error.message}</p>} 
              </div>
            ) : (
              <p className="text-center pt-5 fs-5">No Results Found</p>
            )}
          </div>
        )}
      </div>      
    
      {/* {loading && <p className="text-center pt-5 fs-5">Loading...</p>}
      {error && <p className="text-center pt-5 fs-5">Error: {error.message}</p>} */}
    </section>
  );
};

export default Search;
