import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-premium-light-gray ml-1">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-xl border border-premium-medium-gray/30 bg-premium-charcoal/50 px-4 py-3 text-premium-white placeholder-premium-medium-gray transition-all focus:border-premium-white/50 focus:ring-2 focus:ring-premium-white/10 outline-none ${className}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};
