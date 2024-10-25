
import AvailableCart from '../AvailableCart/AvailableCart';
import Selected from '../Selected/Selected';
import './Available.css'

const Available = ({handleIsActiveState, isActive}) => {
    
    return (
        <div className="mt-12">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Available Players</h2>
                <div className="toggle">
                    <button onClick={()=> handleIsActiveState("available")} className= {`${isActive.available ? 'btn active rounded-l-xl text-black' : 'btn text-[#717171]'}`}>Available</button>
                    <button onClick={()=> handleIsActiveState("selected")} className= {`${isActive.available ? 'btn' : 'btn active rounded-r-xl'}`}>Selected (0)</button>
                </div>
            </div>

            {
                isActive.available ? <AvailableCart></AvailableCart> : <Selected></Selected>
            }
            


        </div>

    );
};

export default Available;