import React from "react";
import { IReviews } from "../Types/IReviews";
import { NavLink, useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

interface IReviewCardProp {
  reviews: IReviews[];
}
function ReviewsCard(reviews: IReviewCardProp) {

  const navigateEdit = useNavigate();
  const handleClickEdit = () => {
    navigateEdit(`/reviews/editReview`);
  };

  return (
    <>
      {reviews.reviews.map((review: IReviews) => {
        return (
          <div className="flex flex-row flex justify-center ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-orange-50 m-5 ">
              <div className="card-body ">
                <h2 className="card-title text-black">
                  {review.id}. {review.title}
                </h2 >
                <p className="text-black">{review.body}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Delete</button>
                  <button className="btn btn-info"onClick={() => handleClickEdit()}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ReviewsCard;
