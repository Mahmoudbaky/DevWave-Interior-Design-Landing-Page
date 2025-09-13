import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
const DesigningYourDream = () => {
  return (
    <section id="design-your-dream" className="container mx-auto my-28 ">
      <div className="flex flex-col justify-between lg:flex-row items-center gap-12">
        {/* Left side : image */}
        <div>
          <img
            src="/images/Mask-group.png"
            alt="Designing your dream"
            width={650}
          />
        </div>
        {/* Right side : text */}
        <div className=" max-w-xl flex flex-col  gap-8 justify-between h-[600px] p-8">
          <h2 className="text-[40px] font-semibold mb-6">
            Designing Your Dream With Brilliance
          </h2>

          <p className="text-[20px] text-[#545454]">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </p>

          <div className="mt-6">
            <div>
              <div className="flex items-center justify-between my-4">
                <p className="font-semibold text-[20px]">
                  Living Room Interior Design
                </p>
                <Plus className="inline-block ml-2" />
              </div>
              <hr />
            </div>
            <div>
              <div className="flex items-center justify-between my-4">
                <p className="font-semibold text-[20px]">
                  Commercial Office Room Interior Design
                </p>
                <Plus className="inline-block ml-2" />
              </div>
              <hr />
            </div>
          </div>

          <Button
            variant={"default"}
            className="w-[200px] h-[50px] px-4 py-2 rounded-[4px]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesigningYourDream;
