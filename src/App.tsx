import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import { useRef } from 'react';

function App() {
  // 1. Tạo ref riêng cho mỗi card
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  // 2. Tạo useScroll riêng cho mỗi ref
  const { scrollYProgress: scrollYProgressCard1 } = useScroll({
    target: card1Ref,
    offset: ['start end', 'end end']
  });

  const { scrollYProgress: scrollYProgressCard2 } = useScroll({
    target: card2Ref,
    offset: ['start end', 'end end']
  });

  const rotate1_raw = useTransform(scrollYProgressCard1, [0, 1], [8, -2.5], {
    ease: easeInOut
  });
  const y1_raw = useTransform(scrollYProgressCard1, [0, 1], [0, -60]);

  const rotate2_raw = useTransform(scrollYProgressCard2, [0, 1], [-6, 1.5], {
    ease: easeInOut
  });
  const y2_raw = useTransform(scrollYProgressCard2, [0, 1], [0, -60]);

  // -- Áp dụng Spring cho các giá trị --
  const springConfig = { damping: 30, stiffness: 140, duration: 30 };

  const rotate1 = useSpring(rotate1_raw, springConfig);
  const y1 = useSpring(y1_raw, springConfig);
  const rotate2 = useSpring(rotate2_raw, springConfig);
  const y2 = useSpring(y2_raw, springConfig);

  return (
    <section className="overflow-hidden">
      <div className="h-[1000px] bg-blue-200 flex items-center justify-center">
        <h1 className="text-9xl font-bold text-white px-40 text-center">
          Cuộn xuống để xem hiệu ứng
        </h1>
      </div>

      <div className="h-[1600px] bg-blue-200 relative">
        <motion.div
          ref={card1Ref}
          style={{
            rotate: rotate1, // Sử dụng giá trị từ useTransform
            transformOrigin: 'top left',
            y: y1 // Áp dụng chuyển động Y
          }}
          className="bg-white rounded-2xl px-5 py-10 w-[470px] absolute top-16 left-20 shadow-lg"
        >
          <p className="text-3xl leading-8">
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
            rotate: rotate2, // Sử dụng giá trị từ useTransform
            transformOrigin: 'top right',
            y: y2
          }}
          className="bg-white rounded-2xl px-5 py-10 w-[480px] absolute top-0 right-20 shadow-lg"
        >
          <p className="text-3xl leading-8">
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

        {/* Bảng debug này có thể không cần nữa, hoặc bạn có thể sửa lại để hiển thị giá trị của scrollY */}
        <div className="fixed top-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm font-mono">
          <div>Rotation 1: {Math.round(rotate1.get())}°</div>
          <div>Rotation 2: {Math.round(rotate2.get())}°</div>
        </div>
      </div>
    </section>
  );
}

export default App;
