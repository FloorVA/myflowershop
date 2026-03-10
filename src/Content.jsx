import { useState } from "react";
import FlowerGrid from "./components/FlowerGrid";
import { useFlowers } from "./hooks/useFlowers";
import styles from "./Content.module.css";

function Content() {
    const { images, selected, toggleFlower, clearSelection, hasSelection } = useFlowers();

    const [orderStatus, setOrderStatus] = useState("idle");
    // idle | loading | success

    const handleOrder = () => {
        setOrderStatus("loading");

        setTimeout(() => {
            setOrderStatus("success");
            clearSelection();

            setTimeout(() => {
                setOrderStatus("idle");
            }, 2000);

        }, 2000);

    };

    return (
        <main className={styles.pageContent}>
            <FlowerGrid
                images={images}
                selected={selected}
                toggleFlower={toggleFlower}
            />

            {orderStatus === "loading" && (
                <div className={styles.orderStatus}>
                    <span>Uw bestelling wordt geplaatst...</span>
                    <div className={styles.spinner}></div>
                </div>
            )}

            {orderStatus === "success" && (
                <div className={styles.orderStatus}>
                    Uw bestelling is geplaatst!
                </div>
            )}

            <button
                className={styles.appBtn}
                disabled={!hasSelection || orderStatus === "loading"}
                onClick={handleOrder}
            >
                Bestellen
            </button>
        </main>
    );
}

export default Content;


// import FlowerGrid from "./components/FlowerGrid";
// import { useFlowers } from "./hooks/useFlowers";
// import styles from "./Content.module.css";

// function Content() {
//   const { images, selected, toggleFlower, hasSelection } = useFlowers();

//   return (
//     <main className={styles.pageContent}>
//       <FlowerGrid
//         images={images}
//         selected={selected}
//         toggleFlower={toggleFlower}
//       />

//       <button className={styles.appBtn} disabled={!hasSelection}>
//         Bestellen
//       </button>
//     </main>
//   );
// }

// export default Content;
