
import React, { useEffect, useRef } from 'react';
import { createIcons, icons } from 'lucide';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      // Small delay to ensure React has updated the DOM
      createIcons({
        icons,
        nameAttr: 'data-lucide',
        attrs: {
          class: className,
          width: size,
          height: size,
        },
      });
    }
  }, [name, className, size]);

  return <span ref={iconRef} data-lucide={name.toLowerCase()}></span>;
};

export default Icon;
