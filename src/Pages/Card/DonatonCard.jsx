
import swal from 'sweetalert';
import './Overlay.css';
import { BiDollar } from "react-icons/bi";
const DonatonCard = ({card}) => {
    const {id,img,category,title,description2,category_bg_color,card_bg_color,text_color,button_bg_color,price} = card 
    
    const handleDonationAdd = () =>{
        const addDonation = [];

        const donationCard =JSON.parse(localStorage.getItem('donation'))

        if(!donationCard){
            addDonation.push(card)
            localStorage.setItem('donation',JSON.stringify(addDonation))
            swal("Good job!", "Donation successful!", "success");
        }
        else{

            const isExist =donationCard.find(card =>card.id == id)
            if(!isExist){
                addDonation.push(...donationCard,card)
            localStorage.setItem('donation',JSON.stringify(addDonation))
            swal("Good job!", "You clicked the button!", "success");

            }
            else{
                swal("Error!", "Already donate!", "error");
            }
           
        }
    }
    
    return (
        <div>
            <div className="card w-[600px] text-center mx-auto mt-20 bg-base-100 shadow-xl">
               <div className="image-container mx-auto">
               <figure><img className="w-[500px]" src={img} alt="" /></figure>
               <div className="overlay-content">
                <button onClick={handleDonationAdd} className='mr-[300px] w-[140px] h-[50px]'style={{background:button_bg_color}}><div className='flex p-2 ml-1'>Donate <div className='flex items-center'><BiDollar></BiDollar></div>{price}</div></button></div>
               </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        
                    </h2>
                  <p>{description2}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DonatonCard;