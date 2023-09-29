import { useEffect, useState } from "react";
import DonatonCard from "../Card/DonatonCard";
import DonationCards from "../../components/DonationCards/DonationCards";
// import { BiDollar } from "react-icons/bi";

const Donation = () => {



    const [donation, setDonation] = useState([])
    const [noFound, setNofound] = useState(false)
    const [seeALL ,setSeeAll] = useState(false)

    useEffect(() => {

        const donationCard = JSON.parse(localStorage.getItem('donation'))
        if (donationCard) {
            setDonation(donationCard)
        }
        else {
            setNofound('no data found')
        }
    }, [])
   
    const handleDonationDelete =()=>{
        localStorage.clear()
        setDonation([])
        setNofound('no data found')
    }

    return (
        <div>
            {
                noFound ? <p className="h-[60vh] flex justify-center items-center">{noFound}</p> : <div>

                    <div className="text-center mt-10">
                        {
                            donation.length>0 && <button onClick={handleDonationDelete}
                             className="w-[150px] h-[30px] bg-red-400">Delete Donation</button>
                        }
                    </div>
                    
                    <div className="grid grid-cols-2">
                       {
                        seeALL?donation.map(card =><DonationCards key={card.id} card={card}></DonationCards>)
                        :donation.slice(0,4).map(card =><DonationCards key={card.id} card={card}></DonationCards>)
                       }
                       
                    </div>
                   <div className="text-center mt-10 mb-5">
                   <button onClick={()=>setSeeAll(!seeALL)} className="w-[100px] h-[30px] bg-red-400">
                    {seeALL?"See less":"See ALL"}
                   </button>
                   </div>
                </div>
                
            }
        </div>
    );
};

export default Donation;