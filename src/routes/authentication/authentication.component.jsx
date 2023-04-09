// import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     // console.log(response)
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user)
    // }

    return (
        <div className='authentication-container'>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;