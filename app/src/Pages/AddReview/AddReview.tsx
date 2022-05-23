import React from "react";
import { useState } from "react";
import axios from "axios";
import { IReviews } from "../../Types/IReviews";
import { NavLink, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";

function AddReview() {
  const navigateBack = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState<IReviews[]>([] as IReviews[]);

  const addPost = async (titleValue: string, bodyValue: string) => {
    const review = { title: titleValue, body: bodyValue };
    await fetch(
      "https://crudcrud.com/api/c13b6c80c77349cb84353bb63101c7e0/reviews",
      {
        method: "POST",
        body: JSON.stringify({
          title: review.title,
          body: review.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
      navigateBack('/reviews');
  };

  return (
    <>
      <div className="grid justify-items-center">
        <form
          className="grid justify-items-center pt-4"
          onSubmit={() => addPost(title, description)}
        >
          <div className="text-2xl pb-4">CREATE NEW REVIEW</div>
          <input
            type="text"
            name="title"
            placeholder="Titlu"
            className="input input-bordered w-full max-w-xl "
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xl pb-4"
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
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
