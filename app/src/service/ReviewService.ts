import axios from "axios";
import { ICreate } from "../Types/ICreate";
import { IReviews } from "../Types/IReviews";
import { IUpdate } from "../Types/IUpdate";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const getReviews = async () => {
  const { data } = await axiosInstance.get<IReviews[]>("/reviews");
  return data;
};
export const getReviewsById = async (id: number) => {
  const { data } = await axiosInstance.get<IReviews>(`/reviews/${id}`);
  return data;
};
export const postReviews = async (create: ICreate) => {
  const { data } = await axiosInstance.post<IReviews>(`/reviews`,create);
  return data;
};
export const putReviews = async ({id,...update}: IUpdate) => {
    const { data } = await axiosInstance.put<IReviews>(`/reviews/${id}`,update);
    return data;
  };
  // export const deleteReviews = async (id:number) => {
  //   const { data } = await axiosInstance.delete<IReviews>(`/reviews/${id}`);
  //   return data;
  // };
