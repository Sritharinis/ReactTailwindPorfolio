import resumeImg from '../src/assets/resume.png'

export default function Resume(){
    return(
        <section id='resume' className='flex flex-col md:flex-row bg-primary px-5 py-10 '>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end' >
            <img className='h-[350px]' src={resumeImg} />
            </div>
           
            <div className=' md:w-1/2 justify-center flex'>
            <div className='flex flex-col justify-center items-center px-20'>
                <h1 className='text-white text-4xl border-b-4  border-[#181670] mb-5 w-[130px] font-bold'>Resume</h1>
                <h1 className='text-white text-2xl'>You can <button className='bg-blue-800 font-bold rounded hover:border-2 px-2 py-1'> <a href="#"></a>download </button> the resume here</h1>
                              
            </div>
            </div>
        </section>
    );
}
