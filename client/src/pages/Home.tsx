import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">CarHub</h1>
      <Link
        to="/cars"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Explore Cars
      </Link>
    </div>
  );
};

export default Home;