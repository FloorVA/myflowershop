import { useState } from "react";
import FlowerGrid from "./components/FlowerGrid";
import { useFlowers } from "./hooks/useFlowers";
import styles from "./Content.module.css";
import spinnerIcon from "/loading_indicator.svg";

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

            <div className={`${styles.orderStatus} ${orderStatus !== "idle" ? styles.visible : "" }`}>
                {orderStatus === "loading" && (
                    <>
                        <span>Uw bestelling wordt geplaatst...</span>
                        <img src={spinnerIcon} className={styles.spinnerIcon} />
                    </>
                )}

                {orderStatus === "success" && (
                    <span>Uw bestelling is geplaatst!</span>
                )}
            </div>

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