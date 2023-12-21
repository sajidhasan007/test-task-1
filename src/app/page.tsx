import HeroSection from "@/components/home/HeroSection";
import NftHistory from "@/components/home/NftHistory";

const imageStyle = {
  with: "100vh",
  height: "500px",
};
export default function Home() {
  return (
    <div className="h-screen">
      <HeroSection />
      <NftHistory />
    </div>
  );
}
