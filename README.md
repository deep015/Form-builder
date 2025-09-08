# 📝 Dynamic Form Builder

A modern and interactive **Form Builder** web application built with **React, TypeScript, Tailwind CSS, and Zustand**. This tool allows users to **create custom forms dynamically**, reorder fields via drag-and-drop, add validation, and export the form structure as JSON.  

It’s perfect for developers, designers, or anyone who wants to quickly prototype forms without writing repetitive code.

---

## 🚀 Project Description

The **Dynamic Form Builder** enables users to:
- Add different types of form fields like **text, number, password, textarea, date, and file upload**.
- Mark fields as **required** and see **live validation feedback**.
- **Reorder fields** using drag-and-drop functionality.
- **Duplicate fields** (optional future enhancement) to save time.
- Export the form structure as **JSON** for backend integration or storage.

The app is **fully responsive**, providing a professional, clean, and engaging UI with gradient buttons, hover effects, and badges.

---

## ✨ Features

- Add new form fields dynamically.
- Select field type: `text`, `number`, `password`, `textarea`, `date`, `file`.
- Mark fields as required with live validation.
- Drag-and-drop field reordering using `@dnd-kit`.
- Remove existing fields easily.
- Export form structure as **JSON**.
- Responsive design for mobile, tablet, and desktop.
- Modern UI: gradient buttons, hover shadows, field type badges.
- Live preview of field values.
- Reset the entire form with one click.

---

## 📌 Project Workflow

1. **Add New Field**
   - User inputs the label and selects a type.
   - Optionally marks the field as required.
   - Clicks "Add Field" to append it to the form.

2. **Manage Fields**
   - Fields are displayed in a card-style layout.
   - Users can **update values**, **remove fields**, or **drag to reorder**.

3. **Export / Reset**
   - Users can export the form as JSON.
   - Reset the form anytime to start fresh.

4. **Validation**
   - Required fields are highlighted if empty.
   - Live feedback ensures user-friendly interaction.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`
- **Build Tools**: Vite / Create React App
- **Optional Backend**: Can be integrated with Node.js / Express.js for form submission

---

## 🗂️ State Management

The app uses **Zustand** for lightweight and efficient state management. Key state actions include:

- `formFields`: Array storing all added fields.
- `addField()`: Adds a new field.
- `removeField()`: Removes a field by index.
- `updateField()`: Updates field value or type.
- `resetForm()`: Clears all fields.

---

## 📈 Future Enhancements

- **Field Duplication**: Quickly duplicate fields.
- **Conditional Logic**: Show/hide fields based on user input.
- **Form Submission**: Integrate with backend APIs.
- **Multi-Step Forms**: Create wizard-style forms.
- **Save/Load Templates**: Save custom form templates locally or on a server.
- **Additional Field Types**: Radio buttons, checkboxes, sliders, color pickers.
- **Live Preview Mode**: See the final form as end-users will see it.

---

## 🔗 Usage

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/dynamic-form-builder.git
cd dynamic-form-builder


