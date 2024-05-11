const BallCanvas = ({ icon }) => {
  return (
    <div className="rounded-lg w-[70px] h-[70px] m-5 bg-white flex items-center justify-center">
      <div>
        <img src={icon} alt="tech" className="w-14" />
      </div>
    </div>
  );
};

export default BallCanvas;
