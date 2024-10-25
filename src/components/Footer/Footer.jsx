import footerLogo from '../../assets/img/logo-footer.png'
import bgshadow from '../../assets/img/bg-shadow.png'


const Footer = () => {
    return (
        <div>
            <div className='relative h-[400px]'>
                <div className='border-2 p-3 w-10/12 h-[300px] mx-auto rounded-xl absolute z-1 top-56 left-28'>
                    <img className='w-full h-full mx-auto border rounded-xl bg-white relative' src={bgshadow} alt="" />

                    <div className='absolute top-16 left-80 text-center'>
                        <h2 className='text-2xl font-bold my-3'>Subscribe to our Newsletter</h2>
                        <p className='mb-3'>Get the latest updates and news right in your inbox!</p>
                        <div className=''>
                            <input className='py-3 pl-3 rounded-xl border mr-3' type="text" placeholder='Enter your email' name="" id="" />
                            <input className='py-3 pl-3 placeholder-black font-bold rounded-xl bg-gradient-to-b from-[#E9828E] to-[#F6C96A] w-32' type="text" placeholder='Subscribe' name="" id="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#06091A] w-full'>
                <div className='flex flex-col items-center justify-center h-[600px] pt-32 w-10/12 mx-auto'>
                    <img className='border-2 border-dashed w-28' src={footerLogo} alt="" />

                    <div className='flex justify-between w-full px-24 mt-16 border-b'>

                        <div className='text-white'>
                            <h1 className='mb-6'>About Us</h1>
                            <p className='w-[300px] text-[#9B9DA3] text-sm'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>

                        <div>
                            <h1 className='text-white mb-6'>Quick Links</h1>

                            <ul className='text-[#9B9DA3] text-sm list-disc pl-4'>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className='mb-6'>
                            <h1 className='mb-6 text-white'>Subscribe</h1>
                            <p className='w-64 text-[#9B9DA3] text-sm mb-6'>Subscribe to our newsletter for the latest updates.</p>
                            <div className=''>
                                <input className='py-3 pl-3 rounded-l-xl' type="text" placeholder='Enter your email' name="" id="" />
                                <input className='py-3 pl-3 placeholder-black font-bold rounded-r-xl bg-gradient-to-b from-[#E9828E] to-[#F6C96A] w-32' type="text" placeholder='Subscribe' name="" id="" />
                            </div>
                        </div>

                    </div>

                    <p className='text-[#9B9DA3] mt-6'> &#64; 2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;