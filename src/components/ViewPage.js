
import moreIcon from "./images/more_icon.svg"
import likeIcon from "./images/heart.png"
import shareIcon from "./images/share.png"
function ViewPage({datas}){
    

    return <> { datas.map((data)=>{

        return <><div id="container" key={data.id}>
            <div id="profile-container">
            <h1 id="name-field">{data.name}</h1>
            <h2 id="location-field">{data.location}</h2>
            <img src={moreIcon} alt="img" id="more-img"/>
            </div>
            <div id="image-container">
                <img src={data.url} alt="img" />
            </div>
            
            <div id="image-footer">
            <img src={likeIcon} alt="img" />
            <img src={shareIcon} alt="img" />
            
            <p>{data.postedAt.slice(0,10).split("-").reverse().join("-")}</p>
            <p>{data.description}</p>
            </div>
            </div>
            </> })
   }
   </>

}
export default ViewPage