import React from "react";
import CollectorCard from "./CollectorCard";

const TopCollection = () => {
  return (
    <div className="border-l-2 px-6">
      <h1 className="text-2xl font-bold">Top Collection over</h1>
      <h4 className="text-lg font-bold text-site-primary">Last 7 days</h4>
      <CollectorCard />
    </div>
  );
};

export default TopCollection;
