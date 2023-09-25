
const Card = ({card}) => {

    const {img,title,category,category_bg_color,card_bg_color,text_color, } =card;
    return (
        <div>
            <div  className="card  card-compact w-[260px] bg-base-100 shadow-xl" style={{background: card_bg_color}}>
            <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <div className="justify-start">
                        <button className="btn bg-[#FF444A33] w-[55] h-[25px]" style={{background:category_bg_color}}>{category}</button>
                    </div>
                    <h2 className="card-title "style={{color:text_color}}>{title}</h2>
                </div>
            </div>
        </div>

    );
};

export default Card;