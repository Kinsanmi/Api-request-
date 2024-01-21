
import { useEffect, useState } from 'react'
import './App.css';
import { List } from './Component/List';

// interface IPost {
//   id: number;
//   title: string;
//   body: string
// }

interface Post {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
}

interface PostData {
  users: Post[]
}

function App (): JSX.Element {

  const [search, setSearch] = useState<string>("");
  // const[dataResult, setDataResult] = useState<IPost[]>([])
  const[dataResult, setDataResult] = useState<PostData>({users: []})
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(`${search}`)
  }


  // const fetchPost = () =>{
  //   return new Promise((resolve, reject) => {
  //     setTimeout(()=>{
  //       resolve({allPost: comment});

  //       reject({message: "Request Failed"});
  //     },4000)
  //   })
  // }


  const fetchData = async() =>{
    setLoading(true)
    try {
      const result = await fetch(`https://dummyjson.com/users`);
      const data = await result.json();
      setDataResult(data);
      //console.log(data);
    } catch (error) {
      console.log(`Error in fetching data`, error);
      setError((error as Error). message);
    }finally{
      setLoading(false);
    }
  }



  // const fetchData = async() =>{
  //   setLoading(true)
  //   try {
  //     const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     const data = await result.json();
  //     setDataResult(data);
  //     console.log(data)
  //   } catch (error) {
  //     console.log(`Error in fetching data`, error);
  //     setError((error as Error). message);
  //   }finally{
  //     setLoading(false);
  //   }
  // }

  // const [user, setUser] = useState<Users[]>([])

  // const fetchData = async() =>{
  //   try {
  //     const result = await fetch(`https://dummyjson.com/users`);
  //     const data = await result.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    fetchData()
  },[])


  const loader = () =>{

    if(loading){
      return <div>Loading...</div>
    }

    if(error){
      return <div>404 ERROR</div>
    }

    return(
      <>
        <h1>Hello!!</h1>
        <form action="https://formsubmit.co/akinsanmimichael3@gmail.com" onSubmit={handleSubmit}
        method='POST'>
          <input
          type="text"
          name='name'
          value={search}
          placeholder='Search for Product'
          onChange={(e) => setSearch(e.target.value)} required />
          {/* <input
          type="email"
          name='email'
          placeholder='Search for Product'
          onChange={(e) => setSearch(e.target.value)} required /> */}
          <button type='submit'>Submit</button>
        </form>


        <div>
          <div>
            <h1>Mapped Data from API</h1>
            <div>{dataResult.users.map((item)=>{
              return (
                <>
                <div key={item.id}>List...</div>
                <h4>{item.firstName}</h4>
                <h4>{item.lastName}</h4>
                <h4>{item.email}</h4>
                <h4>{item.gender}</h4>
                </>
              )
            })}</div>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <>
    {loader()}
    <List /> 
    </>
  )
}

export default App
