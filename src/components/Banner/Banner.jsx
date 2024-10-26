import bannerImg from '../../assets/img/bg-shadow.png'
import bannerContentImg from '../../assets/img/banner-main.png'

const Banner = ({newPrice}) => {
    return (
        <div className='flex justify-center text-center w-full h-[600px]'>

            <img className='absolute bg-black rounded-xl max-w-7xl h-[600px]' src={bannerImg} alt="" />

            <div className='relative flex flex-col justify-center mt-4'>
                <img className='w-[200px] mx-auto border-2 border-dashed border-[#B9B9B9] mt-6' src={bannerContentImg} alt="" />
                <h1 className='text-white text-4xl font-extrabold my-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className='text-[#B9B9B9] text-2xl mb-6'>Beyond Boundaries Beyond Limits</h4>

                <div>
                <button onClick={()=> newPrice(100000)} className=' border-2 border-[#CCE027] py-5 px-2 rounded-3xl'>
                    <span className='bg-gradient-to-b from-[#CCE027] to-[#E3FA28] py-4 px-8 rounded-3xl font-bold text-lg'>Claim Free Credit</span>
                </button>
                </div>

            </div>

        </div>
    );
};

export default Banner;