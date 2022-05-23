import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IMovie } from "../../Types/movies";
import { useState, useEffect } from "react";
import axios from "axios";
import { IReviews } from "../../Types/IReviews";
import ReviewsCard from "../../Components/ReviewsCard";

export const Review = () => {
  const navigateHome = useNavigate();
  const handleClickHome = () => {
    navigateHome("/");
  };

  const navigateAdd = useNavigate();
  const handleClickAdd = () => {
    navigateAdd(`/reviews/addReview`);
  };

  const [reviews, setReviews] = useState<IReviews[]>([] as IReviews[]);

  useEffect(() => {
    getData();
  }, []);
  //READ
  const getData = async () => {
    await fetch(
      "https://crudcrud.com/api/c13b6c80c77349cb84353bb63101c7e0/reviews"
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => {
        console.log(err);
      }); 
  };

  return (
    <>
      <div className="text-2xl pb-4 justify-items-center  flex justify-center">
        Number of reviews:{reviews.length}
      </div>
      <div className="card-actions justify-end">
      <button className="btn btn-accent" onClick={() => handleClickAdd()}>
        Add Review
      </button>
      <button className="btn btn-active" onClick={() => handleClickHome()}>
        Back Home
      </button>
      </div>
      <div>
        <ReviewsCard reviews={reviews} />
      </div>
    </>
  );
};
