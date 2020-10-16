import React, { useState } from "react";

export default DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
        />
    );
};