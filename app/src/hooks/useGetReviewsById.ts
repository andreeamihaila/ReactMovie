import { useState, useEffect } from "react";
import axios from "axios";
import { IReviews } from "../Types/IReviews";
import { getReviewsById } from "../service/ReviewService";

export const useGetReviewsById=(id:number)=>{
    const [review, setReview] = useState<IReviews>();
    const [isLoanding, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  useEffect(() => {
    ;(async () => {
      setIsLoading(true);
      setIsError(false)
      try {
        const data = await getReviewsById(id)
        setReview(data);
      } catch (err) {
        console.error(err);
        setIsError(true)
      }
      setIsLoading(false);
    })();
  }, [id]);
  
  return{
    review,
    isLoanding,
    isError
  }
};
