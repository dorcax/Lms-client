import React, { useState } from "react"
import {
  Menu,
  X,
  PlusCircle,
  ChevronDown,
  ChevronUp,

  PlayCircle,
  FileText,
  Trash2,
  MoreVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePopUpContext } from "@/context/PopUpContext"
import CreateModule from "./CreateModule"
import CreateLesson from "./CreateLesson"

const CourseBuilderPage = () => {
    const {openDialog} = usePopUpContext()
      const [open, setOpen] = useState(false)
  return (
    <main className="flex-1 flex flex-col min-w-0">

     

      {/* Content */}
      <div className="py-8 px-4 max-w-5xl mx-auto w-full">

        {/* Header */}

           <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <Stat title="Total Duration" value="4h 45m" />
          <Stat title="Lesson Count" value="8 Units" />
          <Stat title="Estimated Level" value="Advanced" />

        </div>
      

        {/* Modules */}
        <div className="space-y-6">

          {/* MODULE 1 */}
          <section>
            <div className="rounded-xl overflow-hidden shadow">

              {/* Module Header */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-50">

                <div className="flex items-center gap-4">
                  {/* <DragHandleHorizontal className="text-gray-400" /> */}

                  <div>
                    <div className="text-xs font-bold text-gray-500">
                      Module 01 • 3 Lessons
                    </div>

                    <h3 className="text-xl font-bold">
                      Introduction to Figma
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="text-blue-600 bg-transparent" onClick={() => openDialog(() => <CreateLesson />)}>
                    <PlusCircle  className="size-6"/>
                  </Button>

                  <Button className="bg-transparent text-gray-500" onClick={() => setOpen(!open)}>
                    <ChevronDown  className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </Button>
                </div>

              </div>

              {/* Lessons */}
              <div className="p-2 space-y-2">

                {open &&(
                   <div>
                     <LessonItem
                  icon={<PlayCircle className="text-blue-500" />}
                  title="Interface Fundamentals & Setup"
                  subtitle="Video • 12:45"
                />

                <LessonItem
                  icon={<FileText className="text-gray-500" />}
                  title="Keyboard Shortcuts Cheat Sheet"
                  subtitle="Text • 5 min read"
                />
                   </div>
                )}

              </div>
            </div>
          </section>

          {/* MODULE 2 */}
          <section>
            <div className="rounded-xl overflow-hidden shadow">

              <div className="flex items-center justify-between px-6 py-3 bg-slate-50">

                <div className="flex items-center gap-4">
           

                  <div>
                    <div className="text-xs font-bold text-gray-500">
                      Module 02 • 5 Lessons
                    </div>

                    <h3 className="text-xl font-bold">
                      Design Systems & Tokens
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="text-blue-600 bg-transparent" onClick={() => openDialog(()=><CreateLesson />)}>
                    <PlusCircle  className="size-6"/>
                  </Button> 

                   <Button className="bg-transparent text-gray-500" onClick={() => setOpen(!open)}>
                    <ChevronDown  className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </Button>
                </div>

              </div>

              <div className="p-2 space-y-2">

           {
            open &&<div>
              <LessonItem
                icon={<PlayCircle className="text-blue-500" />}
                title="Atomic Design Principles"
                subtitle="Video • 18:20"
              />

              <LessonItem
                icon={<PlayCircle className="text-blue-500" />}
                title="Creating Scalable Color Systems"
                subtitle="Video • 24:10"
              />
            </div>
           }

              </div>

            </div>
          </section>

          {/* ADD MODULE */}
        <div className="flex items-center justify-center">
              < Button className="w-[200px] py-6 bg-[#ec5b13] rounded-xl flex justify-center items-center gap-2" onClick={()=>openDialog(()=><CreateModule />)}>
            <PlusCircle size={30} />
            Add New Module
          </Button>
        </div>

        </div>

        {/* Footer Stats */}
     

      </div>

    </main>
  )
}

/* ---------------- COMPONENTS ---------------- */

const LessonItem = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg">

      <div className="flex items-center gap-4">

        {/* <DragHandleHorizontal className="text-gray-300" /> */}

        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>

      </div>

      <button className="text-red-500">
        <Trash2 size={16} />
      </button>

    </div>
  )
}

const Stat = ({ title, value }) => {
  return (
    <div className="p-6 rounded-xl bg-slate-50">
      <p className="text-xs font-bold text-gray-500 uppercase">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default CourseBuilderPage