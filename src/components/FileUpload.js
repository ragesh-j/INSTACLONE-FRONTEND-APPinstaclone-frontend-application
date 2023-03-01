import { useEffect, useRef, useState } from "react"
import "./Styles/Post.css"
export default function FileUpload({setData,setAlert,alert,setViewPage,setIsActive,isActive}) {
    const [filePath, setFilePath] = useState('');
    const fileInputRef = useRef(null);
    const [message,setMessage]=useState("")
     const [formData,setFormData]=useState({
      name:"",
      location:"",
      description:"",
      url:""
     })
    const [image,setImage]=useState("")
    function handleFileSelect(event) {
      const file = event.target.files[0];
      setFilePath(file ? file.name : '');
      setImage(file)
    }
  
    function handleButtonClick() {
      fileInputRef.current.click();
    }

    async function cloudinaryFetch(value){
      const response=await fetch("https://api.cloudinary.com/v1_1/dql4bctke/image/upload",{
        method:"POST",
        body:value
      })
      const data = await response.json()
      return data.url
    }
    function isValid(){
    
      if(!formData.name && !formData.location && !formData.description){
        setAlert("Please fill all fields")
        return false
      }
      else if(!formData.name){
        setAlert("Please enter the name")
        return false
      }
      else if(!formData.location){
        setAlert("Please enter location")
        return false
      }
      else if(!image){
        setAlert("Please select image")
        return false
      }
      else if(!formData.description){
        setAlert("Please enter description")
        return false
      }
      setAlert("")
      return true
      }
     
   
    const onSubmitHandler=async(e)=>{
      e.preventDefault()
      if(isValid()){
        setIsActive(false)
      const data=new FormData()
       data.append("file",image)
      data.append("upload_preset","insta_clone_ragesh")
      data.append("cloud_name","dql4bctke")
      const imageUrl=await cloudinaryFetch(data) 
      setFormData(val=>({...val,url:imageUrl}))
      
      }
      
    }

    
    useEffect(()=>{ 
      if(formData.url){ 
        
      fetch("https://instaclone-backened-webservice.onrender.com/post",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
    }).then(res=>res.json()).then(data=>setMessage(data.message)).catch(error=>console.log(error))
  }
  },[formData.url])
  useEffect(()=>{
    if(message){
    fetch("https://instaclone-backened-webservice.onrender.com/post")
    .then(res=>res.json()).then(data=>setData(data))
    setMessage("")
    setViewPage(true)
    }
  },[message])
  
    return (
      <>
      <form id="posting-div" onSubmit={onSubmitHandler}>
      {alert && <div style={{color:"red",textAlign:"center"}}>{alert}</div>}
      <div id="file-browse-div">
        <input
          id="imageInput"
          type="file"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          ref={fileInputRef} 
        />
        <input
          id="imagePath"
          type="text"
          readOnly
          value={filePath}
        />
        <button type="button" onClick={handleButtonClick}>
          Browse
        </button>
      </div>
      <div id="user-detail-div">
        <input type="text" id="Author" placeholder="Author" onChange={(e)=>{
          setFormData(val=>{
            return {
              ...val,
              name:e.target.value
            }
          })
        }}/>
        <input type="text" id="location" placeholder="Location" onChange={(e)=>{
          setFormData(val=>{
            return {
              ...val,
              location:e.target.value
            }
          })
        }} />
      </div>
      <div id="description-div">
        <input type="text" placeholder="description" onChange={(e)=>{
          setFormData(val=>{
            return {
              ...val,
              description:e.target.value
            }
          })
        }} />
      </div>
      <div id="post-btn">
          <button type="submit" className={isActive ? "":"hide-btn"}>Post</button>
        </div>
      </form>
      
      </>
      )
      }