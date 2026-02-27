import { useEffect, useState } from "react";
import API from "../services/api";
import CarCard from "../components/CarCard";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await API.get("/cars");
      setCars(res.data);
    };

    fetchCars();
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cars.map((car: any) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default Cars;