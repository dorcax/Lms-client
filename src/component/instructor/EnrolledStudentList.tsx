import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  CircleCheck,
  CircleEllipsis,
  MoreHorizontal,
} from "lucide-react";
import React from "react";




import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import DataTable from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



// import { roomsData, type Room } from "@/data/rooms";
import {useParams} from "react-router-dom"
import { enrolledStudent } from "@/constants/data";


export type EnrolledStudent = {
  id: number;             
  name: string;            
  avatar: string;         
  course: string;        
  date: string;            
  amount: string;          
  status: "Paid" | "Pending" | "Failed"; 
  statusColor: string;     
};
export function EnrolledStudentList() {


  // Columns
//   const columns = React.useMemo<ColumnDef<EnrolledStudent>[]>(
//     () => [
//       {
//         id: "select",
//         header: ({ table }) => (
//           <Checkbox
//             checked={
//               table.getIsAllPageRowsSelected() ||
//               (table.getIsSomePageRowsSelected() && "indeterminate")
//             }
//             onCheckedChange={(value) =>
//               table.toggleAllPageRowsSelected(!!value)
//             }
//             aria-label="Select all"
//           />
//         ),
//         cell: ({ row }) => (
//           <Checkbox
//             checked={row.getIsSelected()}
//             onCheckedChange={(value) => row.toggleSelected(!!value)}
//             aria-label="Select row"
//           />
//         ),
//         enableSorting: false,
//         enableHiding: false,
//       },
//       {
//         accessorKey: "student ",
//         header: ({ column }) => (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             className="capitalize "
//           >
//             student name 
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         ),
//         cell: ({ row }) => {
//           const attachments = row.original.avatar;
        
//         },
//       },
//       {
//         accessorKey: "course",
//         header: ({ column }) => (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Title / Number <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         ),
//         cell: ({ row }) => (
//           <div className="font-medium">{row.getValue("title")}</div>
//         ),
//       },
//       {
//         accessorKey: "date",
//         header: "Enrolled Date",
//         cell: ({ row }) => {
//           const price = parseFloat(row.getValue("price") ?? 0);
//           return (
//             <div className="font-bold">
//               {price.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </div>
//           );
//         },
//       },
//        {
//         accessorKey: "amount",
//         header: "Amount",
//         cell: ({ row }) => {
//           const price = parseFloat(row.getValue("amount") ?? 0);
//           return (
//             <div className="font-bold">
//               {price.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </div>
//           );
//         },
//       },
//        {
//         accessorKey: "status",
//         header: ({ column }) => (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             status <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         ),
//         cell: ({ row }) => (
//           <div className="font-medium">{row.getValue("status")}</div>
//         ),
//       },
 
      
    
//       {
//         id: "actions",
//         cell: ({ row }) => (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem
               
//               >
//                 View course
//               </DropdownMenuItem>
//               <DropdownMenuItem
               
//               >
//                 Edit course
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 className="text-red-600"
               
//               >
//                 Delete Property
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         ),
//       },
//     ],
//     [],
//   );


const columns = React.useMemo<ColumnDef<EnrolledStudent>[]>(
  () => [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="capitalize"
        >
          Student Name <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
            <img
              src={row.original.avatar}
              alt={row.original.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "course",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Course <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium">{row.getValue("course")}</div>,
    },
    {
      accessorKey: "date",
      header: "Enrollment Date",
      cell: ({ row }) => <div>{row.getValue("date")}</div>,
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        // Remove $ sign if you want to format as number
        const amount = parseFloat(row.getValue("amount")?.replace("$", "") ?? 0);
        return (
          <div className="font-bold">
            {amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Status <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${row.original.statusColor}`}
        >
          {row.getValue("status")}
        </span>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View course</DropdownMenuItem>
            <DropdownMenuItem>Edit course</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete Enrollment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ],
  []
);
 

  return (
    <div className="space-y-4">
     

   

<div className="border my-10 bg-white rounded-md py-4">
          <DataTable
        data={enrolledStudent}
        columns={columns}
        loading={false}
        // search={handleSearch}
        // searchQuery={query}
      />
</div>
    </div>
  );
}

export default EnrolledStudentList;
