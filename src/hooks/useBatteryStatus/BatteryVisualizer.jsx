import React from "react";
import useBatteryStatus from "./useBatteryStatus";
import "./BatteryVisualizer.css";

export default function BatteryVisualizer() {
  const { level, charging, chargingTime, dischargingTime, error } = useBatteryStatus();

  if (error) {
    return <p className="error-msg">⚠️ Battery API not supported in this browser</p>;
  }

  const batteryPercentage = level !== null ? Math.floor(level * 100) : 0;

  const formatTime = (time) => {
    if (time === Infinity) return "∞";
    if (!time || isNaN(time)) return "--";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="battery-container">
      <div className={`battery ${charging ? "charging" : ""}`}>
        <div
          className="battery-level"
          style={{ width: `${batteryPercentage}%` }}
        ></div>
        {charging && <div className="charging-icon">⚡</div>}
      </div>
      <div className="battery-info">
        <p>🔋 Level: <strong>{batteryPercentage}%</strong></p>
        <p>⚡ Charging: <strong>{charging ? "Yes" : "No"}</strong></p>
        <p>🔌 Charging Time: <strong>{formatTime(chargingTime)}</strong></p>
        <p>🔻 Discharging Time: <strong>{formatTime(dischargingTime)}</strong></p>
      </div>
    </div>
  );
}