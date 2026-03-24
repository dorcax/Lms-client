export function FormLayout({ left, right }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-8">{left}</div>
      <div className="lg:col-span-5 space-y-8">{right}</div>
    </div>
  );
}