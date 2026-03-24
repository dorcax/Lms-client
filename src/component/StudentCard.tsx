import { CheckCircle } from "lucide-react"

type Props={
    name:string,
    value:any ,
    id:number
}



const StudentCard = ({name,value,id}:Props) => {
    return (
        <div className="flex justify-between bg-white shadow-md px-4 py-6 rounded-lg " key={id}>
            <div>
                <h2 className="capitalize font-normal text-slate-700  pb-2 ">{name} </h2>
                <span className="font-semibold text-lg">{value}</span>
            </div>
            <div>
            <CheckCircle className="text-[#ec5b13]"/>
            </div>
        </div>
    )
}

export default StudentCard