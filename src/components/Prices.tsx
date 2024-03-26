interface Props {
    price:number;
    oldPrice:number;
  }

function Prices(props:Props){
    return(<div className="flex items-center	mt-3 mb-3 ">
    <span className="text-[#3c8067] font-bold text-3xl md:text-2xl mr-4">
      ${props.price}
    </span>
    <span className="text-[#6c7289] line-through	font-bold text-lg">
      ${props.oldPrice}
    </span>
  </div>)
}
export default Prices