import React, { useState } from 'react';
import customFetch from '../api'; // 导入自定义的fetch函数
import './RegistrationForm.css'; // 导入CSS样式
function RegistrationForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    // 使用useState Hook来管理表单字段的状态
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // 处理输入字段变化的函数
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // 处理表单提交的函数
    const handleSubmit = async (event) => {
        event.preventDefault(); // 阻止表单的默认提交行为
        // 简单的验证示例
        if (!formData.username.trim()) {
            alert("Username is required.");
            return;
        }
        if (!formData.email.includes('@')) {
            alert("Please enter a valid email.");
            return;
        }
        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        // 如果验证通过，发送数据到服务器
        setLoading(true);
        setError('');
        try {
            const response = await customFetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            console.log(response);
            if (response.ok) {
                setSuccess(true);
                // 可能还需要清除表单
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">注册成功！</p>}
                <button type="submit" className="form-button" disabled={loading}>Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
