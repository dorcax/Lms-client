
import { Button } from "@/components/ui/button";
import CourseCard from "../../component/instructor/CourseCard";
import { courseList, instructorCourses } from "../../constants/data";
import { Search, Plus, LayoutGrid, List, Filter } from "lucide-react";
import DataTable from "@/components/ui/data-table";
import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Ban,
  CircleCheck,
  CircleEllipsis,
  MoreHorizontal,
} from "lucide-react";
import React from "react";





import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateCourseFlow from "./CreateCourseFlow";
import { usePopUpContext } from "@/context/PopUpContext";
import { Link } from "react-router-dom";



export type CourseList = {
  id: number;
  title: string;
  image: string;
  category: string;
  modules: number;
  lessons: number;
  status: string;
  instructor: string;

};
const CoursesPage = () => {
  const { openDialog } = usePopUpContext()


  const columns = React.useMemo<ColumnDef<CourseList>[]>(
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
        accessorKey: "courseTitle ",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
            className="capitalize"
          >
            Course Title <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2 ">
            <div className="w-24 ">
              <img
                src={row.original.image}
                alt={row.original.title}
                className="w-22 h-14 rounded-md  object-cover"
              />
            </div>
            <span className=" text-sm  text-wrap max-w-[100px] ">{row.original.title}</span>
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            Category <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div className="font-medium border rounded-full bg-orange-100 p-2  text-sm">{row.getValue("category")}</div>,
      },

      {
        accessorKey: "instructor",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            Instructor <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div className="font-normal text-wrap max-w-[100px]">{row.getValue("instructor")}</div>,
      },
      {
        accessorKey: "modules",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            Modules  <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div className="font-normal ">{row.getValue("modules")}</div>,
      },
      {
        accessorKey: "lessons",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            Lessons <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => <div>{row.getValue("lessons")}</div>,
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
              <DropdownMenuItem>
                <Link to={`/dashboard/instructor/courses/${row.original.id}`}>
                  Manage Course
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Edit course</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete course</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  return (
    <main className="pt-4 pb-12     max-w-7xl">

      {/* Header */}
      <div className="flex justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold mb-1"> Courses</h2>
          <p className="text-slate-700 text-sm">
            Manage all courses,modules and lessons .
          </p>
        </div>

        <Button className="flex items-center gap-2 bg-[#ec5b13]  text-white p-6  rounded-xl" onClick={() =>
          openDialog(() => <CreateCourseFlow />)
        }>
          <Plus />
          Create Course
        </Button>
      </div>

      {/* Search */}
      <div className="bg-surface-container-low  rounded-2xl mb-8 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-secondary" size={18} />
          <input
            className="w-full pl-10 py-2 rounded-xl border"
            placeholder="Search..."
          />
        </div>

        <button className="flex items-center gap-2 px-4 border rounded-xl">
          <Filter size={16} />
          Filter
        </button>
      </div>


      <div className="border my-10 bg-white rounded-md py-4 overflow-x-auto">
        <DataTable
          data={courseList}
          columns={columns}
          loading={false}
        // search={handleSearch}
        // searchQuery={query}
        />
      </div>
    </main>
  );
};

export default CoursesPage;