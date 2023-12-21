import HeroSection from "@/components/home/HeroSection";
import HomeTopCollections from "@/components/home/HomeTopCollections";
import NftHistory from "@/components/home/NftHistory";

const imageStyle = {
  with: "100vh",
  height: "500px",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NftHistory />
      <HomeTopCollections />
    </div>
  );
}
