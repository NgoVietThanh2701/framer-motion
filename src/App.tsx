import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import { useRef } from 'react';

type List = {
  content: string;
  name: string;
  role: string;
};

function App() {
  // 1. Tạo ref riêng cho mỗi card
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  // 2. Tạo useScroll riêng cho mỗi ref
  const { scrollYProgress: scrollYProgressCard1 } = useScroll({
    target: card1Ref,
    offset: ['start end', 'end end']
  });

  const { scrollYProgress: scrollYProgressCard2 } = useScroll({
    target: card2Ref,
    offset: ['start end', 'end end']
  });

  const { scrollYProgress: scrollYProgressCard3 } = useScroll({
    target: card3Ref,
    offset: ['start end', 'end end']
  });

  const { scrollYProgress: scrollYProgressCard4 } = useScroll({
    target: card4Ref,
    offset: ['start end', 'end end']
  });

  const { scrollYProgress: scrollYProgressCard5 } = useScroll({
    target: card5Ref,
    offset: ['start end', 'end end']
  });

  const dimensionTrasform = -100;

  const rotate1Raw = useTransform(scrollYProgressCard1, [0, 1], [8, -2], {
    ease: easeInOut
  });
  const y1Raw = useTransform(
    scrollYProgressCard1,
    [0, 1],
    [0, dimensionTrasform]
  );

  const rotate2Raw = useTransform(scrollYProgressCard2, [0, 1], [-6, 1], {
    ease: easeInOut
  });
  const y2Raw = useTransform(
    scrollYProgressCard2,
    [0, 1],
    [0, dimensionTrasform]
  );

  const rotate3Raw = useTransform(scrollYProgressCard3, [0, 1], [7, -2], {
    ease: easeInOut
  });
  const y3Raw = useTransform(
    scrollYProgressCard3,
    [0, 1],
    [0, dimensionTrasform]
  );

  const rotate4Raw = useTransform(scrollYProgressCard4, [0, 1], [-2, 0.5], {
    ease: easeInOut
  });
  const y4Raw = useTransform(
    scrollYProgressCard4,
    [0, 1],
    [0, dimensionTrasform]
  );

  const rotate5Raw = useTransform(scrollYProgressCard5, [0, 1], [-3, 1], {
    ease: easeInOut
  });
  const y5Raw = useTransform(
    scrollYProgressCard5,
    [0, 1],
    [0, dimensionTrasform]
  );

  // -- Áp dụng Spring cho các giá trị --
  const springConfig = { damping: 30, stiffness: 140, duration: 30 };

  const rotate1 = useSpring(rotate1Raw, springConfig);
  const y1 = useSpring(y1Raw, springConfig);
  const rotate2 = useSpring(rotate2Raw, springConfig);
  const y2 = useSpring(y2Raw, springConfig);
  const rotate3 = useSpring(rotate3Raw, springConfig);
  const y3 = useSpring(y3Raw, springConfig);
  const rotate4 = useSpring(rotate4Raw, springConfig);
  const y4 = useSpring(y4Raw, springConfig);
  const rotate5 = useSpring(rotate5Raw, springConfig);
  const y5 = useSpring(y5Raw, springConfig);

  const lists: List[] = [
    {
      content:
        " Deck Doctors are the best narrative designers and deck storytellers I've ever met.",
      name: 'Ngo Viet Thanh1',
      role: 'Co-Founder, Hustle Fund'
    },
    {
      content:
        'We struggled for a year to tell our story and Deck Doctors got us there. We closed our round with their help building our narrative.',
      name: 'Ngo Viet Thanh2',
      role: 'Co-Founder, Hustle Fund'
    },
    {
      content:
        "W Deck Doctors are the best narrative designers and deck storytellers I've ever met. Deck Doctors are the best narrative designers and deck storytellers I've ever met. I've ever met. Deck Doctors are the best.",
      name: 'Ngo Viet Thanh3',
      role: 'Co-Founder, Hustle Fund'
    },
    {
      content:
        'We struggled for a year to tell our story and Deck Doctors got us there. We closed our round with their help building our narrative.',
      name: 'Ngo Viet Thanh4',
      role: 'Co-Founder, Hustle Fund'
    },
    {
      content:
        'Bright and insightful... from day one their questions, feedback, and ideas were on point. I feel MUCH better going out to pitch now.',
      name: 'Ngo Viet Thanh5',
      role: 'Co-Founder, Hustle Fund'
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section className="lg:overflow-hidden">
      <div className="h-[1200px] bg-blue-200 flex items-center justify-center"></div>

      <div className="hidden lg:block h-[1600px] bg-blue-200 relative">
        <motion.div
          ref={card1Ref}
          style={{
            rotate: rotate1,
            transformOrigin: 'top left',
            y: y1
          }}
          className="bg-white rounded-2xl px-5 py-10 w-1/3 absolute top-16 left-20 md:left-10 shadow-lg"
        >
          <p className="lg:text-xl xl:text-xl 2xl:text-3xl leading-8">
            Deck Doctors are the best narrative designers and deck storytellers
            I've ever met.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div className="rounded-full bg-blue-400 w-12 h-12"></div>
            <div>
              <span className="flex flex-col gap-1 text-lg font-medium">
                Ngo Viet Thanh
              </span>
              <span className="text-gray-600 text-lg">
                Co-Founder, Hustle Fund
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={card2Ref}
          style={{
            rotate: rotate2,
            transformOrigin: 'top right',
            y: y2
          }}
          className="bg-white rounded-2xl px-5 py-10 w-[40%] absolute top-0 right-20 md:right-10 shadow-lg"
        >
          <p className="lg:text-xl xl:text-xl 2xl:text-3xl leading-8">
            Deck Doctors are the best narrative designers and deck storytellers
            I've ever met. Deck Doctors are the best narrative designers and
            deck storytellers I've ever met. I've ever met. Deck Doctors are the
            best.
          </p>
          <div className="flex items-center gap-3 mt-10">
            <div className="rounded-full bg-blue-400 w-12 h-12"></div>
            <div>
              <span className="flex flex-col gap-1 text-lg font-medium">
                Ngo Viet Thanh
              </span>
              <span className="text-gray-600 text-lg">
                Co-Founder, Hustle Fund
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={card3Ref}
          style={{
            rotate: rotate3,
            transformOrigin: 'top left',
            y: y3
          }}
          className="bg-white rounded-2xl px-8 py-10 w-[30%] absolute top-[570px] left-16 md:left-10 shadow-lg"
        >
          <p className="lg:text-xl xl:text-xl 2xl:text-3xl leading-8">
            We struggled for a year to tell our story and Deck Doctors got us
            there. We closed our round with their help building our narrative.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div className="rounded-full bg-blue-400 w-12 h-12"></div>
            <div>
              <span className="flex flex-col gap-1 text-lg font-medium">
                Ngo Viet Thanh
              </span>
              <span className="text-gray-600 text-lg">
                Co-Founder, Hustle Fund
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={card4Ref}
          style={{
            rotate: rotate4, // Sử dụng giá trị từ useTransform
            transformOrigin: 'top right',
            y: y4
          }}
          className="bg-white rounded-2xl px-5 py-10 w-[30%] absolute top-[500px] right-[35%] shadow-lg"
        >
          <p className="lg:text-xl xl:text-xl 2xl:text-3xl leading-8">
            We’re close to closing the round now, just about to be at that
            beautiful oversubscribed mark. The story and deck we workshopped was
            a big part of that.
          </p>
          <div className="flex items-center gap-3 mt-10">
            <div className="rounded-full bg-blue-400 w-12 h-12"></div>
            <div>
              <span className="flex flex-col gap-1 text-lg font-medium">
                Ngo Viet Thanh
              </span>
              <span className="text-gray-600 text-lg">
                Co-Founder, Hustle Fund
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={card5Ref}
          style={{
            rotate: rotate5,
            transformOrigin: 'top right',
            y: y5
          }}
          className="bg-white rounded-2xl px-5 py-10 w-[30%] absolute top-[530px] right-16 md:right-10 shadow-lg"
        >
          <p className="lg:text-xl xl:text-xl 2xl:text-3xl leading-8">
            Bright and insightful... from day one their questions, feedback, and
            ideas were on point. I feel MUCH better going out to pitch now.
          </p>
          <div className="flex items-center gap-3 mt-10">
            <div className="rounded-full bg-blue-400 w-12 h-12"></div>
            <div>
              <span className="flex flex-col gap-1 text-lg font-medium">
                Ngo Viet Thanh
              </span>
              <span className="text-gray-600 text-lg">
                Co-Founder, Hustle Fund
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:hidden h-[250vh] bg-blue-200" ref={containerRef}>
        <div className="sticky top-0 flex items-center justify-center">
          {lists.map((list: List, index: number) => (
            <Card
              key={index}
              content={list.content}
              name={list.name}
              role={list.role}
              i={index}
              scrollYProgress={scrollYProgress}
              totalCards={lists.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ content, name, role, i, scrollYProgress, totalCards }: any) => {
  const step = 1 / totalCards;
  const start = i * step * 0.4; //  để tạo khoảng cách
  const end = start + step;

  const y = useTransform(scrollYProgress, [start, end], ['100vh', '30vh']);

  const angle = i % 2 === 0 ? (i == 2 ? -4 : i == 4 ? -2 : 2) : 3;

  const rotate_raw = useTransform(
    scrollYProgress,
    [start, end],
    [-angle, angle]
  );

  const springConfig = { damping: 50, stiffness: 40 };
  const rotate = useSpring(rotate_raw, springConfig);

  const zIndex = i;

  return (
    <motion.div
      className={`absolute  ${
        i === 0
          ? 'w-[47%]'
          : i === 2
          ? 'w-[54%]'
          : i === 4
          ? 'w-[40%]'
          : 'w-[57%]'
      } bg-white rounded-3xl p-4 md:p-8 shadow-2xl flex flex-col justify-between`}
      style={{
        y,
        rotate,
        zIndex,
        top: `calc(-5vh + ${i * 3}px)`
      }}
    >
      <p className="text-lg md:text-xl font-medium leading-relaxed">
        {content}
      </p>
      <div className="flex items-center gap-4 mt-10">
        <div className="rounded-full bg-blue-500 w-14 h-14"></div>
        <div>
          <p className="font-bold text-base">{name}</p>
          <p className="text-gray-600 text-base">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
