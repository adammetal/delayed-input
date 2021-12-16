const createDelayedFunction = (fn, ms) => {
  let timer;

  return (event) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(event);
    }, ms);
  };
};

const onInput = (e) => {
  console.log(e.target.value);
  // async operation here
};

const main = () => {
  const typer = document.querySelector("#typer");
  
  const delayedOnInput = createDelayedFunction(onInput, 400);
  typer.addEventListener("input", delayedOnInput);
};

window.addEventListener("load", main);
