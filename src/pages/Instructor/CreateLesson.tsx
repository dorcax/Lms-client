import CustomInfoDialog from '@/component/common/customInfoDialog'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CloudUpload } from 'lucide-react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'


const CreateLesson = () => {
    const fileInputRef = useRef(null)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = () => {
        console.log("eee")
    }
    return (
        <CustomInfoDialog title="create lesson" description="Create a new lesson for your module">
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Title */}
                <Field className="mb-4">
                    <FieldLabel className="text-sm font-semibold">
                        Lesson Title
                    </FieldLabel>

                    <Input
                        type="text"
                        placeholder="lesson title"
                        className="px-4 py-6"
                        {...register("title", { required: "Title is required" })}
                    />

                    {errors.title && <FieldError errors={[errors.title]} />}
                </Field>





                {/* lesson type */}


                <div className="w-full mb-4">
                    <Field>
                        <FieldLabel>Lesson Type</FieldLabel>

                        <Select>
                            <SelectTrigger className="py-6 w-full">
                                <SelectValue placeholder="Select lesson type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="VIDEO">Video</SelectItem>
                                    <SelectItem value="ARTICLE">Article</SelectItem>
                                    <SelectItem value="QUIZ">Quiz</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {errors.category && <FieldError errors={[errors.category]} />}
                    </Field>
                </div>

                <Field className="mb-6">
                    <FieldLabel className="text-sm font-semibold">
                        Lesson video
                    </FieldLabel>

                    {/* hidden input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        className="hidden"
                        {...register("thumbnailUrl", { required: "Thumbnail is required" })}
                    />

                    {/* upload box */}
                    <div
                        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                        onClick={() => fileInputRef.current?.click()}

                    >
                        <CloudUpload className="w-10 h-10 text-[#ec5b13]" />

                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <span className="font-semibold text-primary pr-2">
                                Click to upload
                            </span>
                            or drag and drop
                        </p>

                        <p className="text-xs text-slate-400">
                            PNG, JPG, WEBP
                        </p>
                    </div>

                    {errors.thumbnailUrl && (
                        <FieldError errors={[errors.thumbnailUrl]} />
                    )}
                </Field>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">

                    <Button
                        type="button"
                        className="px-4 py-6 border rounded-md bg-slate-100 text-gray-700"
                    >
                        Cancel
                    </Button>



                    <Button
                        type="submit"
                        className="px-4 py-6 bg-[#ec5b13] capitalize text-white rounded-md"
                    >
                        create lesson
                    </Button>

                </div>

            </form>
        </CustomInfoDialog>
    )
}

export default CreateLesson