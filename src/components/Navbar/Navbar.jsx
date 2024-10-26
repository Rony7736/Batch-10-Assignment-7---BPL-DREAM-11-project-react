import profile from '../../assets/img/logo.png'
import coin from '../../assets/img/coin.png'

const Navbar = ({price}) => {
    return (
        <div>
            <header className='flex justify-between items-center mt-6'>
                <img className='border-2 border-dashed' src={profile} alt="" />

                <div className='flex items-center gap-10'>
                    <ul className='flex gap-10 text-[#595959]'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>

                    <button className='btn flex gap-2 items-center border px-6 py-3 font-bold rounded-lg'>${price} Coin <span><img src={coin} alt="" /></span> </button>
                </div>

            </header>
        </div>
    );
};

export default Navbar;