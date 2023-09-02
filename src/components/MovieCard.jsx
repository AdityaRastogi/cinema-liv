const MovieCard = (props) => {
  const { poster } = props.data;
  return (
    <div className="w-48 pr-4 cursor-pointer">
      <img alt="poster" src={poster}></img>
    </div>
  );
};

export default MovieCard;
