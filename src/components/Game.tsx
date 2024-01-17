import Image from "next/image";
import Button from "@mui/material/Button";

export default function Game() {
  return (
    <section className="relative lg:w-full w-[90%] flex flex-col justify-center mx-auto items-center">
      {/* <span className="char-2" /> */}
      <div className="text-6xl my-8 text-[white]">
        <span className="text-[#8f0934]">S</span>
        <span className="text-4xl">upported</span>{" "}
        <span className="text-[#8f0934]">C</span>
        <span className="text-4xl">ions</span>{" "}
      </div>
      <div className="flex 3xl:w-6/12 w-10/12 justify-evenly">
        <div className="relative w-3/12 p-4 min-h-[500px] bd-coin flex flex-col justify-between z-20">
          <div>
            <span className="bd-coins" />
            <Image
              className="m-auto w-full lg:block hidden coin-profile"
              src="/images/metrix.png"
              alt=""
              width={1024}
              height={1114}
            />
            <h1 className="relative text-[#8f0934] text-4xl my-8 z-10">
              Metrix Coin....
            </h1>
            <p className="text-[white] text-xl my-8">
              {" "}
              Metrix is a cryptocurrency that has been hard-forked from the QTUM
              blockchain.{" "}
            </p>
          </div>
          <div>
            <Button className="relative flex py-4 px-8 mx-auto ter-btn z-10 mb-4">
              <span className="text-[#ffffff] text-lg font-bold z-[11]">
                {" "}
                Redeem{" "}
              </span>
            </Button>
          </div>
        </div>
        <div className="relative w-3/12 p-4 min-h-[500px] bd-coin flex flex-col justify-between z-20">
          <div>
            <span className="bd-coins" />
            <Image
              className="m-auto w-full lg:block hidden coin-profile"
              src="/images/3986.png"
              alt=""
              width={1024}
              height={1114}
            />
            <h1 className="relative text-[#8f0934] text-4xl my-8 z-10 ">
              StakeCube Coin....
            </h1>
            <p className="text-[white] text-xl my-8">
              {" "}
              StakeCube is the predominant crypto ecosystem originally launched
              in June 2018 as Staking Pool{" "}
            </p>
          </div>
          <div>
            <Button className="relative flex py-4 px-8 mx-auto ter-btn z-10 mb-4">
              <span className="text-[#ffffff] text-lg font-bold z-[11]">
                {" "}
                Redeem{" "}
              </span>
            </Button>
          </div>
        </div>
        <div className="relative w-3/12 p-4 min-h-[500px] bd-coin flex flex-col justify-between z-20">
          <div>
            <span className="bd-coins" />
            <Image
              className="m-auto w-full lg:block hidden coin-profile"
              src="/images/nMNSC-logo-256x256.png"
              alt=""
              width={1024}
              height={1114}
            />
            <h1 className="relative text-[#8f0934] text-4xl my-8 z-10">
              NewMNS Coin....
            </h1>
            <p className="text-[white] text-xl my-8">
              {" "}
              nMNSC is a new crypto project that was based on the Proof of Stake
              protocol.{" "}
            </p>
          </div>
          <div>
            <Button className="relative flex py-4 px-8 mx-auto ter-btn z-10 mb-4">
              <span className="text-[#ffffff] text-lg font-bold z-[11]">
                {" "}
                Redeem{" "}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
