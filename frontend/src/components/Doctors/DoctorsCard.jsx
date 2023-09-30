import React from 'react';
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"; 

const DoctorsCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = doctor;

  return (
    <div className="doctor-card bg-white rounded-lg shadow-md p-4 lg:p-6 mx-4 lg:mx-8 mb-8">
      <div className="relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
        <img
          src={photo}
          className="object-cover w-full h-full"
          alt={name}
        />
      </div>

      <h2 className="text-lg lg:text-xl text-gray-900 font-semibold mt-4 lg:mt-6">
        {name}
      </h2>

      <div className="flex items-center mt-2 lg:mt-4">
        <span className="bg-blue-100 text-blue-700 py-1 px-2 lg:px-3 text-sm lg:text-xs rounded-md font-semibold mr-3">
          {specialization}
        </span>

        <div className="flex items-center space-x-2 text-sm lg:text-xs font-semibold text-gray-700">
          <img src={starIcon} className="w-4 h-4" alt="Star" />
          <span>{avgRating}</span>
          <span>({totalRating})</span>
        </div>
      </div>

      <div className="mt-3 lg:mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-800">
            {totalPatients} patients
          </h3>
          <p className="text-sm font-normal text-gray-600">
            At {hospital}
          </p>
        </div>

        <Link
          to="/doctors"
          className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 text-white transition duration-300"
        >
          <BsArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;