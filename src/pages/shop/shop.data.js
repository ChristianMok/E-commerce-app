/* Used as starting data for ShopPage */

const SHOP_DATA = [
    {
      id: 1,
      title: 'Computer Case',
      routeName: 'computercase',
      items: [
        {
          id: 1,
          name: 'Fractal Design Focus G Mid Tower ATX Case w/ Window, Black',
          //imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          imageUrl: "images/images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 85
        }
      ]
    },
    {
      id: 2,
      title: 'Cooling',
      routeName: 'cooling',
      items: [
        {
          id: 10,
          name: 'Cooler Master Hyper 212 EVO CPU Cooler',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "images/images/shop-img/cooling/Cooler-master-hyper-212.jpg", 
          price: 50
        }
      ]
    },
    {
      id: 3,
      title: 'MotherBoards',
      routeName: 'motherboards',
      items: [
        {
          id: 18,
          name: 'Asus PRIME X570-P w/ DDR4, 7.1 Audio, Gb LAN, CrossFireX',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "images/images/shop-img/motherboards/Asus-x570-p.jpeg",
          price: 215
        }
      ]
    },
    {
      id: 4,
      title: 'Processors',
      routeName: 'processors',
      items: [
        {
          id: 23,
          name: 'Intel Core™ i7-9700K Processor, 3.6GHz w/ 12MB Cache',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "images/images/shop-img/processors/intel-core-i7-9700k.jpg",
          price: 579
        }
      ]
    },
    {
      id: 5,
      title: 'Video Cards',
      routeName: 'videocards',
      items: [
        {
          id: 30,
          name: 'PNY Quadro P5000 16GB PCI-E w/ DVI, Quad DP',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "images/images/shop-img/videocards/quadro-p5000-16gb.jpg",
          price: 2500
        }
      ]
    },
    {
        id: 6,
        title: 'Power Supplies',
        routeName: 'powersupplies',
        items: [
          {
            id: 36,
            name: 'Gigabyte P650B Power Supply, 80+ Bronze, 650W',
            // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            imageUrl: "images/images/shop-img/powersupplies/gigabyte-p650b.jpg",
            price: 100
          }
        ]
      }
  ];
  
  export default SHOP_DATA;