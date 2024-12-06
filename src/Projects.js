import blockyImg from '../src/assets/blocky.png'
import blockImg from "../src/assets/block.png"
import chainImg from "../src/assets/chain.png"

export default function Projects(){
    return(
        <section id='projects' className="flex flex-col py-10 flex-colmd:flex-row bg-secondary items-center">
         
             <div className="w-full">
             <div className="flex justify-center flex-col py-10  px-10 items-center text-white">
             <h1 className="'text-white text-4xl border-b-4  border-[#181670] mb-5 w-[140px] font-bold">Projects</h1>
             <p className='text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore possimus dignissimos porro architecto, obcaecati temporibus!</p>           
                         </div>
                         </div>
             <div className="md:w-3/5 w-1/2 ">
             <div className='flex flex-col md:flex-row gap-5 text-white'>
                <div className='relative'>
             <img className='h-[200px] w-[300px]' src={blockyImg} alt="" />
             <div className='project_des'>
             <h2 className='text-center px-5 py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium.</h2>
             </div>
             </div>
             <div className='relative'>
             <img className='h-[200px] w-[300px]' src={blockImg} alt="" />
             <div className='project_des'>
             <h2 className='text-center px-5 py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam?</h2>
             </div>
             </div>
             <div className='relative'>
             <img className='h-[200px] w-[300px]' src={chainImg} alt="" />
             <div className='project_des'>
             <h2 className='text-center px-5 py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis?</h2>
             </div>
             </div>
             </div>
             
             </div>
      
        </section>
       
        
    );
}