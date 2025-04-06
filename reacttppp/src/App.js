
/*function App()
{
  const show=(event)=>{
    event.preventDefault()
    console.log("submit button pressed")
  } 
  var unc=0,pwc=0 
  const dis=(event)=>{
    if(event.target.name==="un")
      unc+=1
    if(event.target.name==="pw")
      pwc+=1
    document.getElementById("r1").innerHTML=unc
    document.getElementById("r2").innerHTML=pwc
  }
  return(
    <form onSubmit={show}>
      <input type="text"  onChange={(e)=>dis(e)} name="un" placeholder="Enter username"></input>
      <br></br>
      <input type="password"  onChange={(e)=>dis(e)} name="pw" placeholder="Enter password"></input>
      <br></br>
      <input type="submit"></input>
      <input type="button" value="clickme"></input>
      <input type="reset"></input>  
      <button><b>clickme</b></button>
      <div id="r1"></div>
      <div id="r2"></div>  
      </form>
  )
}
export default App
/*function App()
{ 
  var c=0
  const dis1=(event)=>{
    event.target.style.backgroundColor="red";
    event.target.value=parseInt(event.target.value)+1
}
  const dis2=(event)=>{
  event.target.style.backgroundColor="green";
}
  return(
    <>
    <h2>On blur Event</h2>
    <input type="text" value={c} onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
    <input type="text" value={c}onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
    <input type="text" value={c}  onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
    </>
  )
}
export default App
/*function App()
{
  const dis1=(event)=>{
    document.getElementById("t1").style.backgroundColor="white"
    document.getElementById("t2").style.backgroundColor="white"
    document.getElementById("t3").style.backgroundColor="white"
    if(event.target.id==="t1")
      document.getElementById("t1").style.backgroundColor="lightgreen" 
    if(event.target.id==="t2")
      document.getElementById("t2").style.backgroundColor="lightgreen"
    if(event.target.id==="t3")
    document.getElementById("t3").style.backgroundColor="lightgreen"

  }
  return(
    <> 
    <h1>onFocus Event</h1>
    <input type="text" onFocus={(e)=>dis1(e)} id="t1"></input>
    <input type="text" onFocus={(e)=>dis1(e)} id="t2"></input>
    <input type="text" onFocus={(e)=>dis1(e)} id="t3"></input></>

  )
}
export default App
/*function App()
{ 
  const show=()=>{
    if(document.getElementById("hid").type==="hidden")
      document.getElementById("hid").type="text";
    else
    document.getElementById("hid").type="hidden";
} 
const copyph=()=>{
  document.getElementById("hid").value=document.getElementById("ph").value
}
  
  return(
    <>
    <input type="number" onChange={copyph} id="ph"></input>
    <input  type="hidden" value="" id="hid"></input>
    <input type="button" onClick={show} value="show/hide"></input>
    </>
  )
} 
export default App
/*function App()
{
  return(
    <form>
      <input type="text" placeholder="Enter User Name:" value="priya"></input>
      <br></br>
      <input type="number" placeholder="Enter No:" min="100"max="2000"></input>
      <br></br>
      <label>Enter password:
      <input type="password" placeholder="Enter password:"></input>
      </label>
     <br></br>
     <input type="radio" name="gen" checked></input>Male
     <input type="radio" name="gen" checked></input>Female
     <input type="radio" name="gen" checked></input>Others
     <br></br>
     select course:
     <input type="checkbox"></input>C
     <input type="checkbox"></input>C++
      <input type="checkbox"></input>JAVA
<br></br>
     Enter Address:
     <textarea cols="20" rows="7"></textarea>
     <br></br>
     <select>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
</select> 
<br></br>
Enter Email:<input type="email"></input>
select DOB:
<input type="date"></input>
select time:
<input type="time"></input>
<br></br> 
<input type="week"></input>
<br></br>
<input type="file"></input>
<br></br>
<input type="range" min="0" max="7"></input>
<br></br>
<input type="hidden" value="100" name="hid"></input>
<input type="reset" name="clr"></input>
<input type="submit"></input>
<input type="button" value="clickme"></input>
<input type="reset" value="clear"></input>

</form>
  )
}
export default App
/*function App(props)
{ 
  var tot=0
  var subjectsnames=[]
  
  for (var v in props.myobj.subjects)
  {
    tot=tot+props.myobj.subjects[v]
    subjectsnames.push(v) 
    
    console.log(v)
}
  return(
    <>
    <h1>Roll Number:{props.myobj.rno}</h1>
    <h1>Student Name:{props.myobj.sname}</h1>
    <ol>{subjectsnames.map((s)=><li>{s} mark:{props.myobj.subjects[s]}</li>)}</ol>
    <h1>Total:{tot}</h1> 
    <hr></hr>
    
    </>
  )
}
export default App
/*function App(props)
{ 
  
  var tot=0
  for (var v in props.myobj.subjects)
  {
    tot=tot+props.myobj.subjects[v]
  console.log(v)
}
  return(
    <>
    <h1>Roll Number:{props.myobj.rno}</h1>
    <h1>Student Name:{props.myobj.sname}</h1>
    <h1>tamil Mark:{props.myobj.subjects["tamil"]}</h1>
    <h1>english Mark:{props.myobj.subjects.english}</h1>
    <h1>maths Mark:{props.myobj.subjects.maths}</h1>
    <h1>science Mark:{props.myobj.subjects.science}</h1>
    <h1>social Mark:{props.myobj.subjects["social"]}</h1> 
    <h1>Total:{tot}</h1>
    </>
  )
} 
export default App
/*function App(props)
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
