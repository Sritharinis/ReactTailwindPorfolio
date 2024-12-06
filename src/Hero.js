import HeroImg from "../src/assets/Hero.png"
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";




export function Hero(){
    return(
       
        <section className='flex flex-col md:flex-row bg-secondary justify-center items-center fontFamily- '>
            <div className=" md:w-1/2 flex flex-col py-10" >
            <h1 className=" text-white text-4xl font-hero-font "> Hi, <br /> Im <span className="text-black">Sritharini </span> 
                <p className="text-2xl" > Im trying to become a Developer</p>
            </h1> 
            <div className="flex  py-10">
            <a href="" className='pr-5 hover:text-white'> <BsTwitterX size={40}/> </a>
            <a href=""className='pr-5 hover:text-white'> <FaLinkedin size={40} /> </a>
            <a href=""className= 'hover:text-white'> <FaSquareFacebook size={40}/> </a>
        </div>
            </div>
            
            <img className=" md:w-1/3" src={HeroImg} alt="" />
            
        </section>
       
       
    );
}
