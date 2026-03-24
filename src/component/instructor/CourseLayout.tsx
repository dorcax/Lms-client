export function CourseLayout({ children }) {
  return (
    <main className=" max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2">
          Create New Course
        </h1>
        <p className="text-sm text-gray-500">
          Define the core foundations of your academic program.
        </p>
      </div>

      {children}
    </main>
  );
}