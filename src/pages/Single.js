import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Singular from "../components/Singular";
import Loading from "../components/Loading";

export const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://myserver-twng.onrender.com/api/clothings/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product: ", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-5 h-full py-7 bg-gray-600 ">
      <Singular item={product} />
    </div>
  );
};
