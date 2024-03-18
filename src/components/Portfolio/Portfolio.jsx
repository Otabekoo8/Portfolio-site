import portfolio1 from "../../assets/img/portfolio1.jpg"
import portfolio2 from "../../assets/img/bloom.png"
import portfolio3 from "../../assets/img/shop.png"

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
        <div className="text text-center mt-[55px] xl:text-start">
            <h6 className="text-[#5E3BEE] font-bold text-[25px] xl:font-bold text-[30px] xl:text-[20px]">Porftolio</h6>
            <h1 className="xl:font-bold xl:text-[35px] font-bold text-[35px]">My <span className="text-[#5E3BEE]">Projects</span></h1>
            <div className="card w-[90%] mt-[50px] lg:w-[100%] md:flex md:flex-wrap lg:flex lg:flex-wrap lg:w-[100%] xl:h-[80vh]">
                <div className="item1 w-[100%] ml-[100px] mt-[50px] md:w-[35%] lg:w-[23%] xl:w-[25%] xl:h-[50vh]">
                    <img src={portfolio1} alt=""  className="image w-[95%]"/>
                    <h3 className="text-start text-[50px] text-[#5E3BEE] md:text-[25px] lg:text-[20px]">Delicacy</h3>
                    <p className="text-start text-[35px] md:text-[20px] lg:text-[15px] md:text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur repellendus voluptas tenetur corporis. Delectus impedit exercitationem voluptatibus, suscipit numquam ex tempore, alias cumque molestias officia repellat veritatis aliquam esse!</p>
                    <a href="https://delicacymarket.netlify.app/" className="flex items-center gap-5 text-[40px] hover:text-[#5E3BEE] md:text-[20px] lg:text-[15px] lg:mt-[10px]"><p>Link to web site</p> <i class='bx bx-link-external'></i></a>
                </div>
                <div className="item1 w-[100%] ml-[100px] mt-[50px] md:w-[35%] lg:w-[23%] xl:w-[25%]  xl:h-[50vh]">
                    <img src={portfolio2} alt=""  className="image w-[95%]"/>
                    <h3 className="text-start text-[50px] text-[#5E3BEE] md:text-[25px] lg:text-[20px]">Bloom</h3>
                    <p className="text-start text-[35px] md:text-[18px] lg:text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur repellendus voluptas tenetur corporis. Delectus impedit exercitationem voluptatibus, suscipit numquam ex tempore, alias cumque molestias officia repellat veritatis aliquam esse!</p>
                    <a href="https://bloom-tailwind.vercel.app/" className="flex items-center gap-5 text-[40px] hover:text-[#5E3BEE] md:text-[20px] lg:mt-[10px] lg:text-[15px]"><p>Link to web site</p> <i class='bx bx-link-external'></i></a>
                </div>
                <div className="item1 w-[100%] ml-[100px] mt-[50px] md:w-[35%] md:mt-[50px]  lg:w-[23%] xl:w-[25%]  xl:h-[50vh]">
                    <img src={portfolio3} alt=""  className="image w-[95%]"/>
                    <h3 className="text-start text-[50px] text-[#5E3BEE] md:text-[25px] lg:text-[20px]">Shop-Cart</h3>
                    <p className="text-start text-[35px] md:text-[20px] lg:text-[15px] md:text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur repellendus voluptas tenetur corporis. Delectus impedit exercitationem voluptatibus, suscipit numquam ex tempore, alias cumque molestias officia repellat veritatis aliquam esse!</p>
                    <a href="https://delicacymarket.netlify.app/" className="flex items-center gap-5 text-[40px] hover:text-[#5E3BEE] md:text-[20px] lg:mt-[10px] lg:text-[15px]"><p>Link to web site</p> <i class='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio