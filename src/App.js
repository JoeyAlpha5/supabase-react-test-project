import './App.css';
import {useState, useEffect} from 'react';
import { supabase } from './Supabase';

function App() {
  const [data, setData] = useState();
  const signUp = async ()=>{
    // google social auth
    try{
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
      });
      console.log(supabase.auth.user());  
    }
    catch (err){
      console.log(err);
    }


    // github social auth
    // await supabase.auth.signIn({
    //   provider: 'github',
    // }, {
    //   scopes: 'repo gist notifications'
    // }).then((result)=>{
    //   console.log(result);
    // })
    
  }

  return (
    <div className="App">
      <button onClick={signUp}>
        Sign up
      </button>
    </div>
  );
}

export default App;
