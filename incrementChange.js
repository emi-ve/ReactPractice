function Button(props) {
  // const handleClick = () => setCounter(counter+1);
	return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      +{props.increment}
      </button>
  
  );
}

function Display(props){
  return(
  <div>{props.message}</div>
  );
}

function App(props) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div>
  <Button onClickFunction={incrementCounter} increment={1} />
  <Button onClickFunction={incrementCounter} increment={5} />
  <Button onClickFunction={incrementCounter} increment={10} />
  <Button onClickFunction={incrementCounter} increment={15} />

  <Display message={counter}/>
    </div>
  )
  
}
ReactDOM.render(
<App />,
  document.getElementById('mountNode'),
);
