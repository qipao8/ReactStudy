import React from 'react';
import Slider from 'react-slick';
const RoleCarousel = ({ roles, onSelect }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {roles.map(role => (
                    <div key={role.name} onClick={() => onSelect(role)}>
                        <img src={role.image} alt={role.name} />
                        <h3>{role.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default RoleCarousel;