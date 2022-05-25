import React from "react";
import { useState, useEffect } from "react";
import { IReviews } from "../Types/IReviews";
import axios from "axios";
import { getReviews } from "../service/ReviewService";

export const useDeleteReviews = () => {
  const [reviews, setReviews] = useState<IReviews[]>([] as IReviews[]);
  const [isLoanding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    ;(async () => {
      setIsLoading(true);
      setIsError(false)
      try {
        // const data=await deleteReview(id)
        // setReviews(data);
      } catch (err) {
        console.error(err);
        setIsError(true)
      }
      setIsLoading(false);
    })();
  }, []);
  
  return{
    reviews,
    isLoanding,
    isError
  }
};
function deleteReview() {
    throw new Error("Function not implemented.");
}

