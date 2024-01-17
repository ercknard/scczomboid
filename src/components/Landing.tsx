import Image from "next/image";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <section className="lg:w-full w-[90%] min-h-screen flex justify-center mx-auto items-center landing">
      <span className="absolute w-full h-full z-10 to-dark-round flashit" />
      <span className="absolute w-full h-full z-10 to-dark-round-2" />
      <span className="absolute w-full h-full z-10 bloodbot" />
      <span className="absolute w-full h-full z-10 bloodtop flashit" />
      <span className="shadow" />
      <span className="clip" />
      <div className="relative z-20 w-full">
        <Image
          className="m-auto w-2/12 lg:block hidden"
          src="/images/2691971477_preview_pzlogo-3.png"
          alt=""
          width={1024}
          height={1114}
        />
        <div className="text-center text-[5rem] scc-secondary">
          {" "}
          On <span className="text-[#94042e] flashit">Scc.tips</span>
        </div>
        <Button className="relative flex py-4 px-8 mx-auto">
          <span className="main-btn text-[#ffffff] text-lg font-bold">
            {" "}
            Play!{" "}
          </span>
        </Button>
      </div>
    </section>
  );
}
