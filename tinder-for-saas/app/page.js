"use client";
import React, { useState } from "react";

const initialSuppliers = [
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "DataDog", logo: "https://logo.clearbit.com/datadoghq.com" },
];

function Card({ supplier }) {
  return (
    <div className="block w-[300px] p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p>{supplier.name}</p>
      <img src={supplier.logo} alt={`${supplier.name} logo`} />
    </div>
  );
}
const showToast = (supplierName, side) => {
  // Create a toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const statements = {
    left: [
      "Swiped left? Maybe they were too cloud-nine for your taste!",
      "Not feeling the spark? It's not you, it's their API.",
      "Swiped left? They must've not had the right features!",
      "Not a match, huh? There's plenty of SaaS in the sea!",
    ],
    right: [
      "Bingo! This vendor's got the code to your heart.",
      "Swiped right? Prepare for a lifetime of updates and integrations!",
      "Swiped right? Looks like it's a match made in cloud heaven!",
      "A perfect match! Get ready for some seamless integration.",
    ],
  };

  const randomIndex = Math.floor(Math.random() * statements[side].length);
  toast.textContent = statements[side][randomIndex];
  toast.style.position = "absolute";
  toast.style.top = "5vh";
  toast.style.left = "80vh";
  toast.style.border = "2px solid #333";
  toast.style.backgroundColor =
    side === "left" ? "rgb(252 165 165)" : "rgb(187 247 208)";
  toast.style.borderRadius = "10px";
  // Append toast to the body to float over content
  document.body.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
};

export default function Home() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);

  const handleDragStart = (e, supplier) => {
    e.dataTransfer.setData("text/plain", supplier.name);
  };

  const handleDrop = (e, side) => {
    const supplierName = e.dataTransfer.getData("text");
    showToast(supplierName, side);
    e.target.style.backgroundColor = "";
    setSuppliers(
      suppliers.filter((supplier) => supplier.name !== supplierName)
    );
  };

  const allowDrop = (e, side) => {
    e.target.style.backgroundColor =
      side === "left" ? "rgb(220 38 38)" : "rgb(22 163 74)";
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
      <div className="flex-1 flex flex-col gap-4 items-center">
        <img
          src="https://assets-global.website-files.com/642e31b6a69b3e0852108536/642e36bdbdb822030f521018_tropic-logo-dark.svg"
          alt="Tropic logo"
          className="w-1/2 mx-auto mt-4"
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
        className="flex-1 flex  bg-green-200"
        onDrop={(e) => handleDrop(e, "right")}
        onDragOver={(e) => allowDrop(e, "right")}
        onDragLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        Please let me have more of this Saas
      </div>
    </main>
  );
}
