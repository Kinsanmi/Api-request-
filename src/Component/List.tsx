import React from 'react';
import { comment } from '../Cart';
import { useSelector } from 'react-redux';
import { RootState } from '../app/Store';
import { SearchRequest } from '../SearchRequest';


export const List:React.FC = () => {


  const reservations = useSelector((state: RootState) =>{
    state.reservation.value
  })

  return (
    <>
    <div>
      <div>{comment[0].posts.map((list, i)=>{
        return (
          <>
          <ul key={i}>
            <li>{list.id}</li>
            <li>{list.title}</li>
            <li>{list.body}</li>
            <li>{list.tags.join(',')}</li>
            <li>{list.reactions}</li>
          </ul>
          </>
        )
      })}</div>
    </div>


    <div>
      {/* <SearchRequest /> */}
    </div>
    </>
  )
}