import React from "react";
import { useState } from "react";
import axios from "axios";
import { IReviews } from "../../Types/IReviews";
import { NavLink, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import { usePostReviews } from "../../hooks/usePostReviews";
import yup from "yup";
import { useForm } from "react-hook-form";

// const schema = yup.object({
//   title: yup.string().required().min(2).max(10),
//   body: yup.string().required().min(5).max(60),
// });

function AddReview() {
  const navigateBack = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //const { register, formState } = useForm();
  const { isError, isLoanding, createReview } = usePostReviews();

  const handleCreateReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createReview({
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="grid justify-items-center">
        <form
          onSubmit={handleCreateReview}
          className="grid justify-items-center pt-4"
        >
          <div className="text-2xl pb-4">CREATE NEW REVIEW</div>
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
              Submit
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
    </>
  );
}
export default AddReview;
