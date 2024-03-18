import logo from "../../assets/img/Logo.jpg"


function Navbar() {
  return (
    <div className="navbar mx-8 flex items-center justify-between w-[95%] h-[100px] xl:w-[100%] xl:h-[100px] xl:flex xl:justify-between xl:items-center md:w-[93%] md:h-[100px] lg:justify-center">
        <div className="logo">
            <div className="flex text-[60px] w:-[400px] h-[100px] items-center mt-[20px] md:flex md:w-[400px] md:h-[100px] md:items-center xl:w-[350px] xl:[100px] xl:flex xl:items-center md:text-[35px]"><img className="w-[180px] h-[150px] xl:w-[130px] xl:h-[120px] md:w-[100px] md:h-[70px]" src={logo} alt="" /><h3 className=" xl:text-[30px] md:text-[20px]">MODERN  <span className="text-[#5E3BEE]">DEV</span></h3></div>
        </div>
        <div className="link">
            <ul className=" lg:inline lg:w-[450px] lg:h-[120px] lg:justify-between lg:items-center lg:flex hidden xl:w-[500px] xl:h-[100px] xl:flex xl:justify-between xl:items-center xl:inline ">
                <li className="hover:text-[#5E3BEE]"><a href="#home">Home</a></li>
                <li className="hover:text-[#5E3BEE]"><a href="#about">About me</a></li>
                <li className="hover:text-[#5E3BEE]"><a href="#portfolio">Portfolio</a></li>
                <li className="hover:text-[#5E3BEE]"><a href="#contact">Contact us</a></li>
            </ul>
        </div>
        <div className="button">
            <button className="btn lg:border-[#5E3BEE] lg:text-[#fff] lg:rounded-[3px] lg:ml-[20px] lg:inline lg:w-[100px] lg:h-[40px] hidden xl:inline xl:w-[170px] xl:h-[40px] xl:border-[1px] xl:border-[#5E3BEE] xl:text-[#fff] rounded-[3px] bg-[#5E3BEE] hover:bg-[#fff] hover:text-[#5E3BEE]">Contact Me</button>
                <i className='bx bx-menu inlinie xl:hidden text-[90px] md:text-[35px] lg:hidden'></i>
        </div>
    </div>
  )
}

export default Navbar