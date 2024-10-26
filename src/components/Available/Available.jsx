
import AvailableCart from '../AvailableCart/AvailableCart';
import Selected from '../Selected/Selected';
import './Available.css'

const Available = ({handleIsActiveState, isActive, handleSelectedPlayers, selectedPlayers, handleDelete, setIsActive}) => {
    
    return (
        <div className="mt-12">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Selected Players ({selectedPlayers.length}/6)</h2>
                <div className="toggle">
                    <button onClick={()=> handleIsActiveState("available")} className= {`${isActive.available ? 'btn active rounded-l-xl text-black' : 'btn text-[#717171]'}`}>Available</button>
                    <button onClick={()=> handleIsActiveState("selected")} className= {`${isActive.available ? 'btn' : 'btn active rounded-r-xl'}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {
                isActive.available ? <AvailableCart handleDelete={handleDelete} handleSelectedPlayers={handleSelectedPlayers}></AvailableCart> : <Selected handleDelete={handleDelete} selectedPlayers={selectedPlayers} setIsActive={setIsActive}></Selected>
            }
            


        </div>

    );
};

export default Available;