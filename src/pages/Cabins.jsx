// import Heading from "../ui/Heading";
// import Row from "../ui/Row";

import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCabin, getCabins } from "../services/apiCabins";
import { useState } from "react";

function Cabins() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
    },
    onError: (err) => alert(err.message),
  });

  if (isLoading) return <div className="text-5xl">LOADING..........</div>;

  return (
    <>
      <h1>All cabins</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Max Capacity</th>
            <th className="border border-gray-300 px-4 py-2">Regular Price</th>
            <th className="border border-gray-300 px-4 py-2">Discount</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
          </tr>
        </thead>

        <tbody>
          {cabins?.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.maxCapacity}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.regularPrice}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.discount}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover"
                />
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => mutate(item.id)}
                  className={`${isPending ? "bg-amber-300" : "bg-red-700"}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Cabins;
