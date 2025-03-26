function App(props)
{
  return(
    <>
    <h1>Roll Number:{props.rno}</h1>
    <h1>Student Name:{props.sname}</h1>
    <h1>Mark:{props.mark}</h1>

    </>
  )
} 
export default App
/*import './App.css'
function App()
{
  //simple jsx
  const v1=<h1>welcome to header1</h1>
  //One top level element  
  const v2=<>One top level  <h1> header1</h1><h2> header2</h2></>
  //3.Expression
  var a=10;
  var b=20;
  const v3=<h1>Total:{a+b} </h1>
  //4.element must be closed 
  var v4=<hr/>
  //5.using attribute classname instead of class
  var v5=<h2 id="my id" className="myclass">this is css style</h2> 
   var mystyle={
    backgroundColor:"yellow",
    fontSize:"24px",
    fontFamily:"Times",
    border:"10px double red",
    textAlign:"center",
    color:"green",
    textTransform:"uppercase"   
  } 
  
 return(
    <>
    <h1>Inline css</h1>
  <h1 style={{backgroundColor:'yellow',color:'red'}}>React JSX - javascript & XML - allow html code in react</h1>
  simple header :{v1}
  mutiple header:{v2}
  {v3} 
  {v4} 
  {v5} 
  <h1 style={mystyle}>this is header</h1>
  <h1 style={mystyle}>this is header</h1>
  <h1 style={mystyle}>this is header</h1>
  <h1 style={mystyle}>this is header</h1>
  <h1 style={mystyle}>this is header</h1>
  <h1 style={mystyle}>this is header</h1> 
  <h6>this is header6</h6>
  <h6>this is header6</h6>
  <h6>this is header6</h6>
  <h6>this is header6</h6>
  <h6>this is header6</h6>
  <h6>this is header6</h6>

   </>
)
} 
export default App
/*function App()
{ 
  var avg=65;
  return(
    <>
    <h1>Your Percentage:{avg}</h1>
     <h2> your Grade:
      {(avg>=85 && "outstanding")||(avg>=75 && "excellent") || (avg>=65 && "very good") ||(avg>=55 && "good")|| "fair"}
     </h2>
    </>
  )
} 
export default App


/*
function App()
{ 
  var n=0;
  return( 
    <>
    <h1>{(n>0 && n+"is +ve")|| (n<0 && n+"is-ve")||(n===0 && n+ "is zero")}</h1>
    </>
  )
} 
export default App
/*
function App()
{ 
  var n1=-10;
  var n2=5;
  return( 
    <>
    <h1>{(n1>n2 && n1+"biggest number")|| n2+"biggest number"}</h1>
    </>
  )
} 
export default App
/*
function App()
{ 
  var n=10;
  return( 
    <>
    <h1>{(n%2===0 && "even")||"odd"}</h1>
    </>
  )
} 
export default App
/*
function App()
{ 
  var mark=17;
  return( 
    <>
    <h1>{(mark>=50 && "Pass") || "Fail"}</h1>
    </>
  )
} 
export default App
/*
function App()
{ 
  var mark=67;
  return( 
    <>
    <h1>{mark>=50 && "pass"}</h1>
    </>
  )
} 
export default App
/*
function App()
{ 
  var a=100;
  var b=200;
  return( 
    <>
    <h1>Welcome to React Expression</h1>
    <h1>a value:{a}</h1>
    <h1>b value:{b}</h1>
    <h1>Total value:{a+b}</h1>
    </>
  )
} 
export default App
/*
function App()
{
  return(
    <div>
      <h1>WeLcome to React First APP</h1>
      <h1>WeLcome to React First APP</h1>
      <p>paragragh</p>
      </div>
  )
} 
export default App
 /*
function App()  
{ 
  var arr=[11,22,33,44,55,66,77,88,99,100]
  return ( 
    <> 
    <h2>all elements</h2>
    <ol type="I">
      {arr.map((item)=><li>{item}</li>)}
    </ol>
    <h2>Even elements</h2>
    <ul type="circle">
      {arr.map((item)=>
      <li>
        {(item%2===0 && item+"even") || item+"odd"}
        </li>
      )}
    </ul> 

    <h2>Even only</h2>
    <ul type="square">
      {arr.map((item)=> 
      <>
    {(item%2===0 && <li>{item}</li>)}
    </>
      )}
    </ul>
    </> 
  ) 
}
export default App

    /*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           priya
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App 
*/
