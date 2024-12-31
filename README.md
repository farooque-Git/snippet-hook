
# Hocrux (A Custom Hook)

A simple and reusable custom hook for managing form state in React. The useForm hook allows you to easily manage form data, handle input changes, and reset the form state.

# Installation 
You can install the package via npm or yarn:


###  Using npm

To deploy this package run

```bash
  npm i hocrux
```

###  Using yarn

To deploy this package run

```bash
  yarn add hocrux
```


###  Usage
To use the useForm hook in your React component, follow these steps:

Import the hook:

```bash
  import { useForm } from 'hocrux';

```

Use the hook within your component
```bash
  import React from 'react';
import { useForm } from 'hocrux';

const MyForm = () => {
  const [formData, handleChange, resetForm] = useForm({
    username: '',
    email: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData); // Process the form data
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


```

## API

```bash
  useForm(initialValues: object)
```

#### The useForm hook takes an object containing the initial values for the form fields and returns an array with three elements:

formData: The current state of the form (an object containing the form field values).

handleChange: A function to handle input changes. It updates the form state when an input field changes.

resetForm: A function to reset the form to its initial values.

## Parameters:

initialValues: An object containing the initial values for the form fields 
```bash
 (e.g., { username: '', email: '' })
```

## Returns:

### An array containing:

formData: The current state of the form data.

handleChange: A function to update the form state on input change.

resetForm: A function to reset the form to its initial values.


## License

MIT License © [Farooque Ali](https://portfolio-main-virid-six.vercel.app/)

## Key Improvements:

Professional tone: Adjusted phrasing and structure to maintain a clear, professional, and user-friendly tone.

Formatting: Improved syntax highlighting and consistency across code blocks.

License section: Updated the license section to reflect the MIT License. Replace [Farooque Ali](https://portfolio-main-virid-six.vercel.app/)  with your actual name for copyright purposes.

## Next Steps:

Testing: Ensure that the README provides all the necessary information for users to get started with your package.

Customization: Review any other details that might need adjusting, such as additional features or examples.


### Let me know if you need further modifications!
