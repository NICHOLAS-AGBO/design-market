import {faXmarkSquare} from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "./Fontawesome";
import {useEffect, useState} from "react";


export default function Form(){
    const [state, setState] = useState(false);
    const [reg, setReg] = useState(false);

    useEffect(() => {
        const sign = document.querySelector(".sign-in");
        sign!.addEventListener("click",()=> setState(true));
    }, []);

    return(
        <>

            <style id={"pop-closed"}>
                {
                    state?`
                body{ overflow: hidden; }
                `:`
                #backdrop{ display: none; }
                `
                }
            </style>

            <div className="popup" role="dialog">
                <button className="close" onClick={()=>setState(false)}>
                    <FontAwesomeIcon icon={faXmarkSquare}/>
                </button>
                <h3>{reg?"Sign up":"Sign in"}</h3>
                <form id="account">
                    {reg&&
                        <label>
                            <input type="text" name="fullname" placeholder="Enter fullname, e.g. John Doe" required/>
                        </label>
                    }
                    <label>
                        <input type="email" name="email" placeholder="johndoe@gmail.com" required/>
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="*******" required/>
                    </label>
                </form>
                {
                    reg? <button form="account" className="signup">Create an account</button>:
                        <button form="account" className="login">Log in</button>
                }
                <button className="sign-google">
                    <FontAwesomeIcon icon={faGoogle}/>
                    Continue with Google
                </button>
                <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    setReg(prevState => !prevState);
                }}>
                    {reg?"Already a user? Sign in":"Register an account"}
                </a>
            </div>
        </>
    );
}