import DonationsCard from "./DonationsCard";

const Cards = ({cards}) => {

    console.log(cards);
    return (
        <div>
            <h1 className="text-2xl text-center py-5">All Donation Items</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[1380px] mx-auto gap-y-10 pl-7">
            {
                cards?.map(card => <DonationsCard key={card.id} card ={card}></DonationsCard>)
            }
        </div>
        
        </div>
    );
};

export default Cards;