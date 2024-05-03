function ContactUs() {
  return (
    <div className="px-12 py-12 m-3 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold font-poppins mb-2">
        Still Have A Question?
      </h2>
      <p className="font-poppins font-medium text-sm mb-8 text-[#494949]">
        Can't find the answer you're looking for?
      </p>
      <form className='w-full max-w-2xl flex flex-col gap-3 items-center justify-center'>
            <div className="flex gap-5 w-full">
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='font-poppins text-[#494949]'>Name</label>
                    <input type="text" id='name' placeholder="Full Name" className="border-2 p-3 rounded-md placeholder:font-poppins" />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="email" className='font-poppins text-[#494949]'>Email</label>
                    <input type="email" id='email' placeholder="Fullname@gmail.com" className="border-2 p-3 rounded-md placeholder:font-poppins" />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="message" className='font-poppins text-[#494949]'>Message</label>
                <textarea id='message' placeholder="Hello, I have a question" className="border-2 p-3 rounded-md w-full h-32 placeholder:font-poppins"></textarea>
            </div>
            <button type="submit" className="bg-primary w-full p-3 max-w-sm rounded-lg text-white hover:bg-secondary hover:shadow-md font-poppins">
                Submit
            </button>
        </form>
    </div>
  );
}
export default ContactUs;
