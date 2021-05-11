import React from "react";
import * as Feather from "react-icons/fi";

const FeatherIcon = ({ iconName, size, color }) => {
  const Icon = Feather[iconName];
  if (!iconName) return null;
  return <Icon size={size} style={{ color: color }} />;
};

export default FeatherIcon;
