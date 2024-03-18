

function Contact() {
  return (
    <div className="contact xl:w-[100%] xl:h-[100vh]" id="contact">
        <div className="text xl:w-[100%] xl:text-center xl:pt-[40px] text-center">
            <h4 className="text-[#5E3BEE] font-bold text-[35px] md:text-[25px] xl:text-[15px]">Get In Touch</h4>
            <h1 className="text-[35px] font-bold text-[55px] md:text-[40px] xl:text-[30px]">Contact us</h1>
            <p className="text-[30px] md:text-[20px] xl:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className=" mt-[30px] ml-[300px] xl:ml-[200px] xl:w-[900px] xl:flex xl:flex-wrap xl:justify-center w-[100%] md:flex md:flex-wrap md:ml-[130px]">
            <div className="flex1 xl:w-[50%] w-[100%] md:w-[50%]">
                <span className="text-[30px] md:text-[25px] xl:text-[20px]">First name</span><br />
                <input type="text" className="border-[1px] border-[#033333] xl:w-[73%] xl:h-[40px] rounded-[2px] w-[50%] h-[60px] md:w-[50%]"/>
            </div>
            <div className="flex1 xl:w-[50%] md:w-[50%]">
                <span className="text-[30px] md:text-[25px] xl:text-[20px]">Last name</span><br />
                <input type="text" className="border-[1px] border-[#033333] xl:w-[73%] xl:h-[40px] rounded-[2px] w-[50%] h-[60px]  md:w-[50%]"/>
            </div>
            <div className="flex1 xl:w-[50%] md:w-[50%]">
                <span className="text-[30px] md:text-[25px] xl:text-[20px]">Email</span><br />
                <input type="text" className="border-[1px] border-[#033333] xl:w-[73%] xl:h-[40px] rounded-[2px] w-[50%] h-[60px]  md:w-[50%]"/>
            </div>
            <div className="flex1 xl:w-[50%] md:w-[50%]">
                <span className="text-[30px] md:text-[25px] xl:text-[20px]">Phone number</span><br />
                <input type="text" className="border-[1px] border-[#033333] xl:w-[73%] xl:h-[40px] rounded-[2px] w-[50%] h-[60px]  md:w-[50%]"/>
            </div>
            <div className="flex2 xl:w-[100%] xl:mt-[5px] md:w-[50%]">
                <span className="text-[30px] md:text-[25px] xl:text-[20px]">Choose a topic</span><br />
                <select name="" id="" className="border-[1px] border-[#033333] xl:w-[70%] xl:h-[40px] rounded-[2px] w-[50%] h-[60px]  md:w-[150%] xl:w-[780px]">
                    <option value="" className="text-[30px] md:text-[25px] xl:text-[20px]">Select one...</option>
                    <option value="">Salom</option>
                    <option value="">Salom</option>
                    <option value="">Salom</option>
                </select>
                <legend className="mt-[10px] text-[30px] md:text-[25px] xl:text-[20px]">Message</legend>
                <textarea cols="30" rows="10" className="border-[1px] border-[#033333] xl:w-[70%] xl:h-[30px] rounded-[2px] w-[50%] h-[60px] md:w-[150%] xl:w-[780px] xl:h-[90px]"></textarea>
            </div>
        </div>
            <div className="accept mt-[15px] flex gap-3 xl:flex xl:gap-3 xl:ml-[200px] ml-[300px] md:ml-[130px]">
                <input type="checkbox" className="w-[40px] h-[40px] xl:w-[20px] xl:h-[20px]"/>
                <legend className="text-[30px] xl:text-[18px]">I accept the terms</legend>
            </div>
            <button type="submit" className="xl:w-[100px] xl:h-[35px] w-[150px] h-[60px] text-[30px] rounded-[5px] bg-[#006B6A] text-[#fff] ml-[550px] mt-[10px] md:ml-[350px] xl:w-[145px] xl:h-[50px] xl:ml-[500px]">Submit</button>
    </div>
  )
}

export default Contact