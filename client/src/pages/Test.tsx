import { useEffect, useState } from "react";
import request from "../utils/request";
import { Link, useNavigate } from "react-router-dom";

const Test = () => {
  async function fetchData() {
    const response = await request.get("/");
    console.log(response.data);
  }

  console.log("Test called");

  useEffect(() => {
    console.log("Use Effect called");
    fetchData();
  }, []);

  return (
    <div>
      <div className="App text-3xl font-bold">TEST</div>
    </div>
  );
};

export default Test;
