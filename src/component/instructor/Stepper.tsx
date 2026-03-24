export function Stepper({ currentStep }) {
  const steps = [
    "Basic Info",
    "Modules",
    "Lessons",
    "Upload Video",
    "Publish",
  ];

  return (
    <div className="mb-12 overflow-x-auto">
      <div className="flex items-center  justify-between relative px-2">
        {/* line */}
        <div className="absolute top-1/2 left-0 w-[835px] h-0.5 bg-gray-200 -translate-y-1/2 mx-12"></div>

        {steps.map((label, index) => {
          const step = index + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <div
              key={step}
              className={`relative z-10 flex flex-col items-center gap-2 ${
                !isActive && !isCompleted && "opacity-50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                ${
                  isActive || isCompleted
                    ? "bg-[#ec5b13] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>

              <span
                className={`text-xs font-bold uppercase ${
                  isActive ? "text-primary" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}