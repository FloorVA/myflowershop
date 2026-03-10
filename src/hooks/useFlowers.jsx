import { useState } from "react";

const images = Object.values(
  import.meta.glob("/src/assets/images/flowers/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

export function useFlowers() {
  const [selected, setSelected] = useState(new Set());

  const toggleFlower = (index) => {
    setSelected((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }

      return newSet;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const hasSelection = selected.size > 0;

  return {
    images,
    selected,
    toggleFlower,
    clearSelection,
    hasSelection,
  };
}
