import React, { useState } from "react";
import Table from "./Components/Tbody";
import Thead from "./Components/Thead";

function App() {
  const [tableitems, setTableitems] = useState([
    {
      id: 1,
      age: 32,
      tags: "nice",
      tags2: "teacher",
      name: "John Doe",
      address: "123-uy,Ko'cha, Shahar, Davlat",
      link: "#",
    },
    {
      id: 2,
      age: 32,
      tags: "looser",
      tags2: " ",
      name: "Joe Black",
      address: "123-uy,Ko'cha, Shahar, Davlat",
      link: "#",
    },
    {
      id: 3,
      age: 42,
      tags: "cool",
      tags2: 'teacher',
      name: "Josephina",
      address: "123-uy,Ko'cha, Shahar, Davlat",
      link: "#",
    },
    {
      id: 4,
      age: 32,
      tags: "nice",
      tags2: 'designer',
      name: "Ashley",
      address: "123-uy,Ko'cha, Shahar, Davlat",
      link: "#",
    },
  ]);
  return (
    <>
    <table className="min-w-full divide-y divide-gray-200">
      <Thead />
      {tableitems.map(tableitems => (
        <Table tableitems={tableitems} key={tableitems.id}  />
      ))}
      </table>
    </>
  );
}

export default App;
