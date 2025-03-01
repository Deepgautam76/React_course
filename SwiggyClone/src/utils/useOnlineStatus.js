import { useEffect, useState } from "react";

/**
 * This hooks use for the checking the status
 * of the online or offline
 * (using window object addEventListener(offline,online))
 */
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      alert("You are offline ❌");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      alert("You are online 🟢");
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
