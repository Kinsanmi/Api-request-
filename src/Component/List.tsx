import React from 'react';
import { comment } from '../Cart';



export const List:React.FC = () => {
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
    </>
  )
}