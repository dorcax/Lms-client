import { ChevronRight } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { communicationLog } from '@/constants/data'
import { CommunicationLogItem } from '@/component/instructor/CommunicationLog'
const Announcement = () => {
    return (
        <div
            className='py-4'>
            <div>
                <h2 className="text-2xl font-semibold capitalize ">broadcast knowledge</h2>
                <p className="text-sm text-slate-500">keep your scholar informed .share update,resources and reminder across the curator</p>
            </div>
            {/* grid  of announcement form 


         */}

            <div className='grid  grid-col-1 lg:grid-cols-3 gap-4 w-full mt-12 items-start '>
                <div className=' bg-white shadow-md col-span-1 p-4 rounded-md'>
                    <h2 className='flex gap-2 items-center font-semibold text-sm capitalize  pb-4'> <span ><ChevronRight className='text-[#ec5b13]' /></span>new announcement </h2>
                    <form className="space-y-6  my-3">

                        {/* Email Field */}
                        <Field className="flex flex-col gap-2">
                            <FieldLabel
                                htmlFor="email"
                                className="uppercase text-slate-500 dark:text-slate-300 text-xs font-semibold"
                            >
                                Target Course
                            </FieldLabel>

                            <div className="relative">


                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className='w-full py-6 border-b-2 border-b-[#ec5b13]'>Advanced technology </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>

                                            <DropdownMenuItem>
                                                Profile

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Billing

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Settings

                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </Field>

                        {/* title Field */}
                        <Field className="">

                            <div className="">
                                <FieldLabel
                                    htmlFor=""
                                    className="uppercase text-slate-500 dark:text-slate-300 mb-2 text-xs font-semibold"
                                >
                                    Title
                                </FieldLabel>



                                <Input
                                    id="title"

                                    placeholder="title "
                                    className="px-4 py-6 border border-slate-200 dark:border-slate-700 border-b-2 border-b-[#ec5b13] rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                />

                            </div>



                        </Field>



                        {/* title Field */}
                        <Field className="">

                            <div className="">
                                <FieldLabel
                                    htmlFor=""
                                    className="uppercase text-slate-500 dark:text-slate-300 text-xs mb-2 font-semibold"
                                >
                                    Message body
                                </FieldLabel>



                                <Textarea
                                    id="title"

                                    placeholder="title "
                                    className="px-4 py-6 border border-slate-200 border-b-2 border-b-[#ec5b13] dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                />

                            </div>



                        </Field>



                        <div className='flex justify-center items-center'>
                            <Button className='bg-[#ec5b13] capitalize py-6  '>publish announcement </Button>
                        </div>


                    </form>

                </div>
                <div className=' col-span-2 '>

                    <section className="space-y-4">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                                🕒 Communication Log
                            </h2>

                            <span className="text-xs bg-gray-100 px-3 py-1 rounded">
                                Total: {communicationLog.total}
                            </span>
                        </div>

                        {/* List */}
                        {communicationLog.logs.map((item) => (
                            <CommunicationLogItem key={item.id} item={item} />
                        ))}

                        {/* Load More */}
                        <div className="pt-6 flex justify-center">
                            <button className="text-sm font-bold text-gray-500 hover:text-primary">
                                Load Archive ↓
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Announcement