import React from 'react';
import styles from "./Card.module.css"

type CardProps = {
    id?: number;
    title: string;
    body?: string
}

// type users = {
//     id: number;
//     name: string;
//     email: string;
//   }

const Card: React.FC<CardProps> = ({ id=1, title="Belem", body }) => {
    return (
        <div className="border-2 border-gray-200 p-4 rounded-lg m-2">
            <p className={styles.paragraph}> {id}</p>
            <p className={styles.paragraph}>{title}</p>
            <p className={styles.paragraph}>{body}</p>
        </div>
    );
};
export default Card;