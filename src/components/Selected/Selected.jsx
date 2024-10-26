import { MdDelete } from "react-icons/md";

const Selected = ({ selectedPlayers, handleDelete, setIsActive }) => {

    return (
        <div>
            {
                selectedPlayers.map((player) => (
                    <div className="flex justify-between items-center border p-4  mt-6 rounded-2xl">
                        <div className="flex">
                            <img className="w-32 h-20 rounded-2xl mr-6" src={player.cover} alt="" />
                            <div>
                                <p className="text-2xl font-bold mb-2">{player.author}</p>
                                <p className="text-[#898989]">{player.handed_category}</p>
                            </div>
                        </div>

                        <button onClick={() => handleDelete(player.id)} className="text-3xl text-red-500"><MdDelete></MdDelete></button>

                    </div>
                ))
            }

            <div>
                <span onClick={() => setIsActive({
                    available: true,
                    status: 'available'
                })} className="ring-2 py-5 px-2 rounded-xl"><button className="btn mt-8 rounded-xl text-black font-bold bg-[#E7FE29]">Add more Players</button></span>
            </div>
        </div>
    );
};

export default Selected;