import React, { useState } from "react";
import { mealsDetails } from "../constants";
import { LiaFireSolid } from "react-icons/lia";
import { CiMedicalCase } from "react-icons/ci";
import { TbCircleLetterR } from "react-icons/tb";
import { IoStarHalfSharp } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";

const Meals = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleMealsClicked = () =>{
    setIsClicked(true)
  }

  return (
    <section className="meals py-5" id="meals">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-7">
            <p className="mb-1 Ubuntu meals-h1">MEALS</p>
            <h1 className="Poppins meals-h2">
              Omnifood AI choose from 5,000+ recipies
            </h1>
            <div className="row gap-5 py-5 justify-content-evenly">
              {mealsDetails.map((list) => (
                <div className="col meals-container" key={list.id}>
                  <img src={list.img} alt={list.name} className="meals-img" />
                  <div className="meals-content Ubuntu">
                    <div className="d-flex category">
                      {list.category1 && (
                        <p className="category-p1">{list.category1}</p>
                      )}
                      {list.category2 && (
                        <p className="category-p2">{list.category2}</p>
                      )}
                    </div>
                    <p className="meals-name Poppins">{list.name}</p>
                    <div className="ps-3 ">
                      <div className="d-flex align-items-center mb-2">
                        <LiaFireSolid />
                        <p className="mb-0 ps-2 calories">{list.calories}</p>
                      </div>
                      <div className="d-flex align-items-center mb-2 word-wrap-nowrap">
                        <CiMedicalCase />
                        <p className="mb-0 px-2 calories">{list.nutriscore}</p>
                        <TbCircleLetterR />
                        <p className="mb-0 ps-2 calories">{list.score}</p>
                      </div>
                      <div className="d-flex align-items-center  mb-2 word-wrap-nowrap">
                        <IoStarHalfSharp />
                        <p className="mb-0 ps-2 calories">{list.ratings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <button className="btn meals-btn" onClick={handleMealsClicked}>
              
              <span className="btn-span Poppins">See More  Meals <CgArrowLongRight /></span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;
