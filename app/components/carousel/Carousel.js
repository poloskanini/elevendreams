"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <>
      <div className="bg-neutral-900" id="galerie">
        <HorizontalScrollCarousel />
      </div>
      <div className="bg-neutral-900 text-center h-screen text-2xl">
        <p>Site en construction...</p>
      </div>
    </>
    
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/448862064_994750712657023_9046573745374003346_n.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/466807825_10160266035445064_3907247600907982171_n.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/465139925_10160223041900064_4174372268872490249_n.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/464975226_10160223041910064_7617959611240791414_n.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/117131235_10224109754990528_2810594925719314284_n.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/465402520_10160223041905064_8352377364632398667_n.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/19243120_10154469145875064_5390437733905858590_o.jpg",
    title: "Title 7",
    id: 7,
  },
];