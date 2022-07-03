import React from 'react'
import styles from "./card.module.scss"
import {useMediaQuery} from "@mantine/hooks"
import { Button } from '@mantine/core';

const Card = () => {
    const query = useMediaQuery("(min-width:1440px)",false);
    
  return (
    <div className={styles["container"]}>
        <img src={query ? "imgDesktop.jpg" : "imgMobile.jpg"}  alt="image"  className={styles["img"]}  />
        <div className={styles["bottom"]}>
            <div className={styles["content"]}>
            <div className={styles["mini-title"]}>PERFUME</div>
            <div className={styles["title"]}>Gabrielle Essence Eau De Parfum</div>
            <div className={styles["desc"]}>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</div>
        </div>
        <div className={styles["buy"]}>
            <div className={styles["prices"]}>
                <div className={styles["price"]}>$149.99</div><div className={styles["sprice"]}>$169.99</div>
            </div>
            <div className={styles["button"]}><Button styles={{root:{
                width:`${query ? "85%" : "90%"}`,
                backgroundColor:"hsl(158, 36%, 37%)",
                height:`${query ? "40px" : "30px"}`,
                ":hover":
                {
                    backgroundColor:"hsl(158, 36%, 37%)",
                    opacity:"0.8"
                }
            }}}><div className={styles["button-context"]}><img src="icon-cart.svg"></img>
            <div className={styles["button-label"]}>Add to Cart</div></div></Button></div>
        </div>
        </div>
    </div>
  )
}

export default Card