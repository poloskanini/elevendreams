"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <>
      <div className="bg-neutral-900" id="galerie">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Ajuste l'intervalle de décalage (x) pour mieux correspondre à la taille réduite
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const isFirst = card.id === 1;
  const ImageComponent = isFirst ? "div" : motion.div;

  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[550px] sm:h-[700px] sm:w-[750px] overflow-hidden"
    >
      <ImageComponent
        {...(!isFirst && {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 1, ease: "easeOut" },
          viewport: { once: true, amount: 0.3 },
        })}
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0"
      />
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
