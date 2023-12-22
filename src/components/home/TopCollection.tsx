import React from "react";
import CollectorCard from "./CollectorCard";

const TopCollection = () => {
  return (
    <div className="border-l-2 px-6">
      <h1 className="text-2xl font-bold">Top Collection over</h1>
      <h4 className="text-lg font-bold text-site-primary">Last 7 days</h4>
      <div className="mt-5">
        {topCollections.map((item, index) => (
          <>
            <CollectorCard
              key={item.title}
              slNo={index + 1}
              title={item.title}
              price={item.price}
              percentage={item.percentage}
              totalData={topCollections.length}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;

const topCollections = [
  {
    title: "Crypto NFT",
    price: 178457,
    percentage: "+27.0.1%",
  },
  {
    title: "Crypto NFT 2",
    price: 154700,
    percentage: "+26.29%",
  },
  {
    title: "Crypto NFT 3",
    price: 514578,
    percentage: "+46.59%",
  },
  {
    title: "Crypto NFT 4",
    price: 547896,
    percentage: "+23.26%",
  },
  {
    title: "Crypto NFT 5",
    price: 47854,
    percentage: "+20.29%",
  },
];
