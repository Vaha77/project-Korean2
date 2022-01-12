import React from "react";
import { useSearchParams } from "react-router-dom";

export const Edit = () => {
  const [searchParams, setSearchPArams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id:", id);

  return (
    <div>
      <h1>Edit</h1>
      <p>Edit page</p>
    </div>
  );
};
export default Edit;
