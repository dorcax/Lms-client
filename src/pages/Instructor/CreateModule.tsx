import CustomInfoDialog from '@/component/common/customInfoDialog'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { useForm } from 'react-hook-form'

const CreateModule = () => {
    const  {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit=()=>{
        console.log("eee")
    }
  return (
    <CustomInfoDialog title='Create Module' description='Create a new module for your course'>
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* Title */}
        <Field className="mb-4">
          <FieldLabel className="text-sm font-normal text-gray-700">
            Module Title
          </FieldLabel>

          <Input
            type="text"
            placeholder="module title"
            className="px-4 py-6"
            {...register("title", { required: "Title is required" })}
          />

          {errors.title && <FieldError errors={[errors.title]} />}
        </Field>


        {/* Description */}
        <Field className="mb-4">
          <FieldLabel className="text-sm font-normal text-gray-700">
            Module Description
          </FieldLabel>

          <Textarea
            placeholder="module description"
            className="px-4 py-6"
            {...register("description", { required: "Description is required" })}
          />

          {errors.description && <FieldError errors={[errors.description]} />}
        </Field>
        {/* Buttons */}
        <div className='flex justify-end'>
              <Button
            type="submit"
            className="px-4 py-6 bg-[#ec5b13] text-white rounded-md capitalize"
          >
            create module
          </Button>
        </div>

      
      </form>
    </CustomInfoDialog>
  )
}

export default CreateModule