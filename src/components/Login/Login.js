import React from 'react'
import classes from "./Login.module.scss"
import {FaLock,FaEnvelope} from "react-icons/fa"
import { useForm } from "react-hook-form";

const Login = ({Register})=>{ 
    const { register, handleSubmit, errors } = useForm();
    

    const onSubmit = data => {
        console.log(Register,data)
    };

return (
    <div className={classes.Background}>
        <div className={classes.Login}>
            <img src="/images/VDS28.png" alt="Logo"/>

            {
                Register ? 
                    <>                                
                        <p>Join thousands of learners around the world</p>

                        <span>Master web development by making real-life projects. There are
                            multiple paths for you to choose
                        </span>
                        
                    </>
                :
                    <p>
                        Login
                    </p>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.Campo}>
                    <input ref={register({required:true})} type="email" name="email" placeholder="Email"/>
                    <FaEnvelope className={classes.Icon}/>
                    {errors.email && <span className={classes.Error}>This field is required</span>}
                </div>
                <div className={classes.Campo}>
                    <input ref={register({required:true})} type="password" name="password" placeholder="Password"/>
                    <FaLock className={classes.Icon}/>
                    {errors.password && <span className={classes.Error}>This field is required</span>}
                </div>
                <div className={classes.Campo}>
                    <input type="submit" value={Register?"Start coding now":"Login"}/>
                </div>  
            </form>

            <div className={classes.Footer}>
                <span>or continue with these social profile</span>
                <div className={classes.Social}>
                    <div className={classes.SocialContent}>
                        <img src="/images/Google.svg" alt="SocialMedia"/>
                    </div>
                    <div className={classes.SocialContent}>
                        <img src="/images/Facebook.svg" alt="SocialMedia"/>
                    </div>
                    <div className={classes.SocialContent}>
                        <img src="/images/Twitter.svg" alt="SocialMedia"/>
                    </div>
                    <div className={classes.SocialContent}>
                        <img src="/images/Gihub.svg" alt="SocialMedia"/>
                    </div>
                </div>
                {
                    Register ?         
                        <span>Already a membre?<a href="/">Login</a></span>
                    :    
                        <span>Don't have an account yet?<a href="/">Register</a></span>
                }
            </div>
        </div>
    </div>
) 
}

export default Login