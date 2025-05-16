import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "custom";
  size?: "sm" | "md" | "lg" | "custom";
  className?: string;
  buttonStyle?: string;
  textStyle?: string;
  textColor?: string;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  className = "",
  buttonStyle = "",
  textStyle = "",
  textColor = "",
  ...rest
}) => {
  const getSizeClass = (s: ButtonProps["size"]) => {
    if (s === "sm") return "px-4 py-2";
    if (s === "lg") return "px-8 py-4";
    if (s === "custom") return "";
    return "px-6 py-3"; 
  };

  const getVariantClass = (v: ButtonProps["variant"]) => {
    if (v === "secondary") return "bg-white";
    if (v === "outline") return "border border-white bg-transparent";
    if (v === "custom") return "";
    return "bg-[#ACEF6A]"; 
  };

  const getTextColor = (v: ButtonProps["variant"], customColor: string) => {
    if (customColor) return customColor;
    if (v === "outline") return "text-white";
    return "text-[#12360A]";
  };

  const sizeClasses = size === "custom" ? "" : getSizeClass(size);
  const variantClasses = variant === "custom" ? "" : getVariantClass(variant);
  const textColorClass = textColor ? `text-${textColor}` : getTextColor(variant, "");

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${variant !== "custom" ? "rounded-full" : ""} items-center justify-center ${sizeClasses} ${variantClasses} ${className} ${buttonStyle}`}
      {...rest}
    >
      <Text className={`${variant !== "custom" ? "font-semibold" : ""} ${textColorClass} ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;