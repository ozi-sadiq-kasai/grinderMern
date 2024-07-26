import axios from 'axios'
import { FETCH_USER } from './types'


// Action Creator to get User
export const fetchUser = ()=>async dispatch=>{
  const res = await axios.get('/api/current_user')
  dispatch({type:FETCH_USER,payload:res.data})
 }


// Action Creator to post Token
export const handleToken = (token)=> async dispatch =>{
 const res = await axios.post('/api/stripe',token)
 dispatch({type:FETCH_USER,payload:res.data})
}

