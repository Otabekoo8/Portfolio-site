import back from "../../assets/img/back2.jpg"


function Header() {
  return (
    <div id="home" className="header-inner w-[90%] ml-[100px] mt-[60px] h-[80vh] flex items-center flex-wrap md:w-[80%] md:h-[100vh] lg:w-[50%] lg:h-[70vh] lg:flex-col lg:items-center lg:mt-[250px] lg:mt-[50px] xl:w-[80%] xl:mt-[50px] xl:justify-between">
        <div className="text md:ml-[-20px] xl:mt-[50px]">
            <h6 className="text-[25px] text-center lg:text-start xl:text-start xl:text-[16px]">Hello, I am Otabek</h6>
            <h1 className="text-[35px] mt-[10px] text-center font-bold lg:text-start">I am a <span className="text-[#5E3BEE]">frontend</span> developer, I can <br /> make websites.</h1>
            <p className=" text-[25px] text-center mt-[20px] lg:text-start lg:w-[500px] xl:text-start lg:text-[20px] xl:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at ullam aliquid laboriosam fugiat.</p>
            <button className="btn text-[#fff] w-[170px] h-[50px] mt-[20px] lg:border-[#5E3BEE] lg:text-[#fff] lg:rounded-[3px] lg:ml-[0px] lg:inline lg:w-[100px] lg:h-[40px] xl:w-[170px] xl:h-[40px] xl:border-[1px] xl:border-[#5E3BEE] xl:text-[#fff] rounded-[3px] bg-[#5E3BEE] ml-[450px] hover:bg-[#fff] hover:text-[#5E3BEE] md:ml-[230px] md:text-[]#fff">Get in Touch</button>
        </div>
        <div className="img">
            <img src={back} alt=""  className="w-[1000px] h-[600px] md:h-[400px] md:mt-[100px] lg:w-[400px] lg:h-[300px] lg:mt-[-5px] xl:mt-[50px] xl:w-[650px] xl:h-[400px]"/>
        </div>
    </div>
  )
}

export default Header