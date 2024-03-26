import Button from "./Button";
import Prices from "./Prices";

interface Props {
  subTitle: string;
  title: string;
  description: string;
}

function Description(props: Props) {
  return (
      <div className="px-5 py-10 md:w-1/2">
        {/* texto */}
        <span className="font-bold uppercase tracking-[4px] text-xl md:text-lg text-[#6c7289]">
          {props.subTitle}
        </span>

        <h1 className=" text-3xl  mt-2.5	mb-2.5 text-black font-bold">
          {props.title}
        </h1>
        <span className="text-lg font-bold text-[#6c7289] mt-3 mb-3 md:text-sm">
          {props.description}
        </span>

        {/*precios*/}
        <Prices
        price={149.99}
        oldPrice={169.99}
        />

        {/*button*/}
        <Button text="Add to cart"/>
      </div>
  );
}
export default Description;
