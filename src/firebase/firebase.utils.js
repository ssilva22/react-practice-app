import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCm9kzyzielLQcvCPYON_IZQiAEqg5P_-A",
  authDomain: "react-project-de9df.firebaseapp.com",
  projectId: "react-project-de9df",
  storageBucket: "react-project-de9df.appspot.com",
  messagingSenderId: "5151838565",
  appId: "1:5151838565:web:d67e325076624c8184518c",
  measurementId: "G-G22HPRQDZX",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}
// Initialize Firebase

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
