import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-5">
                   <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                      <form onSubmit={handleLogin}>
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login"/>
                        </div>
                      </form>
                      <p className="my-4 text-center">New to car service <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;