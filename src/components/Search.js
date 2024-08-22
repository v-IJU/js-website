import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "../api/data";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [searchClose, setSearchClose] = useState(false)
  console.log(searchClose);
  

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
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    setSearchClose(false)
  };
  const handleMouseBlured = () =>{
    setTimeout(()=>setSearchClose(true),100)
    setTimeout(()=>setQuery(""),100)
  }

  const filteredQuery = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section onBlur={handleMouseBlured}>
      {!loading && (
        <div className="search-container" >
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
          { !searchClose &&(
          <div className="search-results">
            {query.length >= 2 &&
              (filteredQuery.length > 0 ? (
                <div className="search-content" >
                  {filteredQuery.map((item) => (
                    <ul key={item.id} className=" px-4">
                      <Link className=" text-decoration-none" target="_blank" to={`recipe/${item.id}`}>
                        <div className="row py-1 ">
                          <div className="col-auto">
                            <img
                              src={item.image_url}
                              alt={item.title}
                              className="search-img"
                            />
                          </div>
                          <div className="col ">
                            <li className="search-product">
                              {item.title}
                            </li>
                            <li className="search-publisher">
                              <span>Publisher :</span> {item.publisher}
                            </li>
                          </div>
                        </div>
                      </Link>
                    </ul>
                  ))}
                </div>
              ) : (
                <p className="text-center pt-5 fs-5">No Results Found</p>
              ))}
          </div>
          )}
        </div>
      )}
      {loading && <p className="text-center pt-5 fs-5">Loading...</p>}
      {error && <p className="text-center pt-5 fs-5">Error: {error.message}</p>}
    </section>
  );
};

export default Search;
