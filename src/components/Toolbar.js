import React from "react";
import AlertButton from "./AlertButton";

function Toolbar() {
  const buttons = [
    { id: "download", message: "Downloading!", label: "Download File" },
    { id: "share", message: "Sharing!", label: "Share Document" },
    { id: "upload", message: "Uploading Photo", label: "Upload Photo" },
  ];

  return (
    <div>
      {buttons.map((b) => (
        <AlertButton key={b.id} message={b.message}>
          {b.label}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
