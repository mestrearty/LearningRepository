const Events = () => {
  const handeOnClick = (event) => {
    console.log("OH! You Toutch my Tralala!");
  };
  return (
    <div>
      <div>
        <button onClick={handeOnClick}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default Events;
