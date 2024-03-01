import './App.css';
import LoginForm from './Login/loginForm';
async function handleLogin(username, password) {
    try {
        // 使用fetch或axios发送请求到登录API
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.success) {
            // 登录成功处理，如保存token，重定向等
            return true;
        } else {
            // 登录失败处理
            return false;
        }
    } catch (error) {
        console.error('登录请求失败', error);
        return false;
    }
}

function App() {
    return (
        <div className="App">
            <LoginForm onLogin={handleLogin} />
        </div>
    );
}

export default App;
