import { useState, useEffect } from "react";
import axios from "axios";
import { IReviews } from "../Types/IReviews";
import { ICreate } from "../Types/ICreate";
import { postReviews } from "../service/ReviewService";
import { IUpdate } from "../Types/IUpdate";
export const useUpdateReviews = () => {
    
  const [isLoanding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const updateReview = async (reviewUpdate: IUpdate) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await postReviews(reviewUpdate);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  };
  return {
    isError,
    isLoanding,
    updateReview,
  };
};