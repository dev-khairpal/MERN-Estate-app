import { FcGoogle } from "react-icons/fc";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase';
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGoogleClick = async()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:result.user.displayName, email:result.user.email, photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/')
        }catch(err){
            console.log('could not sign in with google', err);
            
        }
    }
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-500 text-white p-2 rounded-md flex items-center justify-center gap-2"
    >
      <span className="bg-white p-1 rounded-md">
        <FcGoogle />
      </span>
      <span>Continue with Google</span>
    </button>
  );
};

export default OAuth;
