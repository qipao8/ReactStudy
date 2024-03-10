import RoleCarousel from './RoleCarousel';
import React, { useState } from 'react';

const RoleSelector = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleSelect = (role, isFinalSelection = false) => {
        setSelectedRole(role);
        if (isFinalSelection) {
            // 处理角色最终选择逻辑，如更新用户信息等
            console.log('角色选择完成:', role);
        }
    };
    const roles = [
        {
            id: 1,
            name: '逻辑大师',
            image: '/images/test.jpg',
            description: '擅长解决逻辑难题，帮助团队克服各种挑战。',
            skills: ['逻辑推理', '数独', '谜题解决']
        },
        {
            id: 12,
            name: '逻辑大师2',
            image: '/images/test2.jpg',
            description: '2擅长解决逻辑难题，帮助团队克服各种挑战。',
            skills: ['2逻辑推理', '数独', '谜题解决']
        },
        // 其他角色定义...
    ];

    return (
        <div>
            <RoleCarousel roles={roles} onSelect={handleSelect} />
            {selectedRole && (
                <div>
                    <h2>{selectedRole.name}</h2>
                    <p>{selectedRole.description}</p>
                    <ul>
                        {selectedRole.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RoleSelector;