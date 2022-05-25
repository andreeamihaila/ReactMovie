import React from "react";
import { useParams } from "react-router-dom";
import { useGetReviewsById } from "../../hooks/useGetReviewsById";
import UpdateReview from "../UpdateReview/UpdateReview";

export const Review = () => {
  const { id } = useParams<{ id: string }>();
  const { isError, isLoanding, review } = useGetReviewsById(Number(id));

  return (
      <>
      <div>{isError && <p>Somethig went wrong..</p>}</div>
      <div>{isLoanding && <p>Loading....</p>}</div>
    {/* <div>
      <div>{review?.title}</div>
      <div>{review?.body}</div>
    </div> */}
    </>
  );
};
