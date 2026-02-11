// Import useSelector to read data from Redux store
import { useSelector } from 'react-redux';

// Create ThemeProvider component which will wrap whole app
export default function ThemeProvider({ children }) {

  // Get theme value (light/dark) from Redux store
  const { theme } = useSelector((state) => state.theme);

  return (
    // Apply theme class (light or dark) to main parent div
    // Tailwind dark mode works using this class
    <div className={theme}>

      {/* 
        This inner div controls actual colors of app 
        bg-white → light mode background
        text-gray-700 → light mode text
        dark:text-gray-200 → dark mode text
        dark:bg-[rgb(16,23,42)] → dark mode background
      */}
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        
        {/* children means all components/pages inside ThemeProvider */}
        {children}

      </div>
    </div>
  );
}
