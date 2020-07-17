import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Computer case',
                    imageUrl: 'images/images/shop-img/computercase/Fractal-Design-Focus-G.jpg',
                    size: 'large',
                    id: 1,
                    linkUrl:'Computer case'
                },
                {
                    title: 'Cooling',
                    imageUrl: 'images/images/shop-img/cooling/Cooler-master-hyper-212.jpg',
                    size: 'large',
                    id: 2,
                    linkUrl:'Cooling'
                },
                {
                    title: 'Motherboards',
                    imageUrl: 'images/images/shop-img/motherboards/Asus-x570-p.jpeg',
                    size: 'large',
                    id: 3 ,
                    linkUrl:'Motherboards'

                },
                {
                    title: 'Processors',
                    imageUrl: 'images/images/shop-img/processors/intel-core-i7-9700k.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl:'Processors'
                },
                {
                    title: 'Video Cards',
                    imageUrl: 'images/images/shop-img/videocards/quadro-p5000-16gb.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl:'Video Cards'
                },
                {
                    title: 'Power Supplies',
                    imageUrl: 'images/images/shop-img/powersupplies/gigabyte-p650b.jpg',
                    size: 'large',
                    id: 6,
                    linkUrl:'Power Supplies'
                },
            ]
        };
    }



    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...othersSectionProps}) => (
                    <MenuItem key={id} {...othersSectionProps} />
                ))}
            </div>
        );

    }

}

export default Directory;