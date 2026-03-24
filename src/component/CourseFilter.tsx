type Tab = "all" | "progress" | "completed"

type Props = {
  active: string
  setActive: (tab: Tab) => void
  counts: {
    all: number
    progress: number
    completed: number
  }
}

export const FilterTabs = ({ active, setActive, counts }: Props) => {
  const tabs = [
    { key: "all", label: "All Courses", count: counts.all },
    { key: "progress", label: "In Progress", count: counts.progress },
    { key: "completed", label: "Completed", count: counts.completed }
  ]

  return (
    <div className="flex gap-6 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActive(tab.key as Tab)}
          className={`pb-3 font-bold ${
            active === tab.key
              ? " text-[#ec5b13]"
              : "text-slate-500"
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  )
}