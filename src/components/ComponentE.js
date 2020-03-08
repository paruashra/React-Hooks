import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

//   const user = useContext(UserContext)
//   const channel = useContext(ChannelContext)
//   return <div> User is {user} and channel is {channel}</div>
return <div><ComponentF /></div> 
}

export default ComponentE;