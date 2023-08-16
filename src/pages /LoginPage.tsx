import cover_image from './assets/cover_image.webp';

const colors  = {
    primary: "#060606",
    background: "#060606",
    disabaled: "#060606"
}
const Login  = () => {
 return(
    <div className ="w-full min-h-screen flex items-start">
        login Page 
        <div className=" relative w-1/2 h-full flex flex-col">
            <img src='./assets/cover_image.webp' className="w-full h-full" />
            
        </div>
    </div>
 )
}

export default Login;