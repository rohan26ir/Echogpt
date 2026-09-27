import React, { ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  href?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "pill" | "gradient" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  text,
  href,
  icon,
  rightIcon,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  target,
  rel,
  onClick,
  ...props
}: ButtonProps) {
  const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-600/30 border border-orange-500/30 active:scale-[0.98]",
    secondary:
      "bg-zinc-950/90 border border-orange-500/40 hover:border-orange-500 text-white shadow-md shadow-orange-950/20 active:scale-[0.98]",
    outline:
      "bg-transparent border border-white/15 hover:border-white/35 text-zinc-200 hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border border-transparent active:scale-[0.98]",
    dark:
      "bg-black/80 border border-white/10 hover:border-orange-500/40 text-white shadow-xl hover:shadow-orange-500/10 active:scale-[0.98]",
    pill:
      "bg-white/10 hover:bg-zinc-200 text-black border border-transparent active:scale-[0.98]",
    gradient:
      "bg-gradient-to-r from-zinc-900 to-black border border-orange-500/40 hover:border-orange-500 text-white shadow-[0_0_20px_rgba(255,87,34,0.25)] hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] active:scale-[0.98]",
    red:
      "bg-zinc-950 border border-white/15 hover:border-red-500/50 text-red-500 shadow-xl active:scale-[0.98]",
  };

  const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5 font-medium",
    md: "px-5 py-2.5 text-sm rounded-full gap-2 font-semibold",
    lg: "px-7 py-3.5 text-base rounded-full gap-2.5 font-bold",
  };

  const disabledStyles = disabled
    ? "opacity-50 pointer-events-none cursor-not-allowed"
    : "cursor-pointer";

  const content = (
    <>
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children || text}
      {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
    </>
  );

  const combinedClasses = `inline-flex items-center justify-center transition-all duration-300 select-none group ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
