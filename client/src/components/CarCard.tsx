import { Link } from "react-router-dom";

interface Car {
  _id: string;
  brand: string;
  model: string;
  price: number;
  images: string[];
}

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <img
        src={car.images?.[0] || "https://via.placeholder.com/300"}
        alt={car.model}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-2">
        {car.brand} {car.model}
      </h2>
      <p className="text-blue-600 font-bold">₹ {car.price}</p>

      <Link
        to={`/cars/${car._id}`}
        className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default CarCard;