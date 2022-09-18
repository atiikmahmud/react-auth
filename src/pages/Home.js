import Navbar from "../components/Navbar";

export default function Home() {
    
    return(
        <div>
            <Navbar />
            <div className="body-area pt-5">
                <img src="https://miro.medium.com/max/1000/1*09JeFSgDstcw_i4Aq1ax4w.png" alt="" style={{ height: "500px", display: "block", margin: "auto"}}/>
            </div>
        </div>
    );
}