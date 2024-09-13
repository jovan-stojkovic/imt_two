const Bar = ({headline}) => {
  return (
    <>
      <div className="bar">
        <div className="left-red">
            <h1>{headline}</h1>
        </div>
        <div className="creation">
          <div className="background-gray"></div>
          <div className="creation-left">
            <div className="left-trap"></div>
            <div className="left-round"></div>
          </div>

          <div className="creation-right">
            <div className="right-trap"></div>
            <div className="right-round"></div>
          </div>
        </div>
        <div className="right-transparent">
          <div className="logo-cont"></div>
        </div>
      </div>
    </>
  );
};

export default Bar;
