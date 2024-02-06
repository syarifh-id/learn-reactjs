import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="rounded bg-black text-white font-semibold h-10 px-6"
        type="button">
        Click Me!
      </button>
    );
  }
}

function Buttons() {
  return (
    <button className="rounded-md bg-red-600 text-black  px-6 h-10">
      Click Me
    </button>
  );
}

const Title = () => {
  return (
    <span className="bg-slate-300 px-6 h-10 pt-2 font-semibold">
      Saya Adalah Judul
    </span>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 min-h-screen gap-3">
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Buttons></Buttons>
      <Title></Title>
    </div>
  );
};
export default App;
