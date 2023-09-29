
import { BiDollar } from "react-icons/bi";

const DonationCards = ({card}) => {
    const {id,img,category,title,description2,category_bg_color,card_bg_color,text_color,button_bg_color,price} = card 

    return (
        <div className="">
            <div className="w-[600px] h-[195px] mt-10 mx-auto flex justify-between items-center" style={{background:category_bg_color}}>
            <img src={img} alt="" />
            <div>
                <div className="card-body ">
                    <div className=" h-[35px] w-[90px] text-center bg-black"  style={{background:category_bg_color}}>
                    <h2 className=" mt-1"style={{color:text_color}} > {category}</h2>
                    </div>
                    <p>{title}</p>
                    <h2 style={{color:text_color}}><div className="flex items-center"><BiDollar></BiDollar>{price}</div></h2>
                    <button className="w-[130px] h-[50px] text-white"style={{background:text_color}}>View Details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DonationCards;