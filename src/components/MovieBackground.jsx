const MovieBackground = ({ poster }) => {
  return (
    <div>
      <div
        className={`w-screen h-screen bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${poster?.split("._")[0]}.jpg})` }}
      >
        <div className="w-screen h-screen justify-center items-center backdrop-brightness-50"></div>
      </div>
    </div>
  );
};

export default MovieBackground;
