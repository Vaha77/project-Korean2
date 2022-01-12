import React from "react";
import { useParams } from "react-router-dom";

export const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>Diary page</p>
    </div>
  );
};
export default Diary;
