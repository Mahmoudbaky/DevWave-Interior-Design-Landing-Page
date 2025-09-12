import { Button } from "./ui/button";
import { MoveDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="container relative mx-auto px-4  min-h-[620px] md:px-0 flex flex-col md:flex-row items-center justify-between p-6 gap-8 "
    >
      {/* Left side content (text and buttons) */}
      <div className="flex flex-col justify-between gap-16 items-center md:items-start ">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-4xl md:text-[133px] font-medium text-center md:text-left">
            Interior Design
          </h1>
          <p className="w-[759px] text-[#545454] text-[20px]">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
        </div>
        <Button
          variant={"default"}
          className="w-[200px] h-[50px] px-4 py-2 rounded-[4px]"
        >
          Start Project
        </Button>
        <div className="flex gap-14 text-center ">
          <div>
            <p className="text-[70px] text-[#545454]">400+</p>
            <p className="text-[20px] text-[#545454]">Project Complete</p>
          </div>
          <div>
            <p className="text-[70px] text-[#545454]">600+</p>
            <p className="text-[20px] text-[#545454]">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-[70px] text-[#545454]">100+</p>
            <p className="text-[20px] text-[#545454]">Unique Styles</p>
          </div>
        </div>
      </div>

      {/* Right side content (images) */}

      <div className="absolute -top-0 -right-0  w-[350px] h-[428px]">
        <img src="./src/assets/images/image-1.png" alt="image-1" />
      </div>

      <div className="absolute z-10 -bottom-0 -right-[-50px]">
        <img
          src="./src/assets/images/image-2.png"
          alt="image-2"
          width={480}
          height={300}
        />
      </div>

      <div className="absolute  -bottom-[-175px] -right-[-400px] w-[150px] h-[150px]  border-2 border-black"></div>

      <div className="text-white flex items-center justify-center bg-black absolute z-30 rounded-[0px] -bottom-0 -right-0 w-[100px] h-[100px]">
        <MoveDown size={50} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
