import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter>{(num: number) => <>{`Your counter is : ${num}`}</>}</Counter>
    </div>
  );
}

export default App;
