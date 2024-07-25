import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err.data);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
