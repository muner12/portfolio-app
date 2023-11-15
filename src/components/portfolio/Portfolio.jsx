import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Services App",
    img: "/services.PNG",
    desc: "As a passionate and innovative developer, I have designed and developed a dynamic Services Application that showcases my commitment to creating practical solutions. This application seamlessly connects users with a range of services, providing a user-friendly interface and a robust backend to ensure a smooth experience.",
    url:"https://servicesapp.netlify.app/"
  },
  {
    id: 2,
    title: "HorseLux App",
    img: "/horse.PNG",
    desc: "Introducing HorseLux, the ultimate equestrian companion app designed for horse enthusiasts and riders alike. Immerse yourself in a world where technology meets the equestrian lifestyle, offering a seamless blend of functionality and passion.",
    url:"https://horseapp.netlify.app/"
  },
  {
    id: 3,
    title: "RealState App",
    img: "/realstate.PNG",
    desc: "RealEstateHub empowers users to make informed real estate decisions by providing a user-friendly platform with advanced search capabilities and immersive property exploration features. It represents my commitment to delivering technology solutions that transform the real estate journey for both buyers and sellers.",
    url:"https://real-e-state-app.netlify.app/"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="_blank" href={item.url}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
