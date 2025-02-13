const UnderlineSkew = ({ width = "w-24", color = "bg-blue-700", skew = "-skew-x-20" }) => {
    return (
      <div className={`mt-1 h-1 ${width} ${color} ${skew}`}></div>
    );
  };
  
  export default UnderlineSkew;
  