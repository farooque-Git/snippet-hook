import { useState } from 'react';

interface UseFormProps<T> {
  initialValues: T;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const useForm = <T extends Record<string, any>>({
  initialValues,
}: UseFormProps<T>): [
  T,
  (event: ChangeEvent) => void,
  () => void
] => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return [values, handleChange, resetForm];
};

export {useForm};


// import useForm from 'your-package-name';

// const MyFormComponent = () => {
//   const [formValues, handleInputChange, resetForm] = useForm({
//     initialValues: { name: '', email: '' },
//   });

//   const handleSubmit = () => {
//     console.log(formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="name"
//         value={formValues.name}
//         onChange={handleInputChange}
//       />
//       <input
//         name="email"
//         value={formValues.email}
//         onChange={handleInputChange}
//       />
//       <button type="button" onClick={resetForm}>Reset</button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
