import { useEffect, useState } from 'react';

const Usefetch = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        console.log("Elapsed seconds:", prev + 1);
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Elapsed seconds: {seconds}</div>; // ✅ now it's used
};

export default Usefetch;
