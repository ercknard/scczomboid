import Image from "next/image";
import Button from "@mui/material/Button";

export default function Help() {
  return (
    <section className="relative lg:w-full w-[90%] min-h-[100vh] flex justify-center mx-auto items-center mods-1">
      <span className="mods-1" />
      <div className="text-6xl my-8 text-[white] z-10">
        {" "}
        <span className="text-[#8f0934]">G</span>
        <span className="text-4xl">ame</span>{" "}
        <span className="text-[#8f0934]">H</span>
        <span className="text-4xl">elp</span>{" "}
      </div>
    </section>
  );
}
