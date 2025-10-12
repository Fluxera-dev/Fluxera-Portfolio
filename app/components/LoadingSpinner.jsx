"use client"

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-spin">
          <div className="absolute inset-1 rounded-full bg-background"></div>
        </div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-75 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
