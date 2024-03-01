import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 这里调用后端API进行登录
    const loginSuccess = await onLogin(username, password);
    if (loginSuccess) {
      // 处理登录成功，例如重定向到主页
      console.log("登录成功！");
    } else {
      // 处理登录失败，显示错误消息
      console.log("登录失败，请检查用户名和密码！");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">密码:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">登录</button>
    </form>
  );
}

export default LoginForm;
