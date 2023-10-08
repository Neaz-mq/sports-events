
import { Link } from "react-router-dom";


const Register = () => {
    // const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user

        // createUser(email, password)
        // .then(result => {
        //     console.log(result.user);
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    }
    return (
        <div className="my-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="text-4xl my-10 text-center font-bold pt-8">Please Register</h2>

        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Photo Url</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-semibold">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                </label>
            </div>

            <div className="form-control mt-6">
                <button className="btn  btn-accent">Register</button>
            </div>
        </form>
        <p className="text-center mt-4 pb-8 text-xl font-semibold">Already have an account? Please <Link className="text-white font-bold" to="/login">Login</Link></p>
    </div>

    );
};

export default Register;