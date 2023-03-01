import "./Styles/LogInPage.css"
import IcomImage from "./images/icon.svg"
import cameraImg from "./images/camera.png"
import FileUpload from "./FileUpload"
import { useEffect, useState } from "react"
import ViewPage from "./ViewPage"
function PostView() {
    const [datas,setData]=useState([])
    const [viewpage,setViewPage]=useState(true)
    const [alert,setAlert]=useState("")
    const [isActive,setIsActive]=useState(true)
    useEffect(()=>{
        fetch("https://instaclone-backened-webservice.onrender.com/post")
        .then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))
        
       },[])
        return <div id="main-div">
            <nav id="nav-bar">
                <div id="title-div">
                    <div id="img-div">
                <img src={IcomImage} alt="img" id="nav-round-icon" />
                </div>
                <h1 id="title">Instaclone</h1>
                </div>
                <img src={cameraImg} alt="img" id="nav-camera-icon" onClick={(e)=>{
                    setViewPage(data=>!data)
                    setIsActive(true)
                }}/>
            </nav>
           { 
           viewpage ? <div id="userdata-div">    
                <ViewPage  datas={datas}/>
            </div>:
            <div>               
                <FileUpload alert={alert} setAlert={setAlert} setViewPage={setViewPage}
                 setData={setData} setIsActive={setIsActive} isActive={isActive}/> 
                </div>    }       
            </div>
}        

export default PostView