import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {

  // Check initial preference from localStorage or default to system preference
  const storedPreference = localStorage.getItem('dark-mode');
  const prefersDarkMode = storedPreference ? JSON.parse(storedPreference) : window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the user's preference to localStorage
      localStorage.setItem('dark-mode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // theme Apply
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;




// on production
// import React from 'react';
// import { useDarkMode } from 'use-dark-mode-hook';

// const MyComponent: React.FC = () => {
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

//   return (
//     <div>
//       <button onClick={toggleDarkMode}>
//         {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
//     </div>
//   );
// };

// export default MyComponent;



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
