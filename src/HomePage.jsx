import { Test } from "./Test";

export function HomePage() {
  var myName = "Peter";
  var numbers = [3, 5, 2];

  const handleSomething = () => {
    console.log("This is going to do something...");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the products app!</h1>
      <Test theName={myName} numbers={numbers} onSomething={handleSomething} />
    </div>
  );
}
