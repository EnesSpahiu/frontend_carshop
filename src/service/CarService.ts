import React from "react";
import axios from "axios";
import { CarType } from "../types/Car.model";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/product",
  });

const CarService = {

    getCars: () => {
        return axiosInstance.get("/").then((res) => res.data as CarType[]);
    },
    getCar: (id: string) => {
        return axiosInstance.get("/" + id).then((res) => res.data as CarType);
    }

};
export default CarService;
