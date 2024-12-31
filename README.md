# Custom Hook

A simple and reusable custom hook for managing form state in React. This hook allows you to handle form data, input changes, and form resets in a straightforward way.

## Installation

You can install the package via npm or yarn:

### Using npm:
```bash
npm install hocrux
yarn add hocrux

 Usage
Here’s how to use the useForm hook in your React project:

1. Import the hook:
tsx
Copy code
import { useForm } from 'custom-hook';
2. Use the hook in your component:
tsx
Copy code
import React from 'react';
import { useForm } from 'custom-hook';

const MyForm = () => {
  const [formData, handleChange, resetForm] = useForm({
    username: '',
    email: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
  );
};
3. Explanation:
useForm returns:
formData: The current form data.
handleChange: A function to update form data.
resetForm: A function to reset the form to its initial values.
API
useForm(initialValues: object)
initialValues: An object with the initial values for the form fields.
Returns an array with three elements:

formData: The current state of the form.
handleChange: A function to update the form state when an input changes.
resetForm: A function to reset the form to its initial values.
License
MIT © [Your Name]

vbnet
Copy code

---

### Customization Tips:
1. **Package Name**: Replace `custom-hook` with the actual name if you decide to rename your package.
2. **Description**: Update the description section to better explain your package's functionality.
3. **License**: If you haven't selected a license yet, the default is `MIT`, but feel free to adjust it.

Let me know if you need further modifications!