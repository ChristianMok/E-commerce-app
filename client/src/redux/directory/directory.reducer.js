const INITIAL_STATE = {
    sections: [
        {
            title: 'Computer case',
            imageUrl: 'https://i.ibb.co/NSV5XnK/Fractal-Design-Define-7-ATX-Case-Black-Solid.jpg',
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
          imageUrl: "https://i.ibb.co/2v5DZLR/final.jpg",
            size: 'large',
            id: 3 ,
            linkUrl:'shop/motherboards'

        },
        {
            title: 'Processors',
            imageUrl: 'https://i.ibb.co/ft76VgK/Core-i5-10400-Processor-2-9-GHz-w-6-Cores-12-Threads.jpg',
            size: 'large',
            id: 4,
            linkUrl:'shop/processors'
        },
        {
            title: 'Video Cards',
            imageUrl: 'https://i.ibb.co/tDyG4Rf/MSI-RTX2070.jpg',
            size: 'large',
            id: 5,
            linkUrl:'shop/videocards'
        },
        {
            title: 'Power Supplies',
            imageUrl: 'https://i.ibb.co/p04QzbH/evga-850ga.jpg',
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