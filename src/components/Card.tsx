import React from 'react';
import styles from "./Card.module.css"

type CardProps = {
    title?: string;
    content: string;
}
const Card: React.FC<CardProps> = ({ title="Default title", content="Default content" }) => {
    return (
        <div>
            <h1 className={styles.title}> {title}</h1>
            <p className={styles.content}>{content}</p>
        </div>
    );
};
export default Card;