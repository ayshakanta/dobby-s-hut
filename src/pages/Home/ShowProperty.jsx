import { useParams } from "react-router-dom";

const ShowProperty = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ShowProperty;
