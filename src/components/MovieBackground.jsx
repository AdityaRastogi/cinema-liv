const MovieBackground = ({ poster }) => {
  return (
    <div>
      <img alt="poster" className="w-full h-screen " src={poster}></img>
    </div>
  );
};

export default MovieBackground;
