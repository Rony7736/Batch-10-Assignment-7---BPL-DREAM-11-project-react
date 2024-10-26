import { useEffect, useState } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailableCart = ({handleSelectedPlayers}) => {

    const [availableCart, setAvailableCart] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => {
            setAvailableCart(data)
        })
    }, [])
    

    return (

        <div className="grid grid-cols-3 my-10">
            
            {
                availableCart.map(player => <AvailablePlayer  handleSelectedPlayers={handleSelectedPlayers} key={availableCart.id} player={player}></AvailablePlayer>)
            }
        </div>
    );
};

export default AvailableCart;