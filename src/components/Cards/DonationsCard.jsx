import { Link } from "react-router-dom";

const DonationsCard = ({card}) => {
    

    const {id,img,category,title,category_bg_color,card_bg_color,text_color,button_bg_color,} = card

    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div className="card  w-[300px] bg-base-100" style={{background:card_bg_color}}>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className=" h-[35px] w-[90px] text-center bg-black"  style={{background:category_bg_color}}>
                    <h2 className=" mt-1" style={{color:text_color}} > {category}</h2>
                    </div>
                    <p style={{color:text_color}}>{title}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DonationsCard;