export * from "./hooks/useForm"
export * from "./hooks/useOnline"
export * from "./hooks/useDarkMode"





//modify with CSS
// body.dark {
//     background-color: #121212;
//     color: #ffffff;
//   }
  
//   button {
//     padding: 10px 20px;
//     background-color: #6200ea;
//     color: white;
//     border: none;
//     cursor: pointer;
//   }



// for all three online form darkmode
// import { useForm, useOnline, useDarkMode } from 'your-package-name';

// const MyComponent = () => {
//   const [formData, handleChange, resetForm] = useForm({ name: '' });
//   const isOnline = useOnline();
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

//   return (
//     <div>
//       <button onClick={toggleDarkMode}>
//         {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <button onClick={resetForm}>Reset</button>
//       <p>{isOnline ? 'Online' : 'Offline'}</p>
//     </div>
//   );
// };