import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [value, setvalue] = useState([]);
  const [search, setsearch] = useState('cake');
  console.log(search)
  let searchRef=useRef()

  // useEffect ,show here , Do not receive huge data.
  // use of fetch ,We are receive data from backend
 async function fetchRecipe(){
  let res=await fetch(`https://api.edamam.com/search?q=${search}&app_id=45f52f95&app_key=5155032a7039f1699fd555338bde6042`)
  let data=await res.json()
console.log(data.hits)
setvalue(data.hits)
 }
//  for serach input key

 useEffect(()=>{
  fetchRecipe()
 },[search])
  const handlesearch=(e)=>{
e.preventDefault();
let searchvalue=searchRef.current.value
setsearch(searchvalue)
console.log(searchvalue)
  }

  return (
    <div>
  <form className="d-flex w-50 m-auto mt-3" role="search">
    <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{border:'2px solid skyblue'}}/>
    <button className="btn btn-success" onClick={handlesearch} type="submit">Search</button>
  </form>

    <div className="row row-cols-4 m-5" >
   {/* <h1>Home Page</h1> */}
   {value.map((ele)=>{

    console.log(value.hits);
   return <div style={{padding:"20px",gap:"20px",background:'skyblue'}}> <img src={ele.recipe.image} alt=""  style={{borderRadius:'50%'}} /> <p style={{ textAlign:'center',fontWeight:'bold'}}>{ele.recipe.label}</p>
   <div className=" card-body text-center">
    <h5 className="card-title">{ele.recipe.label}</h5>
   <Link to='/single'  state={ele} className="btn  mt-2 " style={{fontFamily:'arial',color:'blue',background:'white'}}>view recipe</Link>
   </div>
   </div>
   })}
   {/* console.log() */}
  
{/* //    <div class="card" style="width: 18rem;">
//   <img src={ele.recipe.image} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">{ele.recipe.label}</h5>
//     <button class="btn btn-primary">View Recipi</button>
//   </div>
// </div> */}
{/* })} */}
   
    </div>
</div>


  )
}

export default Home
