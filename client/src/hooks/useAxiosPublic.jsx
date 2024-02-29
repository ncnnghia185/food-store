import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "http://localhost:8018",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
