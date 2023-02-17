import React from 'react'
import { useSelector } from 'react-redux'
import { Route ,redirect} from 'react-router-dom';

const ProtectesRoute = ({componenet:Component,...rest}) => {
    const {loading,isAuthenticated,user}=useSelector(state=>state.user);
  return (
    <div>
      {
        !loading && (
            <Route {...rest} render={(props)=>{
                if(!isAuthenticated){
                    return redirect("/login")
                }
                return <Component {...props}/>
            }}/>
        )
      }
    </div>
  )
}

export default ProtectesRoute
