import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [mushrooms, setMushrooms] = useState([
    {
      title: "Golden Teacher ",
      Description: "psychadelics some of the most madergah spieces out there",
      id: 1,
    },
    {
      title: "Albino A+ ",
      Description: "there white fucker will , fuck you up",
      id: 2,
    },
    { title: "Mckennaii ", Description: "bluueeeeeeeee miniiiiiiiiis", id: 3 },
  ]);

  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
        },
      });
    
  }, []);

  return (
    <div
      className="maincontainer bg-Lime-500 overflow-y-hidden"
      ref={panelsContainer}
    >
      <Navbar />
      <div
        className="homeDiv h-screen w-screen panel"
        ref={(e) => createPanelsRefs(e, 0)}
      >
        <div className="h-full w-full grid grid-cols-6">
          <div className="col-span-3 flex justify-center flex-col align-center text-white items-center">
            <h2 className="self-center p-5 text-5xl">
              It doesn't require knowlagdge
            </h2>
            <h2 className="self-center text-7xl">all it takes is </h2>
            <h2 className="self-center text-9xl">Courage</h2>
          </div>
        </div>
      </div>
      <div
        className="h-screen w-screen bg-Amber-500 panel"
        ref={(e) => createPanelsRefs(e, 1)}
      >
        <Link href="/Mushrooms">
          <a className="z-10 text-3xl">Mushrooms</a>
        </Link>
      </div>
      <div
        className="h-screen w-screen bg-Sky-500 panel"
        ref={(e) => createPanelsRefs(e, 2)}
      >
        some shit that works here we are going ot get
      </div>
    </div>
  );
  ReactDOM.unmountComponentAtNode(document.getElementById("maincontainer"));
}
