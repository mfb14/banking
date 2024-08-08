import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Label } from '@/components/ui/label';
import { Control, Form } from 'react-hook-form';
import {z} from 'zod'
interface CustomInput{
    control: Control<z.infer<typeof formSchema>>,
    name: string,
    label: string,
    placeholder: string
}
const CustomInput = ({control,name,label,placeholder}:CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div>
        <FormLabel className="form-label">
            {label}
        </FormLabel>
        <div className="flex w-full flex-col">
            <FormControl className="">
                <Input 
                    placeholder={placeholder}
                    className="input-class"
                    type={name==="password"?"password":"text"}
                    {...field}
                />
            </FormControl>
            <FormMessage className="form-message mt-2"/>
        </div>
      </div>
      
    )}
  />
  )
}

export default CustomInput