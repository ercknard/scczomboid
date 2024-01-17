import Image from "next/image";
import Button from "@mui/material/Button";

const projects = [
  {
    num: 1,
    desc: "",
    description: "Zombie Horde Survival",
    image:
      "https://pzwiki.net/w/images/thumb/9/98/Axe_Model.png/300px-Axe_Model.png",
  },
  {
    num: 2,
    desc: "",
    description: "Sandbox Collaborative Mission",
    image:
      "https://pzwiki.net/w/images/thumb/c/c3/Model_Magazine.png/300px-Model_Magazine.png",
  },
  {
    num: 3,
    desc: "Crypto Vouchers:",
    description: "Recover CryptoCurrency Vouchers from the game",
    image: "/images/StakeCubeCoin.png",
  },
  {
    num: 4,
    desc: "PvE & PvP:",
    description: "Fight the Horde and/or Other Players",
    image:
      "https://pzwiki.net/w/images/thumb/4/44/Machete_Model.png/300px-Machete_Model.png",
  },
  {
    num: 5,
    desc: "Factions:",
    description: "Group together to survive",
    image:
      "https://pzwiki.net/w/images/thumb/f/f5/UmbrellaOpen_Model.png/300px-UmbrellaOpen_Model.png",
  },
  {
    num: 6,
    desc: "Map Sharing:",
    description: "Share your map with friends",
    image:
      "https://pzwiki.net/w/images/thumb/d/dd/Map_Model.png/192px-Map_Model.png",
  },
  {
    num: 7,
    desc: "Safehouses:",
    description: "Claim buildings for bases",
    image:
      "https://pzwiki.net/w/images/thumb/4/41/Bathtowel_Model.png/192px-Bathtowel_Model.png",
  },
  {
    num: 8,
    desc: "Repair Walls:",
    description: "Make Repairs to your Base Defenses",
    image:
      "https://pzwiki.net/w/images/thumb/d/d7/PipeWrench_Model.png/300px-PipeWrench_Model.png",
  },
  {
    num: 9,
    desc: "Expanded Map:",
    description: "More areas to explore",
    image:
      "https://pzwiki.net/w/images/thumb/d/dd/Map_Model.png/192px-Map_Model.png",
  },
  {
    num: 10,
    desc: "Skill Recovery Journal:",
    description: "Recover 60% of your characters skills upon death.",
    image:
      "https://pzwiki.net/w/images/thumb/4/43/Notebook_Model.png/192px-Notebook_Model.png",
  },
  {
    num: 11,
    desc: "Expanded Weapons:",
    description: "Rifles, Carbines, Pistols, Knives, Swords and Large Hammers",
    image: "https://pzwiki.net/w/images/8/80/HandAxe_Model.png",
  },
  {
    num: 12,
    desc: "",
    description: "Expanded Electronics Skills",
    image: "https://pzwiki.net/w/images/f/fb/Tv_Anim.gif",
  },
];

const mods = [
  {
    num: 1,
    desc: "",
    description: "Dancing, Sitting & custom Emotes",
    image:
      "https://pzwiki.net/w/images/thumb/9/98/Axe_Model.png/300px-Axe_Model.png",
  },
  {
    num: 2,
    desc: "",
    description: "More Cars & Trucks",
    image:
      "https://pzwiki.net/w/images/thumb/c/c3/Model_Magazine.png/300px-Model_Magazine.png",
  },
  {
    num: 3,
    desc: "",
    description: "Extra Cars + Buses",
    image: "/images/StakeCubeCoin.png",
  },
  {
    num: 4,
    desc: "So Many Vehicles:",
    description: "Campers, Hummers, Trucks & More",
    image:
      "https://pzwiki.net/w/images/thumb/4/44/Machete_Model.png/300px-Machete_Model.png",
  },
  {
    num: 5,
    desc: "Scrap Weapon:",
    description: "Craft makeshift weapons from scraps",
    image:
      "https://pzwiki.net/w/images/thumb/f/f5/UmbrellaOpen_Model.png/300px-UmbrellaOpen_Model.png",
  },
  {
    num: 6,
    desc: "Extra Guns with Upgrades:",
    description: "Magazines, Scopes, Silencers & Novel Addons",
    image:
      "https://pzwiki.net/w/images/thumb/d/dd/Map_Model.png/192px-Map_Model.png",
  },
  {
    num: 7,
    desc: "",
    description: "Additional Clothing",
    image:
      "https://pzwiki.net/w/images/thumb/4/41/Bathtowel_Model.png/192px-Bathtowel_Model.png",
  },
  {
    num: 8,
    desc: "",
    description: "Makeshift Armor Crafting",
    image:
      "https://pzwiki.net/w/images/thumb/d/d7/PipeWrench_Model.png/300px-PipeWrench_Model.png",
  },
  {
    num: 9,
    desc: "",
    description: "Structure & Object Health",
    image:
      "https://pzwiki.net/w/images/thumb/d/dd/Map_Model.png/192px-Map_Model.png",
  },
  {
    num: 10,
    desc: "",
    description: "Vehicle Status on Dash",
    image:
      "https://pzwiki.net/w/images/thumb/4/43/Notebook_Model.png/192px-Notebook_Model.png",
  },
  {
    num: 11,
    desc: "",
    description: "Unique & Special Zombies",
    image: "https://pzwiki.net/w/images/8/80/HandAxe_Model.png",
  },
  {
    num: 12,
    desc: "Expanded Helicopter Events:",
    description: "Special Aerial Drops & more",
    image: "https://pzwiki.net/w/images/f/fb/Tv_Anim.gif",
  },
  {
    num: 13,
    desc: "",
    description: "Extra Flags & Tiles",
    image: "https://pzwiki.net/w/images/f/fb/Tv_Anim.gif",
  },
];

export default function Mods() {
  return (
    <section className="relative lg:w-full w-[90%] flex justify-center mx-auto items-center flex-col">
      <div className="text-6xl my-8 text-[white]">
        {" "}
        <span className="text-[#8f0934]">S</span>
        <span className="text-4xl">erver</span>{" "}
        <span className="text-[#8f0934]">G</span>
        <span className="text-4xl">ameplay</span>{" "}
      </div>
      <div className="flex flex-wrap 3xl:w-6/12 w-10/12 gap-8 justify-center">
        {projects.map((item) => (
          <div
            key={item.num}
            className="relative w-[22%] p-4 min-h-[350px] bd-coin flex flex-col justify-between z-20"
          >
            <div>
              <span className="bd-coins" />
              <Image
                className="m-auto w-full lg:block hidden coin-profile"
                src={item.image}
                alt=""
                width={1024}
                height={1114}
              />
              {/* <div className="pulse"></div> */}
              <div className="text-[white] my-8 text-center">
                {" "}
                <span className="text-[#8f0934] text-[3rem]">{item.num} </span>
                <br />
                <span className="text-[#8f0934] text-xl">{item.desc} </span>
                <span className="text-xl">{item.description}. </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-6xl my-8 text-[white]">
        <span className="text-[#8f0934]">S</span>
        <span className="text-4xl">erver</span>{" "}
        <span className="text-[#8f0934]">M</span>
        <span className="text-4xl">ods</span>{" "}
      </div>
      <div className="flex flex-wrap 3xl:w-6/12 w-10/12 gap-8 justify-center">
        {mods.map((item) => (
          <div
            key={item.num}
            className="relative w-[22%] p-4 min-h-[200px] bd-coin flex flex-col justify-between z-20"
          >
            <div>
              <span className="bd-coins" />
              {/* <Image
                className="m-auto w-full lg:block hidden coin-profile"
                src={item.image}
                alt=""
                width={1024}
                height={1114}
              /> */}
              {/* <div className="pulse"></div> */}
              <div className="text-[white] my-8 text-center">
                {" "}
                <span className="text-[#8f0934] text-[3rem]">{item.num} </span>
                <br />
                <span className="text-[#8f0934] text-xl">{item.desc} </span>
                <span className="text-xl">{item.description}. </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
