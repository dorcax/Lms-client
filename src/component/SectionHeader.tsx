type Props = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className="border-b border-primary/10 pb-4">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;