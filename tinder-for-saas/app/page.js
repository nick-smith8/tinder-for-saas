"use client";
import React, { useState } from "react";

const initialSuppliers = [
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "DataDog", logo: "https://logo.clearbit.com/datadoghq.com" },
];

function Card({ supplier }) {
  return (
    <div className="block max-w-sm p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p>{supplier.name}</p>
      <img src={supplier.logo} alt={`${supplier.name} logo`} />
    </div>
  );
}

export default function Home() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);

  const handleDragStart = (e, supplier) => {
    e.dataTransfer.setData("text/plain", supplier.name);
  };

  const handleDrop = (e, side) => {
    const supplierName = e.dataTransfer.getData("text");
    alert(`You swiped ${supplierName} to the ${side}`);
    e.target.style.backgroundColor = "";
    setSuppliers(
      suppliers.filter((supplier) => supplier.name !== supplierName)
    );
  };

  const allowDrop = (e, side) => {
    e.target.style.backgroundColor =
      side === "left" ? "rgb(220 38 38)" : "#A3C63C";
    e.preventDefault();
  };

  return (
    <main className="flex h-screen">
      <div
        className="flex-1 flex bg-red-300"
        onDrop={(e) => handleDrop(e, "left")}
        onDragOver={(e) => allowDrop(e, "left")}
        onDragLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        Never would I
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <img
          src="https://assets-global.website-files.com/642e31b6a69b3e0852108536/642e36bdbdb822030f521018_tropic-logo-dark.svg"
          alt="Tropic logo"
          className="w-1/2 mx-auto"
        />
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, supplier)}
          >
            <Card supplier={supplier} />
          </div>
        ))}
      </div>
      <div
        className="flex-1 flex bg-green-200"
        onDrop={(e) => handleDrop(e, "right")}
        onDragOver={(e) => allowDrop(e, "right")}
        onDragLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        Please let me have more of this Saas
      </div>
    </main>
  );
}
