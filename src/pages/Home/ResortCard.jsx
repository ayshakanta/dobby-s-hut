import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ResortCard = ({ resort }) => {
  const { image, estate_title, segment_name, status, area, id } = resort;
  return (
    <div className="card w-auto bg-base-100 shadow-xl mt-20">
      <figure>
        <img
          className="w-80 rounded-2xl h-64 drop-shadow-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-3 text-2xl font-bold">{estate_title}</h2>
        <hr />
        <div className="bg-slate-100 p-4 mb-3 rounded-2xl mt-3 drop-shadow-lg">
          <p>
            <span className="font-bold text-xl">Segment: </span> {segment_name}
          </p>
          <h3>
            <span className="font-bold text-xl">Status: </span> {status}
          </h3>
          <p>
            <span className="font-bold text-xl">Area: </span> {area}
          </p>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/resort/${id}`}>
            <button className="btn bg-gray-500 text-white drop-shadow-md">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResortCard;

ResortCard.propTypes = {
  resort: PropTypes.object,
};
