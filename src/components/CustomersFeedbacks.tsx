import { Quote, ArrowRight, ArrowLeft } from "lucide-react";

const CustomersFeedbacks = () => {
  return (
    <section
      id="customers-feedbacks"
      className=" container mx-auto my-28 relative min-h-[620px] md:px-0 flex flex-col items-center justify-between p-6 gap-8"
    >
      {/* the pic */}
      <div className="hidden xl:block absolute -top-0 -left-0 ">
        <img
          src="/images/home.jpg"
          alt="home"
          width={711}
          height={400}
          style={{
            clipPath:
              "polygon(0% 0%, 0% 100%, 44% 100%, 44% 30%, 100% 30%, 100% 100%, 58% 100%, 49% 100%, 100% 100%, 100% 0%)",
          }}
        />
      </div>
      {/* the text */}
      <div className="self-center  xl:absolute -top-0 -right-[-70px] ">
        <h1 className="text-[40px] font-semibold text-center xl:text-left">
          What Our Customers <br /> Say About Us
        </h1>
      </div>

      {/* the reviews */}
      <div className="absolute -bottom-0 -right-0 z-10 flex gap-11 text-white flex-row">
        {/* comment 1 */}
        <div className="hidden md:flex w-[450px] h-[450px] flex-col justify-between bg-[#1F1F1F] p-8">
          <div>
            <Quote size={50} />
          </div>
          <div className="text-[22px]">
            Working with your design team was an absolute pleasure. The
            attention to detail and creativity exceeded my expectations. Thank
            you for making my home beautiful!
          </div>
          <div className="flex items-center gap-6">
            <img
              src="/images/user-1.png"
              alt="customer-1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Sophie Cartere</p>
              <p className="text-sm text-[#929292]">New York, USA</p>
            </div>
          </div>
        </div>

        {/* comment 2 */}
        <div className="w-[450px] h-[450px] -translate-x-[40px] flex flex-col justify-between bg-[#1F1F1F] p-8">
          <div>
            <Quote size={50} />
          </div>
          <div className="text-[22px]">
            Exceptional service! From the initial consultation to the final
            reveal, your team demonstrated professionalism and a keen eye for
            design. Highly recommend!
          </div>
          <div className="flex items-center gap-6">
            <img
              src="/images/user-2.png"
              alt="customer-1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">James Bennett</p>
              <p className="text-sm text-[#929292]">Toronto, Canada</p>
            </div>
          </div>
        </div>
      </div>

      {/* arrow buttons */}
      <div className="flex gap-4 absolute -bottom-0 right-0 md:-bottom-0 md:-left-0 z-30">
        <div className="flex items-center justify-center w-[73px] h-[73px] text-black bg-[#F1F1F1]">
          <ArrowLeft size={40} />
        </div>
        <div className="flex items-center justify-center w-[73px] h-[73px] bg-[#F1F1F1]">
          <ArrowRight size={40} />
        </div>
      </div>
    </section>
  );
};

export default CustomersFeedbacks;
