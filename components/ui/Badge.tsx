import React, { ReactNode } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  text?: string;
  icon?: ReactNode;
  variant?: "default" | "orange" | "red" | "accent" | "glow" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  text,
  icon,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-[#08080a] border-zinc-800/90 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]",
    orange: "bg-[#08080a] border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    red: "bg-[#08080a] border-red-500/30 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    glow: "bg-[#08080a] border-orange-500/40 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)]",
    accent: "bg-gradient-to-r from-orange-600 to-red-600 border-white/20 text-white font-bold",
    outline: "bg-transparent border-zinc-800 text-zinc-300 hover:border-white/30",
    dark: "bg-zinc-950/90 border-zinc-800 text-zinc-300",
  };

  const sizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
    sm: "px-3 py-1 text-[10px] gap-1.5",
    md: "px-4 py-1.5 text-xs gap-2",
    lg: "px-5 py-2 text-sm gap-2.5",
  };

  const content = children || text;

  return (
    <div
      className={`inline-flex items-center rounded-full border font-bold tracking-wider uppercase backdrop-blur-md transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center text-orange-500">{icon}</span>}
      {content && <span className="text-orange-500 font-extrabold">{content}</span>}
    </div>
  );
}