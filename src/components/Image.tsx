
interface Props {
    className: string;
    srcSet: string;
    sizes: string;
    src: string;
    alt: string;
  }
  
  function Image(props:Props) {
    return <div className="flex justify-center md:w-1/2">
    <img 
     className={props.className}
     srcSet={props.srcSet}
     sizes={props.sizes}
     src={props.src}
     alt={props.alt}
    />
  </div>
  }
  export default Image