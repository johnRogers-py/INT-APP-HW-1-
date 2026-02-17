import dragonBall from './assets/dragon ball.png'
import './App.css'
/*
    1) profile picture, so iimg tag
    2) person's name, h1 tag
    3) short bio, p tag
*/
function Profile(){
    return (
        <>
            <img src={dragonBall} height= "100px" 
            width = "100px"alt= "profile picture"/>

            <h1 className="fancy">Son Goku</h1>

            <p className="bio"> 
                Lives in East District 439.<br></br>
                Loves to fight and Eat good food
                </p>
        </>
    )
}
export default Profile