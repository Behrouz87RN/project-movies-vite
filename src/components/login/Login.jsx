import "./login.css";

export const Login = () => {
  return (
    <div className="login-container">
        
        <form className="login-input-container">
            <h1>Login here</h1>
            <label className="questions name">Your login name: 
                <input
                    type="text"
                    placeholder="Login name here..."
                    // value=""
                    // onChange={userName}
                />
            </label>
            <label className="questions password">Your password:  
                <input
                    type="password"
                    placeholder="Password here..."
                    // value=""
                    // onChange={password}
                />
            </label>
            <button className="submit">Log In</button>
        </form>
    </div>
  )
}