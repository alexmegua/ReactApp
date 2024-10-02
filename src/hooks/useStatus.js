import { useState } from 'react';

const useStatus = (initialStatus) => {
  const [status, setStatus] = useState(initialStatus);

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'Offline' ? 'Online' : 'Offline'));
  };

  return [status, toggleStatus];
};

export default useStatus;

