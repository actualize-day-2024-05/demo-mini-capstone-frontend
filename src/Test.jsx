export function Test({ theName, numbers, onSomething }) {
  const handleClick = () => {
    onSomething();
  };

  return (
    <div>
      <h1>THIS IS A TEST</h1>
      <button onClick={handleClick}>Click on this button</button>
      <p>The name is {theName}</p>
      {numbers.map((number) => (
        <div key={number}>
          <p>The number is {number}</p>
        </div>
      ))}
    </div>
  );
}
