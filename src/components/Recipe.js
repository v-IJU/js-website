import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";
import { RiArrowRightLine } from "react-icons/ri";
import { MdBookmarkBorder } from "react-icons/md";
import api from "../api/data";
import { useParams } from "react-router-dom";
// import { MyLoader } from "./Loader";

const Recipe = () => {
  const [recipeList, setRecipeList] = useState(null);
  const [recipeError, setRecipeError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [servings, setServings] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipes/${id}`);
        const recipe = response.data.data;
        setRecipeList(recipe);
        setServings(recipe?.recipe?.servings);
      } catch (error) {
        setRecipeError(error);
        console.log(`Error in fetching Recipe`, error);
      } finally {
        // setTimeout(()=>setLoading(false),000)
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleCountInc = () => {
    setServings(servings + 1);
  };
  const handleCountDec = () => {
    setServings(servings > 0 ? servings - 1 : 0);
  };

  return (
    <section className="container-fluid recipe">
      <div>
        <div className="recipe-img-container">
          <img
            src={recipeList?.recipe?.image_url}
            className="recipe-img"
            alt={recipeList?.recipe?.title}
          />
          <div className="recipe-img-overlay"></div>
        </div>
        <div className=" recipe-container text-center">
          {/* <div className="recipe-contaainer-overlay"></div> */}
          <div className="skewy-div text-center">
            <h2>{recipeList?.recipe?.title}</h2>
          </div>
          <div>
            <div className="container recipe-ingredient-container d-flex align-items-center py-4 my-2 mt-5">
              <div className=" d-flex align-items-center">
                <FaRegClock className="recipe-details-icon" />
                <p className="px-2">
                  <strong className="">
                    {recipeList?.recipe?.cooking_time}
                  </strong>{" "}
                  MINUTES
                </p>
              </div>

              <div className="d-flex align-items-center ms-3">
                <GoPeople className="recipe-details-icon" />
                <p className="px-2">
                  <strong>{servings}</strong> SERVINGS
                </p>
                <button className="recipe-count-btn" onClick={handleCountDec}>
                  <AiOutlineMinusCircle className="recipe-details-icon me-1" />
                </button>
                <button className="recipe-count-btn" onClick={handleCountInc}>
                  <AiOutlinePlusCircle className="recipe-details-icon" />
                </button>
              </div>
              <a className="recipe-bookmark ms-auto" href="#">
                <MdBookmarkBorder className=" recipe-bookmark-icon" />
              </a>
            </div>
            <div className="recipe-incredients py-5">
              <div className="container recipe-ingredient-container">
                <h3 className="incredients-h mb-4 pb-2">RECIPE INGREDIENTS</h3>
                <div className="row row-cols-2 row-cols-xxl-4">
                  {recipeList?.recipe?.ingredients.map((ingredient) => (
                    <div className="col d-flex mb-3 px-2 text-start">
                      <div>
                        <IoCheckmark className="recipe-inceredient-icon" />
                      </div>
                      <p>{ingredient?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-5 recipe-ht-cook">
              <h3 className="ht-cook-h my-4">HOW TO COOK</h3>
              <p className="ht-cook-p fs-4 py-4 px-5">
                This recipe was carefully designed and tested by
                <strong> Simply Recipes. </strong> Please check out directions
                at their website.
              </p>
              <a
                className=" my-4 ht-cook-btn"
                href={recipeList?.recipe?.source_url}
                target="_blank"
                rel=""
              >
                <span className="d-flex align-items-center">DIRECTIONS</span>
                <RiArrowRightLine className="recipe-direction-icon" />
              </a>
            </div>
          </div>
        </div>
        {recipeError && <p>{recipeError}</p>}
      </div>
    </section>
  );
};

export default Recipe;
