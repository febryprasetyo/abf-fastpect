import Logo from '../assets/logo-fastpec.png';

const Top = () => {
  return (
    <div>
      <div>
        <div className='bg-blue-bar'>
          <div className='relative flex h-16 items-center justify-between mx-44'>
            <div>
              <img
                className=' h-8 w-auto lg:block md:justify-center'
                src={Logo}
                alt='Your Company'
              />
            </div>
            <div>
              <p className='text-white hidden lg:block uppercase font-bold'>
                COLD STORAGE CONTROL SYSTEM
              </p>
            </div>
            <div className='bg-white px-4 py-2'>
              <p className='text-black text-xs hidden lg:block font-bold'>
                Tanggal
              </p>
              <p className='text-black text-lg hidden lg:block font-bold'>
                JAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
