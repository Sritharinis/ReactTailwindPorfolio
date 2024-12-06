import aboutImg from '../src/assets/about.png'

export default function About(){
    return(
        <section id='about' className='flex flex-col md:flex-row bg-primary px-5 '>
            <div className='md:w-1/2 md:justify-centre'>
            <img src={aboutImg} />
            </div>
           
            <div className=' md:w-1/2 justify-center flex'>
            <div className='flex flex-col justify-center px-10'>
                <h1 className='text-white text-4xl border-b-4  border-[#181670] mb-5 w-[180px] font-bold '>About Me</h1>
                <h1 className='text-white text-4xl'>Some Information about me</h1>
                <br />
                <p className='text-yellow-100 py-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsam eligendi vero a in odit doloremque non ipsum reiciendis atque cum officia ab officiis nisi vel aspernatur quod, sit vitae.</p>
            </div>
            </div>
        </section>
    );
}
