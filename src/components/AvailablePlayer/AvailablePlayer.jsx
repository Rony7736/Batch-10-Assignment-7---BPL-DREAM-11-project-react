import { IoPersonSharp } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";

const AvailablePlayer = ({ player,  handleSelectedPlayers}) => {
    
    const { cover, author, country, category, rating, handed_category, price, Bowling} = player

    return (
        <div className="border rounded-xl gap-4 m-4 p-4">
            <img className="w-full h-[200px] object-cover rounded-xl mb-4" src={cover} alt="" />
            <div className='flex mb-4'>
                <p className="text-2xl mr-3"><IoPersonSharp></IoPersonSharp></p>
                <h1 className="text-xl font-bold">{author}</h1>
            </div>

            <div className="flex justify-between items-center border-b">
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-lg"><CiFlag1></CiFlag1></p>
                    <p className="text-[#898989] ">{country}</p>
                </div>
                <p className="bg-[#F3F3F3] text-sm py-2 px-6 rounded-xl mb-4">{category}</p>
            </div>

            <p className="mt-3 text-md font-bold">Rating: {rating}</p>

            <div className="flex justify-between items-center">
                <p className="mt-3 text-[#898989] text-sm">{handed_category}</p>
                <p className="mt-3 text-[#898989] text-sm">{Bowling}</p>
            </div>

            <div className="flex justify-between items-center">
                <p className="mt-3 text-md font-bold">Price: ${price}</p>
                <button onClick={()=> handleSelectedPlayers(player)} className="border text-sm mt-3 py-2 px-6 rounded-xl">Choose Player</button>
            </div>
        </div>
    );
};

export default AvailablePlayer;