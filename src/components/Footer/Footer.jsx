

function Footer() {
  return (
    <div className="xl:w-[126.3%] ml-[-160px] xl:h-[40vh] bg-[#383838] md:w-[137.7%]">
      <div className="container md:hidden xl:block">
          <div className="inner-footer ">
              <div className="one xl:w-[100%] xl:h-[100px] xl:flex xl:items-center xl:justify-between "> 
              <div className="logo">
            <div className="flex text-[60px] w:-[400px] h-[100px] items-center mt-[20px] md:flex md:w-[400px] md:h-[100px] md:items-center xl:w-[350px] xl:[100px] xl:flex xl:items-center md:text-[35px]"><h3 className=" xl:text-[25px] md:text-[20px] text-[#fff]">MODERN  <span className="text-[#5E3BEE]">DEV</span></h3></div>
        </div>
        <div className="link">
            <ul className=" lg:inline lg:w-[450px] lg:h-[120px] lg:justify-between lg:items-center lg:flex hidden xl:w-[500px] xl:h-[100px] xl:mt-[25px] xl:flex xl:justify-between xl:items-center xl:inline ">
                <li className="hover:text-[#5E3BEE] text-[#fff]"><a href="#home">Home</a></li>
                <li className="hover:text-[#5E3BEE]  text-[#fff]"><a href="#about">About me</a></li>
                <li className="hover:text-[#5E3BEE]  text-[#fff]"><a href="#portfolio">Portfolio</a></li>
                <li className="hover:text-[#5E3BEE]  text-[#fff]"><a href="#contact">Contact us</a></li>
            </ul>
        </div>
        <div className="icon xl:-[200px] xl:mt-[25px] xl:h-[100px] xl:flex xl:items-center xl:gap-6">
            <i className='bx bxl-facebook xl:text-[25px]  text-[#fff]'></i>
            <i className='bx bxl-instagram xl:text-[25px]  text-[#fff]'></i>
            <i className='bx bxl-youtube xl:text-[25px]  text-[#fff]'></i>
            <i className='bx bxl-github xl:text-[25px]  text-[#fff]'></i>
        </div>
          </div>
        <hr  className="xl:mt-[50px]"/>
              <div className="two xl:w-[100%] xl:h-[60px] xl:flex xl:justify-between xl:mt-[50px]">
                <h4 className=" text-[#fff]">It was 😎 made by Otabek  </h4>
                <div className="te xl:flex xl:gap-10  text-[#fff]">
                  <h4>Privacy Policy</h4>
                  <h4>Terms of Service</h4>
                  <h4>Cookies Settings</h4>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer