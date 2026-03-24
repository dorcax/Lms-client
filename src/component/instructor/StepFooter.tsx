export function StepFooter({
  onNext,
  onBack,
  nextLabel = "Continue",
  showBack = false,
}) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow px-6 py-4 flex justify-between">
      <button
        onClick={onBack}
        className={`text-gray-500 ${!showBack && "invisible"}`}
      >
        Back
      </button>

      <button
        onClick={onNext}
        className="bg-primary text-white px-8 py-3 rounded-lg font-bold"
      >
        {nextLabel}
      </button>
    </div>
  );
}