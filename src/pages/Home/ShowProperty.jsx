import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import PropTypes from "prop-types";

const ShowProperty = () => {
  const resorts = useLoaderData();
  const { id } = useParams();
  console.log(resorts, id);
  const property = resorts.find((resort) => resort.id === parseInt(id));
  console.log(property);

  return (
    <div className="mx-10 mt-10 md:mx-24 lg:mx-28 ">
      <div
        className="hero min-h-screen rounded-2xl drop-shadow-lg"
        style={{ backgroundImage: `url(${property.image})` }}
      >
        <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              {property.estate_title}
            </h1>
            <p className="mb-5 text-white">{property.description}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-10 pb-10">
        <div className="space-y-5">
          <p>
            <span className="text-2xl font-bold">Property Segment: </span>{" "}
            {property.segment_name}
          </p>
          <p>
            <span className="text-2xl font-bold">Property Status: </span>{" "}
            {property.status}
          </p>
        </div>
        <div className="space-y-5">
          <p>
            <span className="text-2xl font-bold">Property Area: </span>{" "}
            {property.area}
          </p>
          <p>
            <span className="text-2xl font-bold">Property Location: </span>{" "}
            {property.location}
          </p>
        </div>
      </div>
      <hr />

      <div className="mt-10">
        <h2 className="underline text-2xl font-bold pb-5">
          Property Facilities:{" "}
        </h2>

        <ui>
          {property.facilities.map((facility, idx) => (
            <li key={idx} className="mb-3">
              {facility}
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
};

export default ShowProperty;
