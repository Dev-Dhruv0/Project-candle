import React, { useEffect, useState } from "react";

export default function ErrorMessage({ message }) {
  const [errorText, setErrorText] = useState(message);

  useEffect(() => {
    setErrorText(message); // Update errorText when message prop changes
  }, [message]);

  return (
    <div className="error-message">
      {errorText && <p>{errorText}</p>}
    </div>
  );
}
