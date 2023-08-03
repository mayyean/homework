const Boxes = ({ stylesArr }) => {
  return (
    <>
      {stylesArr.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: item.width,
              height: item.height,
              backgroundColor: item.backgroundColor,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default Boxes;
