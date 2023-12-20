import Image from "next/image";
const imageStyle = {
  with: "100vh",
  height: "500px",
};
export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-full relative border border-red-600">
        <Image
          src={"/slide-banner.svg"}
          alt="slider image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
