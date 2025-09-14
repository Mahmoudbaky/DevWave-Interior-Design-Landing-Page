import { Rocket, Lightbulb, CircleCheck } from "lucide-react";

const ThreeSimpleSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Start Project",
      description:
        "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
      icon: Rocket,
    },
    {
      id: 2,
      title: "Craft",
      description:
        "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space.",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Execute",
      description:
        "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.",
      icon: CircleCheck,
    },
  ];

  return (
    <section id="three-simple-steps" className="container mx-auto my-36">
      <div className="flex flex-col px-4 md:px-0 mb-5 justify-between lg:flex-row md:items-center gap-8">
        {/* Right side : text */}
        <div className="max-w-2xl flex flex-col mt-[-70px] gap-7 justify-between ">
          <h2 className="text-[40px] md:text-[40px] text-left font-semibold mb-6">
            Designing Your Dream in Three Simple Steps
          </h2>

          <div className="flex flex-col gap-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-row gap-6 justify-between items-center"
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="w-12 h-12 p-3 text-white rounded-full bg-black flex items-center justify-center">
                    <step.icon className="w-7 h-7" />
                  </div>
                  {step.id === 3 ? (
                    <></>
                  ) : (
                    <div className="h-[100px] w-px border-l border-[#9B9B9B]"></div>
                  )}
                </div>
                <div className=" py-4">
                  <h3 className="text-[30px] font-semibold">{step.title}</h3>
                  <p className="text-[#545454] max-w-[569px] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left side : image */}
        <div>
          <img
            src="/images/Mask-group-2.png"
            alt="Designing your dream"
            width={650}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeSimpleSteps;
