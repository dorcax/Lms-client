import ToggleItem from '@/component/ToggleItem'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Bell, BotIcon, Gift, Lock, ShieldCheck, User } from 'lucide-react'
import React from 'react'

const Setting = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-6 '>
            <div className='col-span-1 px-6 '>
                <div className='bg-white shadow-md rounded-md p-4 mb-6 flex flex-col justify-center items-center '>
                    <div className='size-30 rounded-full border-4 flex items-center justify-center '>
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className='w-full rounded-full' />
                    </div>
                    <div className='text-center py-2 '>
                        <h2 className='font-bold text-base capitalize'>Dr julian vane</h2>
                        <p className='text-sm text-gray-600'>Change your profile picture</p>
                    </div>
                    <Button className='capitalize text-sm bg-gray-500/50 text-black mt-2'>upload new  avatar</Button>

                </div>
                {/* second option */}
                <div className='bg-gray-200/50 rounded-md p-2'>
                    <ul className='space-y-4'>
                        <li className='flex gap-2 capitalize hover:bg-white hover:shadow-md rounded-md py-2 text-sm hover:text-[#ec5b13]'><User />   profile details</li>
                        <li className=' flex  gap-2 capitalize hover:bg-white hover:shadow-md hover:text-[#ec5b13] rounded-md py-2 text-sm'><Lock />security</li>
                        <li className=' flex gap-2 capitalize hover:bg-white hover:shadow-md hover:text-[#ec5b13] rounded-md py-2 text-sm'><Bell />notification</li>
                    </ul>

                </div>
            </div>
            <div className='col-span-2 space-y-5'>
                {/* profile information */}
                <div className='bg-white shadow-md rounded-md p-5 '>
                    <div className='flex justify-between '>
                        <div className='mb-4'>
                            <h2 className='font-semibold  capitalize text-base'>profile information</h2>
                            <p className='text-sm text-gray-400'>update your public profile and bio</p>
                        </div>
                        <span><BotIcon /></span>
                    </div>
                    {/* form */}
                    <div>
                        <form>
                            <FieldGroup>
                                <div className='flex justify-between gap-3'>
                                    <Field>
                                        <FieldLabel htmlFor="fullName" className='uppercase text-sm text-gray-400'>Full Name</FieldLabel>
                                        <Input
                                            id="email"
                                            type="text"
                                            placeholder="full name"
                                            required
                                            className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="email" className='uppercase text-sm text-gray-400'>Email</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="email"
                                            required
                                            className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </Field>
                                </div>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password" className='uppercase text-sm text-gray-400 '>Password</FieldLabel>

                                    </div>
                                    <Input id="password" type="password" placeholder='password' required className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" />
                                </Field>

                            </FieldGroup>
                            <div className='flex justify-end my-4'>
                                <Button className='bg-[#ec5b13] capitalize text-sm '>save profile changes</Button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* password change */}
                <div className='bg-white shadow-md rounded-md p-5 '>
                    <div className='flex justify-between '>
                        <div className='mb-4'>
                            <h2 className='font-semibold  capitalize text-base'>security & password</h2>
                            <p className='text-sm text-gray-400'>Ensure your account is using long and random password </p>
                        </div>
                        <span><ShieldCheck className='text-[#ec5b13]' /></span>
                    </div>
                    {/* form */}
                    <div>
                        <form>
                            <FieldGroup>

                                <Field>
                                    <FieldLabel htmlFor="fullName" className='uppercase text-sm text-gray-400'>current password </FieldLabel>
                                    <Input
                                        id="email"
                                        type="password"
                                        placeholder="password"
                                        required
                                        className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    />
                                </Field>



                                <div className='
                               flex justify-between gap-3'>
                                    <Field>

                                        <FieldLabel htmlFor="password" className='uppercase text-sm text-gray-400 '>new Password</FieldLabel>


                                        <Input id="password" type="password" placeholder='password' required className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" />
                                    </Field>
                                    <Field>

                                        <FieldLabel htmlFor="password" className='uppercase text-sm text-gray-400 '>confirm Password</FieldLabel>


                                        <Input id="password" type="password" placeholder=' confirm password' required className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" />
                                    </Field>


                                </div>
                            </FieldGroup>
                            <div className='flex justify-end my-4'>
                                <Button className=' bg-transparent text-[#ec5b13] capitalize text-sm '>update password</Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* notification */}

                <div className='bg-white shadow-md rounded-md p-5 '>
                    <div className='flex justify-between '>
                        <div className='mb-4'>
                            <h2 className='font-semibold  capitalize text-base'>notification preference </h2>
                            <p className='text-sm text-gray-400'>control how and when you want to be notified </p>
                        </div>
                        <span><Bell /></span>
                    </div>
                    {/* notification preference  */}
                    <div className="space-y-4">
                        <ToggleItem
                            title="New Student Enrolledment"
                            description="notify me when a new student join my course ."
                            defaultChecked
                        />

                        <ToggleItem
                            title="Course Review "
                            description="weekly summary of students feedback "
                         
                        />

                        <ToggleItem
                            title="Earning Report "
                            description="monthly detailed of revenue breakdown."
                               defaultChecked
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Setting