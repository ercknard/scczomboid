import Image from "next/image";
import Landing from "@/components/Landing";
import Navigation from "@/layout/Navigation";
import Prolouge from "@/components/Prolouge";
import Game from "@/components/Game";
import Mods from "@/components/Mods";
import Help from "@/components/Help";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Landing />
      <div className="mods">
        <Prolouge />
        {/* <div className="pulse"></div> */}
        <Game />
        <Mods />
        <Help />
      </div>
    </main>
  );
}
