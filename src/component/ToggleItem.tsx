import { Switch } from "@/components/ui/switch";

type Props = {
  title: string;
  description: string;
  defaultChecked?: boolean;
};

const ToggleItem = ({ title, description, defaultChecked }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-base ">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <Switch className= "data-[state=checked]:bg-[#ec5b13]"  defaultChecked={defaultChecked} />
    </div>
  );
};

export default ToggleItem;