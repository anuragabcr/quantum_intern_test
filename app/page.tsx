"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/users");
      setData(response.data.res);
    };
    fetchData();
  }, [data]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-x-auto p-10 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-orange-50">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.name}
                </th>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4">{item?.username}</td>
                <td className="px-6 py-4">{item?.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-5">
          <Link
            href={"/login"}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
