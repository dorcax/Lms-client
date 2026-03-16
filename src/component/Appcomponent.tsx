export type Category = {
    id?: number;
    title: string;
    icon: string;
    description?: string;
    courses: string;
};

const Appcomponent = ({ title, icon, courses }: Category) => {
    return (
        <div className=" bg-white shadow-sm  rounded-lg p-4 flex items-center gap-2  ">
            <div className="w-8 h-8 rounded-lg bg-[#ec5b13] flex items-center justify-center text-white text-sm">
                {icon}
            </div>
            <div className="leading-2 ">
                <h2 className="font-semibold text-sm capitalize ">{title}</h2>
                <span className="text-gray-500 text-xs">{courses}</span>
            </div>
        </div>
    );
};

export default Appcomponent;
