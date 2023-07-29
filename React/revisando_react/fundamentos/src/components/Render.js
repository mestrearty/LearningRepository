const Render = () => {
  const renderSomething = (whatRender) => {
    if (whatRender === 1) return <h4>Bulbasaur!</h4>;
    else if (whatRender === 4) return <h4>Charmander !</h4>;
    else if (whatRender === 7) return <h4>Squirtle !</h4>;
  };
  return (
    <div>
      <div>{renderSomething(1)}</div>
      <div>{renderSomething(4)}</div>
      <div>{renderSomething(7)}</div>
    </div>
  );
};

export default Render;
