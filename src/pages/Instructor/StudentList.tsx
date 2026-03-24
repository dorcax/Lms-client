

import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  CircleCheck,
  CircleEllipsis,
  Download,
  MoreHorizontal,
} from "lucide-react";



import React from "react"

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
import { Input } from "@/components/ui/input";


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
const StudentList = () => {

    
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
    <div className="py-3">
        <div className="mb-6">
            <h2 className="font-semibold capitalize text-2xl">student list </h2> 
            <p className="text-sm text-slate-500">Manage and monitor all student progress of your intellectual community</p>
        </div>
        <div className="flex justify-between gap-4  ">
               <Input
                  name="search "
                  placeholder="search by name,email,category"
                
                  className="input mb-4 py-6"
                />
                <div className="flex gap-2">
                    <Button
                     className="py-6 border bg-transparent border-black  text-black ">sort by</Button>
                     <Button className="bg-[#ec5b13] py-6 text-white"
                    > <Download/> Export</Button>
                </div>
        </div>

        
<div className="border my-10 bg-white rounded-md py-4">
          <DataTable
        data={enrolledStudent}
        columns={columns}
        loading={false}
       
      />
</div>
    </div>
  )
}

export default StudentList