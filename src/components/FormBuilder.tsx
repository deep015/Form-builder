import { useState } from "react";
import { useFormStore } from "../store";

interface NewFields {
    label:string,
    type:"text" | "number" | "password" | "textarea" | "date" |"file",
    value:string
}
const FormBuilder = () => {
    const {formFields,addField,removeField,updateField,resetForm} = useFormStore();
    const [newFields, setNewFields] = useState<NewFields>({
        label:"",
        type:"text",
        value:"",

    });
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
            Form Builder
        </h1>
             <div className="flex flex-col mb-6">
                <input type="text" name="label"
                placeholder="Field Label" value={newFields.label}
               // onChange={handleFieldChange} 
                className="p-2 mb-2 border border-gray-300 rounded"/>
                <select name="type" id=""
                value={newFields.type} 
              //  onChange={handlChange}
                className="p-2 mb-2 border border-gray-300 rounded
                focus:outline-none focus:ring-blue-500">
                    <option value="text">Text</option>
                    <option value="number">number</option>
                    <option value="textarea">Textarea</option>
                    <option value="date">Date</option>
                    <option value="field">Field</option>
                </select>
                <div className="flex-justify-between items-center">
                    <button type="button"
                   // onClick={handleAddField}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
                    transition duration-3002">Add Field</button>
                    <button type="button"
                     //onClick={handleResetForm} 
                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                        Reset Form
                    </button>
                </div>
            </div>
            <form action="">
                {/*
                    formFields.map((field,index)=>(
                        <FormField 
                        key={index} field={field} 
                        onUpdate={handleFieldUpdate}
                        onRemove={handleRemoveField}

                        />
                    ))*/
                }
            </form>
    </div>
  )
}

export default FormBuilder