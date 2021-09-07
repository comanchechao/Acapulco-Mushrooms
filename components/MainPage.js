import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef, createRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React from "react";
React.useLayoutEffect = React.useEffect;

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

  let textRef = useRef([createRef(), createRef(), createRef()]);

  useEffect(() => {
    console.log(textRef);

    // testimonial animation

    const text = textRef.current.map((text) => text.current);

    gsap.from(text, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      delay: 1,
      stagger: {
        each: 0.5,
      },
    });
  }, []);
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
      className="maincontainer bg-CoolGray-500 overflow-y-hidden"
      ref={panelsContainer}
    >
      <div
        className="homeDiv h-screen w-screen panel"
        ref={(e) => createPanelsRefs(e, 0)}
      >
        <div className="h-full w-full grid grid-cols-6">
          <div className="col-span-3 flex justify-center flex-col align-center text-Emerald-500 items-center">
            <h2 className="self-center p-5 text-5xl" ref={textRef.current[0]}>
              It doesn't require knowlagdge
            </h2>
            <h2 className="self-center text-7xl" ref={textRef.current[1]}>
              all it takes is{" "}
            </h2>
            <h2 className="self-center text-9xl" ref={textRef.current[2]}>
              Courage
            </h2>
          </div>
        </div>
      </div>
      <div
        className="h-screen w-screen bg-Amber-500 panel"
        ref={(e) => createPanelsRefs(e, 1)}
      >
     <h2>blah blah blah bunch of dump shit</h2>
      </div>
      <div
        className="h-screen w-screen bg-Sky-500 panel"
        ref={(e) => createPanelsRefs(e, 2)}
      >
        some shit that works here we are going ot get
      </div>
    </div>
  );
}
