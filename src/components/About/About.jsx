import XO from "../../assets/img/about.jpg"

function About() {
  return (
    <div id="about" className="about mt-[450px] flex-col-reverse flex gap-20 items-center xl:flex-row lg:w-[90%] lg:ml-[70px] lg:mt-[-50px]  lg:flex-row  xl:mt-[70px] xl:w-[100%] xl:h-[80vh]">
        <div className="image">
        <img src={XO} alt="" className="w-[550px] md:w-[450px] xl:w-[1600px] rounded-[3px]"/>
        </div>
        <div className="text xl:text-start xl:w-[2400px] mt-[-20px] w-[90%] text-center  lg:text-start">
            <h6 className="font-bold text-[20px] text-[#5E3BEE]">About</h6>
            <h2 className="text-[35px] font-bold mt-[5px]">About <span className="text-[#5E3BEE]">Me</span></h2>
            <p className="mt-[20px] text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe sapiente sint, voluptate neque totam. Repellat, officiis ullam adipisci explicabo autem, voluptatibus saepe reiciendis sapiente repellendus, possimus iusto nihil. Quod quas voluptatem aliquam vel repellendus fuga, temporibus veritatis odit ut itaque voluptas tempore id esse accusantium perferendis, aliquid ullam expedita?</p>
        </div>
    </div>
    
  )
}

export default About