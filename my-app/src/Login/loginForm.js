import React, { useState } from 'react';
import customFetch from '../api'; // 导入自定义的fetch函数
import './Login.css'; // 引入CSS文件
async function handleLogin(username, password) {
    try {
        // 使用fetch或axios发送请求到登录API
        const response = await customFetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
        const data = response
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
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 这里调用后端API进行登录
        const loginSuccess = await handleLogin(username, password);
        if (loginSuccess) {
            // 处理登录成功，例如重定向到主页
            console.log("登录成功！");
        } else {
            // 处理登录失败，显示错误消息
            console.log("登录失败，请检查用户名和密码！");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
