import React from 'react';
import styles from "./Card.module.css"

type CardProps = {
    id?: number;
    name: string;
    email?: string
}

type users = {
    id: number;
    name: string;
    email: string;
  }

const Card: React.FC<CardProps> = ({ id=1, name="Belem", email }) => {
    return (
        <div className={styles.card}>
            <p className={styles.paragraph}> {id}</p>
            <p className={styles.paragraph}>{name}</p>
            <p className={styles.paragraph}>{email}</p>
        </div>
    );
};
export default Card;