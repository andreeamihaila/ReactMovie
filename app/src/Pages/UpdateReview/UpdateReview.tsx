import React from "react";
import { IReviews } from "../../Types/IReviews";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUpdateReviews } from "../../hooks/useUpdateReviews";
interface IUpdateProps {
  review: IReviews;
}

const UpdateReview = ({ review }: IUpdateProps) => {
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);
  
  const navigateBack = useNavigate();

  const {isError,isLoanding,updateReview}=useUpdateReviews()
  const handleUpdateReview=async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateReview({
      id:review.id,title,body
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <div className="grid justify-items-center">
        <form
          onSubmit={handleUpdateReview}
          className="grid justify-items-center pt-4"
        >
          <div className="text-2xl pb-4">EDIT REVIEW</div>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Titlu"
            className="input input-bordered w-full max-w-xl "
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xl pb-4"
            name="description"
            value={body}
            placeholder="Description"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" type="submit">
              Edit
            </button>
            <button
              className="btn"
              type="submit"
              onClick={() => navigateBack("/reviews")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
