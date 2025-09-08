import { useState, type ChangeEvent } from "react";
import { useFormStore } from "../store";
import FormFiled from "./FormFiled";

interface NewField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

const FormBuilder = () => {
  const { formFields, addField, removeField, updateField, resetForm } = useFormStore();
  const [newField, setNewField] = useState<NewField>({
    label: "",
    type: "text",
    value: "",
  });

  const handleAddField = () => {
    if (!newField.label) return alert("Field label is required!");
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleFieldUpdate = (index: number, updatedField: NewField) => {
    updateField(index, updatedField);
  };

  const handleFieldRemove = (index: number) => {
    removeField(index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Interactive Form Builder</h1>
      <p className="text-center text-gray-500 mb-6">
        Add custom fields to build your personalized form dynamically.
      </p>

      {/* New Field Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-end">
        <input
          type="text"
          name="label"
          placeholder="Enter field label"
          value={newField.label}
          onChange={handleFieldChange}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <select
          name="type"
          value={newField.type}
          onChange={handleFieldChange}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>
        <button
          type="button"
          onClick={handleAddField}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition font-semibold shadow-lg"
        >
          Add Field
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold shadow-lg"
        >
          Reset Form
        </button>
      </div>

      {/* Form Fields */}
      {formFields.length === 0 ? (
        <p className="text-center text-gray-400">No fields added yet. Start by adding a new field!</p>
      ) : (
        <form className="space-y-4">
          {formFields.map((field, index) => (
            <FormFiled
              key={index}
              index={index}
              field={field}
              onUpdate={handleFieldUpdate}
              onRemove={handleFieldRemove}
            />
          ))}
        </form>
      )}
    </div>
  );
};

export default FormBuilder;
