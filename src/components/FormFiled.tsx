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
        ? Array.from(e.target.files).map((file) => file.name).join(",")
        : "",
    });
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block mb-2 text-lg font-medium text-gray-700">{field.label}</label>

      {field.type === "textarea" ? (
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={field.value}
          onChange={handleChange}
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <button
        type="button"
        onClick={() => onRemove(index)}
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default FormFiled;
