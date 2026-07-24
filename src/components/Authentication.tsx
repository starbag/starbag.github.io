import { createSignal } from 'solid-js';
import { loginUser, registerUser } from '../api/auth';
import './componentStyle/Authentication.scss';

export function Login(props) {
    let emailInput;
    let passwordInput;

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await loginUser(emailInput.value, passwordInput.value);
            console.log('Login success', data);
            localStorage.setItem('authToken', data.token);
        } catch (error) {
            console.error('Błąd logowania:', error.message);
            alert('Login failed: ' + error.message);
        }
    }

    return (
        <div class="loginBox authBox" classList={props.classList}>
            <form class="form login-form" onSubmit={handleSubmit}>
                <div class='fields'>
                    <div class='field email-field'>
                        <label for="loginEmail">Email</label>
                        <input ref={emailInput} id="loginEmail" type="email" required />
                    </div>

                    <div class='field password-field'>
                        <label for="loginPassword">Password</label>
                        <input ref={passwordInput} id="loginPassword" type="password" required />
                    </div>
                </div>

                <button class='submit-btn' type="submit">Log In</button>
            </form>
        </div>
    );
}

export function Register(props) {
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
        <div class="registerBox authBox" classList={props.classList}>
            <form class="form register-form" onSubmit={handleSubmit}>
                <div class='fields'>
                    <div class='field email-field'>
                        <label for="registerEmail">Email</label>
                        <input ref={emailInput} id="registerEmail" type="email" required />
                    </div>

                    <div class='field password-field'>
                        <label for="registerPassword">Password</label>
                        <input ref={passwordInput} id="registerPassword" type="password" required />
                    </div>
                </div>

                <button class='submit-btn' type="submit">Register</button>
            </form>
        </div>
    );
}

export default function Authentication() {
    const [loginSelected, setLoginSelected] = createSignal(false);
    const [registerSelected, setRegisterSelected] = createSignal(false);

    return (
        <div class="authentication-box">
            <h3 class='modes'>
                <span 
                    classList={{ activeText: loginSelected() }} 
                    onClick={() => { setLoginSelected(true); setRegisterSelected(false); }}
                >
                    Login
                </span> 
                | 
                <span 
                    classList={{ activeText: registerSelected() }} 
                    onClick={() => { setLoginSelected(false); setRegisterSelected(true); }}
                >
                    Register
                </span>
            </h3>

            <Login classList={{ active: loginSelected() }} />
            <Register classList={{ active: registerSelected() }} />
        </div>
    );
}