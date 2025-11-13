function printHello(event) {
    console.log("Hello from Button component!");
    console.log(event);
}

export default function Button() {
  return (
    <div>
        <button onClick={printHello}>Click me</button>
    </div>
  );
}