import { useEffect, useState } from "react";
import DonatonCard from "../Card/DonatonCard";
import DonationCards from "../../components/DonationCards/DonationCards";
// import { BiDollar } from "react-icons/bi";

const Donation = () => {



    const [donation, setDonation] = useState([])
    const [noFound, setNofound] = useState(false)

    useEffect(() => {

        const donationCard = JSON.parse(localStorage.getItem('donation'))
        if (donationCard) {
            setDonation(donationCard)
        }
        else {
            setNofound('no data found')
        }
    }, [])
    console.log(donation)
    return (
        <div>
            {
                noFound ? <p className="h-[60vh] flex justify-center items-center">{noFound}</p> : <div>

                    <div className="grid grid-cols-2">
                       {
                        donation.map(card =><DonationCards key={card.id} card={card}></DonationCards>)
                       }
                        
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;