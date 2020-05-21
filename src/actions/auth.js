import {firebase,googleauthProvider} from '../firebase/firebase';
export const login  =(uid)=>({
  type:'LOGIN',
  uid
})
export const startlogin =()=>{
    return ()=>{
      return firebase.auth().signInWithPopup(googleauthProvider);
    }
}

export const logout=()=>({
   type:'LOGOUT'
})
export const startlogout =()=>{
    return ()=>{
      return firebase.auth().signOut();
    }
}