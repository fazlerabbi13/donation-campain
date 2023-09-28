import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonatonCard from "./DonatonCard";

const Card = () => {
    const [card, setCard] = useState([]);
    const { id } = useParams()
    const cards = useLoaderData();



    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
            setCard(findCard)
    }, [id, cards])

   
    return (
        <div>
            <DonatonCard card={card}></DonatonCard>
        </div>
    );
};

export default Card;