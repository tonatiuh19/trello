import React from "react";
import { CategoryProps } from "../../../interfaces/Board.interface";

const Category = ({ item }: CategoryProps) => {
  const colorBadge = (id: string) => {
    if (id === "Highest") {
      return "badge text-bg-danger";
    } else if (id === "High") {
      return "badge text-bg-primary";
    } else if (id === "Medium") {
      return "badge text-bg-info";
    } else if (id === "Low") {
      return "badge text-bg-secondary";
    } else {
      return "badge text-bg-warning";
    }
  };
  return <span className={colorBadge(item)}>{item}</span>;
};

export default Category;
