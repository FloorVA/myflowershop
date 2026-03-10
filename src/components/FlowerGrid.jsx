import styles from "./FlowerGrid.module.css";

export default function FlowerGrid({ images, selected, toggleFlower }) {
  return (
    <div className={styles.flowerGrid}>
      {images.map((img, i) => {
        const isSelected = selected.has(i);

        return (
          <div
            key={i}
            className={`${styles.flowerItem} ${
              isSelected ? styles.selected : ""
            }`}
            onClick={() => toggleFlower(i)}
          >
            <img src={img} />
          </div>
        );
      })}
    </div>
  );
}
