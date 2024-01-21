import React, { useEffect, useState } from 'react'

type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    userName: string;
}


export const SearchRequest:React.FC = (): JSX.Element => {

    const [users, setUser] = useState<User[]>([]);
    const [find, setFind] = useState<string>("");


    const filterSearch = () =>{
        const results =  users.filter((data)=> data.userName.toLowerCase().includes(find.toLowerCase()));
        setUser(results) 
    }

    useEffect(()=>{
        filterSearch();
    },[find])


    const fetchRequest = async() =>{

        try {
            const res = await fetch(`https://dummyjson.com/users?q=${find}`);
            const request = await res.json();
            setUser(request);
            console.log(request)
        } catch (error) {
            console.log("Error found", error);
        }
    }


    useEffect(()=>{
        fetchRequest();
    },[])


  return (
    <div>
            <div>
                <input 
                value={find}
                onChange={(e) => setFind(e.target.value)}
                placeholder={'....Tom Collins'}
                type="text" />
            </div>
            {users.map((user)=>{
                return (
                    <>
                    <div>
                        <div key={user.id}>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                    </>
                )
            })}
    </div>
  )
}