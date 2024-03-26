import Icon from './Icon';
interface Props {
  text: string;
}
function Button(props: Props) {
  return (
    <div className="flex justify-center ">
      <button className=" bg-[#3c8067] text-white rounded-lg w-full flex justify-center p-[17px]">
        <Icon />
        <span>
          {props.text}
        </span>
      </button>
    </div>
  );
}
export default Button;
