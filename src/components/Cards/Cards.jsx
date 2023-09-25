import Card from "./Card";

const Cards = ({cards}) => {

    console.log(cards);
    return (
        <div>
            <h2 className="text-center text-3xl mt-5">All Donation Items</h2>
            
            <div className="w-[1230px] mt-10 p-5 mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    cards?.map(card => <Card key={card.id} card ={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;