import {useState, useEffect} from "react"


export default function useBatteryStatus() {
    const [status, setStatus] = useState({level:null, charging:null, dischargingTime:null, chargingTime: null, error:null})

  useEffect(() => {
  if (typeof navigator.getBattery === 'undefined') {
    setStatus(prev => ({ ...prev, error: new Error("unsupported") }));
    return;
  }

  let battery = null;

  const handleChange = () => {
    setStatus({
      level: battery.level,
      charging: battery.charging,
      chargingTime: battery.chargingTime,
      dischargingTime: battery.dischargingTime,
      error: null,
    });
  };

  const getBatteryInfo = async () => {
    try {
      battery = await navigator.getBattery();

      handleChange();

      ["levelchange","chargingchange","chargingtimechange","dischargingtimechange"].forEach(event=>{
        battery.addEventListener(event,handleChange)
      })
    } catch (error) {
      setStatus(prev => ({ ...prev, error }));
    }
  };

  getBatteryInfo();

  return () => {
    if (battery) {
      ["levelchange","chargingchange","chargingtimechange","dischargingtimechange"].forEach(event=>{
        battery.removeEventListener(event,handleChange)
      })
    }
  };
}, []);

    return status;
}