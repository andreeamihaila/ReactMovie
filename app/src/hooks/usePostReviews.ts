import { useState, useEffect } from "react";
import axios from "axios";
import { IReviews } from "../Types/IReviews";
import { ICreate } from "../Types/ICreate";
import { postReviews } from "../service/ReviewService";
export const usePostReviews = () => {
    
  const [isLoanding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const createReview = async (reviewCreate: ICreate) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await postReviews(reviewCreate);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  };
  return {
    isError,
    isLoanding,
    createReview,
  };
};
