import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollFrameSequence = ({
  frameDir = "/frames/malong",
  framePrefix = "ezgif-frame-",
  frameExt = "png",
  startFrame = 4,
  endFrame = 181,
  zeroPad = 3,
  scrollLength = 8,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const frameIndexRef = useRef({ value: 0 });

  const totalFrames = endFrame - startFrame + 1;
  const pad = (n) => String(n).padStart(zeroPad, "0");

  const frameSrcs = Array.from(
    { length: totalFrames },
    (_, i) => `${frameDir}/${framePrefix}${pad(startFrame + i)}.${frameExt}`
  );

  useGSAP(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const images = frameSrcs.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    images[0].onload = () => {
      canvas.width = images[0].naturalWidth;
      canvas.height = images[0].naturalHeight;
      ctx.drawImage(images[0], 0, 0);
    };

    const drawFrame = (rawIndex) => {
      const index = Math.max(0, Math.min(Math.round(rawIndex), images.length - 1));
      const img = images[index];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    };

    const mm = gsap.matchMedia();

    // Mobile: Smooth scrub in natural scroll flow (Slower playback over extended scroll distance)
    mm.add("(max-width: 767px)", () => {
      gsap.to(frameIndexRef.current, {
        value: images.length - 1,
        ease: "none",
        onUpdate: () => drawFrame(frameIndexRef.current.value),
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          end: "+=950px",
          scrub: 1,
        },
      });
    });

    // Desktop: Pinned full-screen sequence
    mm.add("(min-width: 768px)", () => {
      gsap.to(frameIndexRef.current, {
        value: images.length - 1,
        ease: "none",
        onUpdate: () => drawFrame(frameIndexRef.current.value),
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=" + (images.length * scrollLength),
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className={"w-full h-auto aspect-video md:h-screen md:aspect-none relative overflow-hidden bg-black flex items-center justify-center " + className}>
      <canvas ref={canvasRef} className="w-full h-full object-contain md:object-cover block" />
    </div>
  );
};

export default ScrollFrameSequence;



