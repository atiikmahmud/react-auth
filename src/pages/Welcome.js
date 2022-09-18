import Guestnavbar from "../components/GuestNavbar";

export default function Welcome() {
    return(
        <div>
            <Guestnavbar/>    
            <div className="body-area pt-5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" style={{ height: "300px", display: "block", margin: "auto"}}/>
                <h1 className="text-center mt-5">Welcome to React JS</h1>
            </div>   
        </div>
    );
}