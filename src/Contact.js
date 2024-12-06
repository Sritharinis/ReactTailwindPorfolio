import resumeImg from '../src/assets/resume.png'

export default function Contact(){
    return(
        <section id='contact' className='flex flex-col md:flex-row bg-secondary pl-25 py-10 '>
                        <div className='w-full justify-center flex flex-col items-center'>
                        <h1 className='text-white text-4xl border-b-4  border-[#181670] mb-5 w-[130px] font-bold '>Contact</h1>
                <h1 className='text-white text-2xl px-10'>Please contact me using the below details</h1>
                <br />
                <p className='text-yellow-100 '><span className='font-bold'>Email:</span>  tharushri_88@yahoo.co.in</p> <br />
                <p className='text-yellow-100 '><span className='font-bold'>Phone  Number:</span>  +917878787324</p>
                      </div>
        </section>
    );
}
