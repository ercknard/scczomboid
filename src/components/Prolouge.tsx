import Image from "next/image";
import Button from "@mui/material/Button";

export default function Prolouge() {
  return (
    <section className="lg:w-full w-[90%] min-h-[50vh] flex justify-center mx-auto items-center mb-[20rem]">
      <span className="absolute w-full h-full z-10 bloodtop-1" />
      <span className="char-1 z-20" />
      <span className="clip-1" />
      <div className="text-6xl my-8 text-[white]">
        <span className="text-[#8f0934] text-8xl">T</span>
        <span className="text-6xl">his is how you</span>{" "}
        <span className="text-[#8f0934] text-8xl">DIED</span>
        <span className="text-6xl text-[#8f0934]">....</span>{" "}
      </div>
    </section>
  );
}
