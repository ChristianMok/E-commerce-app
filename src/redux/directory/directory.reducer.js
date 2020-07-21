const INITIAL_STATE = {
    sections: [
        {
            title: 'Computer case',
            imageUrl: 'images/shop-img/computercase/Fractal-Design-Focus-G.jpg',
            size: 'large',
            id: 1,
            linkUrl:'shop/computercase'
        },
        {
            title: 'Cooling',
            imageUrl: 'images/shop-img/cooling/Cooler-master-hyper-212.jpg',
            size: 'large',
            id: 2,
            linkUrl:'shop/cooling'
        },
        {
            title: 'Motherboards',
            imageUrl: 'images/shop-img/motherboards/Asus-x570-p.jpeg',
            size: 'large',
            id: 3 ,
            linkUrl:'shop/motherboards'

        },
        {
            title: 'Processors',
            imageUrl: 'images/shop-img/processors/intel-core-i7-9700k.jpg',
            size: 'large',
            id: 4,
            linkUrl:'shop/processors'
        },
        {
            title: 'Video Cards',
            imageUrl: 'images/shop-img/videocards/quadro-p5000-16gb.jpg',
            size: 'large',
            id: 5,
            linkUrl:'shop/videocards'
        },
        {
            title: 'Power Supplies',
            imageUrl: 'images/shop-img/powersupplies/gigabyte-p650b.jpg',
            size: 'large',
            id: 6,
            linkUrl:'shop/powersupplies'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;