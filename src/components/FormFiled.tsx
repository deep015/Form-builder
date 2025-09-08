import type React from "react";

interface FormFiledProps {
  field: {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "date" | "file";
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updateField: {
      label: string;
      type: "text" | "number" | "password" | "textarea" | "date" | "file";
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormFiled: React.FC<FormFiledProps> = ({ field, index, onUpdate, onRemove }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(index, {
      ...field,
      value: e.target.files
        ? Array.from(e.target.files).map((file) => file.name).join(", ")
        : "",
    });
  };

  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition relative bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-lg font-semibold text-gray-700">{field.label}</label>
        <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{field.type}</span>
      </div>

      {field.type === "textarea" ? (
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={field.value}
          onChange={handleChange}
          placeholder={`Enter ${field.label}`}
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      ) : (
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder={`Enter ${field.label}`}
        />
      )}

      <p className="mt-1 text-gray-400 text-sm">
        {field.value ? `Current Value: ${field.value}` : "No value yet"}
      </p>

      <button
        type="button"
        onClick={() => onRemove(index)}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm"
      >
        Remove Field
      </button>
    </div>
  );
};

export default FormFiled;
