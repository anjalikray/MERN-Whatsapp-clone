import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
    const clientId =
        "968113291643-ue25hd7u3b1249neuo7k7ai3q1fd9qrt.apps.googleusercontent.com";

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <AccountProvider>
                <Messenger />
            </AccountProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
