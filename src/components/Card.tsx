import Description from './Description';
import Image from './Image';

function Card() {
  return (
    <div className=" bg-white max-w-[400px] rounded-2xl flex flex-col md:flex-row md:max-w-lg">
      <Image
        className="w-full rounded-t-2xl md:rounded-l-lg md:rounded-tr-none"
        srcSet="/image-desktop.jpg 600w,/image-mobile.jpg 686w"
        sizes="(max-width: 600px) 686px, 300px"
        src="/image-desktop.jpg"
        alt="main"
      />
      <Description
      subTitle='Ring'
      title='Ring of Velaris, high lady of the night court'
      description='Un anillo inspirado en la saga acotar, es una inspiracion a feyre the
      high lady of the night court and the city of starlight, Velaris'
      />
    </div>
  );
}
export default Card;
