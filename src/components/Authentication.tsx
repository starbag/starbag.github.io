import { loginUser, registerUser } from '../api/auth';

export function Login() {
    let emailInput;
    let passwordInput;

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const data = await loginUser(emailInput.value, passwordInput.value);
            console.log('Zalogowano pomyślnie!', data);
            
            localStorage.setItem('authToken', data.token);
        } catch (error) {
            console.error('Błąd logowania:', error.message);
            alert('Nie udało się zalogować: ' + error.message);
        }
    }

    return (
        <div class="loginBox">
            <form class="form login-form" onSubmit={handleSubmit}>
                <div>
                    <label for="loginEmail">Email</label>
                    <input ref={emailInput} id="loginEmail" type="email" required />
                </div>

                <div>
                    <label for="loginPassword">Password</label>
                    <input ref={passwordInput} id="loginPassword" type="password" required />
                </div>

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export function Register() {
    let emailInput;
    let passwordInput;

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const data = await registerUser(emailInput.value, passwordInput.value);
            console.log('Zarejestrowano pomyślnie!', data);
            alert('Konto zostało utworzone! Możesz się teraz zalogować.');
        } catch (error) {
            console.error('Błąd rejestracji:', error.message);
            alert('Nie udało się zarejestrować: ' + error.message);
        }
    }

    return (
        <div class="registerBox">
            <form class="form register-form" onSubmit={handleSubmit}>
                <div>
                    <label for="registerEmail">Email</label>
                    <input ref={emailInput} id="registerEmail" type="email" required />
                </div>

                <div>
                    <label for="registerPassword">Password</label>
                    <input ref={passwordInput} id="registerPassword" type="password" required />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default function Authentication() {
    return (
        <div class="authentication-box">
            <h3>
                <span>Login</span> / 
                <span>Register</span>
            </h3>

            <Login />
            <hr />
            <Register />
        </div>
    );
}