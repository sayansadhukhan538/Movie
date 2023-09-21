import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    function func(){
        navigate('/')
    }
    useEffect(()=>{
    },[])
  return (
    <div className="header">
        <p onClick={func}>Movie App</p>
    </div>
  )
}

export default Header