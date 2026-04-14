import CustomInfoDialog from "@/component/common/customInfoDialog"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CloudUpload } from "lucide-react"
import { useRef } from "react"
import { useForm } from "react-hook-form"

const CreateCourseFlow = () => {
  const fileInputRef = useRef(null)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <CustomInfoDialog title="create new course " className="md:max-w-2xl px-10 py-6 overflow-y-auto max-h-[85vh] overflow-y-auto overflow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Title */}
        <Field className="mb-4">
          <FieldLabel className="text-sm font-semibold">
            Course Title
          </FieldLabel>

          <Input
            type="text"
            placeholder="course title"
            className="px-4 py-6"
            {...register("title", { required: "Title is required" })}
          />

          {errors.title && <FieldError errors={[errors.title]} />}
        </Field>


        {/* Description */}
        <Field className="mb-4">
          <FieldLabel className="text-sm font-semibold">
            Course Description
          </FieldLabel>

          <Textarea
            placeholder="course description"
            className="px-4 py-6"
            {...register("description", { required: "Description is required" })}
          />

          {errors.description && <FieldError errors={[errors.description]} />}
        </Field>


        {/* Category & Difficulty */}
        <div className="flex gap-4 w-full mb-4">

          <div className="w-full">
            <Field>
              <FieldLabel>Category</FieldLabel>

              <Select>
                <SelectTrigger className="py-6 w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BEGINNER">BEGINNER</SelectItem>
                    <SelectItem value="INTERMEDIATE">INTERMEDIATE</SelectItem>
                    <SelectItem value="ADVANCED">ADVANCED</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.category && <FieldError errors={[errors.category]} />}
            </Field>
          </div>


          <div className="w-full">
            <Field>
              <FieldLabel>Difficulty</FieldLabel>

              <Select>
                <SelectTrigger className="py-6">
                  <SelectValue placeholder="Select difficulty level" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BEGINNER">BEGINNER</SelectItem>
                    <SelectItem value="INTERMEDIATE">INTERMEDIATE</SelectItem>
                    <SelectItem value="ADVANCED">ADVANCED</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.difficulty && <FieldError errors={[errors.difficulty]} />}
            </Field>
          </div>

        </div>


        {/* Price */}
        <Field className="mb-4">
          <FieldLabel className="text-sm font-semibold">
            Course Price
          </FieldLabel>

          <Input
            type="number"
            placeholder="Enter course price"
            className="px-4 py-6"
            {...register("price", { required: "Price is required" })}
          />

          {errors.price && <FieldError errors={[errors.price]} />}
        </Field>


        <Field className="mb-6">
          <FieldLabel className="text-sm font-semibold">
            Thumbnail
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
            type="button"

            className="px-4 py-6 border border-slate-300 rounded-md hover:bg-slate-100"
          >
            Save Draft
          </Button>

          <Button
            type="submit"
            className="px-4 py-6 bg-[#ec5b13] text-white rounded-md"
          >
            Publish Course
          </Button>

        </div>

      </form>
    </CustomInfoDialog>
  )
}

export default CreateCourseFlow