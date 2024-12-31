// src/useOnline.ts
import { useState, useEffect } from 'react';

const useOnline = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnline;




// onPublish
// import React from 'react';
// import { useOnline } from 'use-online-hook';

// const MyComponent: React.FC = () => {
//   const isOnline = useOnline();

//   return (
//     <div>
//       {isOnline ? <p>Snippet Online</p> : <p>Snippet offline.</p>}
//     </div>
//   );
// };

// export default MyComponent;
