function RightHeroImages() {
  const images = [
    {
      imgUrl: "/women_Glasses.jpg",
      width: "600px",
      imagetext: "Writing Course",
      textRotate:"none",
      textColor:"text-white",
      textLeftSideMargin:"-left-15"

    },

    {
      imgUrl: "/working_men.jpg",
      width: "300px",
      imagetext:"Writing",
      textColor:"text-white",
      textRotate:"-rotate-90",
      textBg:"none",
      textBgBox:"h-30",
      
      textLeftSideMargin:"-left-25"
    },
    {
      imgUrl: "/lady.jpg",
      width: "300px",
      imagetext:"Business",
      textRotate:"-rotate-90",
      textBg:"none",
      textBgBox:"h-30",
      textColor:"text-white",

      textLeftSideMargin:"-left-25"
    },
  ];
  return (
    <div
      className="flex flex-wrap-none  text-green overflow-x-auto gap-4 pt-3"
      id="scroller"
    >
      {images.map((elem, idx) => {
        return (
          <div className="h-120 rounded-4xl pr-4 relative">
             <img
            key={idx}
            src={elem.imgUrl}
            className="h-full relative -z-20 rounded-4xl"
            
            
            
            width={elem.width}
          
          ></img>
          
        
          <div className={` ${elem.width}`}>
            <div className={`${elem.textBg} ${elem.textBgBox} absolute w-full flex justify-center items-center z-20 bottom-22 ${elem.textLeftSideMargin}  font-semibold text-5xl  ${elem.textColor}  ${elem.textRotate}`}>
              {elem.imagetext}

            </div>
          </div>
         
          </div>
         
        );
      })}
    </div>
  );
}
export default RightHeroImages;
