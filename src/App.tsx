function App() {
  return (
    <div className="flex items-center justify-center h-full bg-[#f2ebe3] px-10 py-10">
      <div className=" bg-white rounded-2xl flex flex-col max-w-[600px] ">
        <div className="max-w-[600px] ">
          <img
            className=" w-full h-[450px] rounded-xl"
            src="https://shophalofiction.com/cdn/shop/products/E5A7743C-6823-45EF-99D1-387300C2584D.jpg?v=1707090226&width=3024"
            alt="main"
          />
        </div>

        <div className=" p-[35px]">
          <span className="font-bold uppercase tracking-[4px] text-xl text-[#6c7289]">
            Ring
          </span>

          <h1 className=" text-3xl mt-2.5	mb-2.5 text-black font-bold">
            Ring of Velaris, high lady of the night court
          </h1>
          <span className="text-lg font-bold text-[#6c7289] mt-3 mb-3">
            Un anillo inspirado en la saga acotar, es una inspiracion a feyre
            the high lady of the night court and the city of starlight, Velaris
          </span>

          <div className="flex items-center	mt-3 mb-3 ">
            <span className="text-[#3c8067] font-bold text-3xl mr-4">
              $149.99
            </span>
            <span className="text-[#6c7289] line-through	font-bold text-lg">
              $169.99
            </span>
          </div>

          <div className="flex justify-center ">
            <button className=" bg-[#3c8067] text-white rounded-lg w-full flex justify-center p-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
