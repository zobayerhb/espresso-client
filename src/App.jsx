import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(loadedCoffee);

  return (
    <>
      <h1 className="text-4xl text-center text-black font-bold mb-8">
        Coffees List
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
