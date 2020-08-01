/* Used as starting data for ShopPage */

const SHOP_DATA = {
    computercase:{
      id: 1,
      title: 'Computer Case',
      routeName: 'computercase',
      items: [
        {
          id: 1,
          name: 'Fractal Design Focus G Mid Tower ATX Case w/ Window, Black',
          imageUrl: 'https://i.ibb.co/p3YHDHh/Fractal-Design-Focus-G.jpg',
          //imageUrl: "images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 85
        },
        {
          id: 2,
          name: 'Fractal Design Meshify C Dark TG Mid Tower ATX Case w/ Tempered Glass Window, Black',
          imageUrl: 'https://i.ibb.co/9Y94vb9/Fractal-Design-Meshify-C-Dark-TG-Mid-Tower-ATX-Case-w-Tempered-Glass-Window-Black.jpg',
          //imageUrl: "images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 150
        },
        {
          id: 3,
          name: 'Fractal Design Focus G ATX Case w/ Window, White',
          imageUrl: 'https://i.ibb.co/1mYrN1q/Fractal-Design-Focus-G-ATX-Case-w-Window-White.jpg',
          //imageUrl: "images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 85
        },
        {
          id: 4,
          name: 'Fractal Design Core 1000 Case, Black w/ USB 3.0',
          imageUrl: 'https://i.ibb.co/J5T1wV4/Fractal-Design-Core-1000-Case-Black-w-USB-3-0.jpg',
          //imageUrl: "images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 65
        },
        {
          id: 5,
          name: 'Fractal Design Define 7 ATX Case, Black Solid',
          imageUrl: 'https://i.ibb.co/NSV5XnK/Fractal-Design-Define-7-ATX-Case-Black-Solid.jpg',
          //imageUrl: "images/shop-img/computercase/Fractal-Design-Focus-G.jpg",
          price: 230
        }
      ]
    },
    cooling:{
      id: 2,
      title: 'Cooling',
      routeName: 'cooling',
      items: [
        {
          id: 10,
          name: 'Cooler Master Hyper 212 EVO CPU Cooler',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "https://i.ibb.co/ZNcMHjT/Cooler-master-hyper-212.jpg", 
          price: 50
        },
        {
          id: 11,
          name: 'Cooler Master Hyper 212 Black Edition CPU Cooler',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: 'https://i.ibb.co/x3VZx8w/Cooler-Master-Hyper-212-Black-Edition-CPU-Cooler.jpg', 
          price: 50
        },
        {
          id: 12,
          name: 'Cooler Master MasterLiquid ML240L RGB CPU Cooler',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "https://i.ibb.co/tMKxXbg/Cooler-Master-Master-Liquid-ML240-L-RGB-CPU-Cooler.jpg", 
          price: 100
        },
        {
          id: 13,
          name: 'Cooler Master Hyper 212 LED CPU Cooler w/ 120mm PWM Red LED Fan',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "https://i.ibb.co/NpmHSMM/Cooler-Master-Hyper-212-LED-CPU-Cooler-w-120mm-PWM-Red-LED-Fan.jpg", 
          price: 35
        },
        {
          id: 14,
          name: 'Cooler Master MasterLiquid ML240R RGB Liquid CPU Cooler',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "https://i.ibb.co/QXq2xDk/Cooler-Master-Master-Liquid-ML240-R-RGB-Liquid-CPU-Cooler.jpg", 
          price: 150
        }
      ]
    },
    motherboards:{
      id: 3,
      title: 'MotherBoards',
      routeName: 'motherboards',
      items: [
        {
          id: 18,
          name: 'Asus PRIME X570-P w/ DDR4, 7.1 Audio, Gb LAN, CrossFireX',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "https://i.ibb.co/L1RS3k2/Asus-x570-p.jpg",
          price: 215
        },
        {
          id: 19,
          name: 'Asus ROG STRIX B450-F GAMING w/ DDR4-2666, 7.1 Audio, Gigabit LAN, 3-Way CrossFire',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "https://i.ibb.co/Jcx41Bj/ROG-STRIX-B450-F-GAMING-w-DDR4-2666-7-1-Audio-Gigabit-LAN-3-Way-Cross-Fire.jpg",
          price: 189
        },
        {
          id: 20,
          name: 'Asus TUF GAMING X570-PLUS (Wi-Fi) w/ DDR4, 7.1 Audio, Gigabit LAN, 802.11ac, BT 5.0, CrossFire',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "https://i.ibb.co/0XC5sHN/TUF-GAMING-X570-PLUS-Wi-Fi-w-DDR4-7-1-Audio-Gigabit-LAN-802-11ac-BT-5-0-Cross-Fire.jpg",
          price: 280
        },
        {
          id: 21,
          name: 'Asus PRIME B450M-A/CSM w/ DDR4-2666, 7.1 Audio, Gigabit LAN, PCI-E x16',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "https://i.ibb.co/2v5DZLR/final.jpg",
          price: 115
        },
        {
          id: 22,
          name: 'Asus Prime Z390-A w/ DDR4 2666, 7.1 Audio, Gigabit LAN, CrossFireX / SLI',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "https://i.ibb.co/LCWCFWc/Prime-Z390-A-w-DDR4-2666-7-1-Audio-Gigabit-LAN-Cross-Fire-X-SLI.jpg",
          price: 260
        },
      ]
    },
    processors:{
      id: 4,
      title: 'Processors',
      routeName: 'processors',
      items: [
        {
          id: 23,
          name: 'Intel Core™ i7-9700K Processor, 3.6GHz w/ 12MB Cache',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "https://i.ibb.co/Jcz3LWb/intel-core-i7-9700k.jpg",
          price: 579
        },
        {
          id: 24,
          name: 'Intel Core™ i9-9900K Processor, 3.6GHz w/ 16MB Cache',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "https://i.ibb.co/xSd34CQ/Core-i9-9900-K-Processor-3-6-GHz-w-16-MB-Cache.jpg",
          price: 660
        },
        {
          id: 25,
          name: 'Core™ i5-9400 Processor, 2.9GHz w/ 9MB Cache',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "https://i.ibb.co/ZG7P80v/Core-i5-9400-Processor-2-9-GHz-w-9-MB-Cache.jpg",
          price: 220
        },
        {
          id: 26,
          name: 'Intel Core™ i5-10400 Processor, 2.9GHz w/ 6 Cores / 12 Threads',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "https://i.ibb.co/ft76VgK/Core-i5-10400-Processor-2-9-GHz-w-6-Cores-12-Threads.jpg",
          price: 250
        },
        {
          id: 27,
          name: 'Core™ i7-10700K Processor, 3.8GHz w/ 8 Cores / 16 Threads',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "https://i.ibb.co/99cvxNt/Core-i7-10700-K-Processor-3-8-GHz-w-8-Cores-16-Threads.jpg",
          price: 579
        },
      ]
    },
    videocards:{
      id: 5,
      title: 'Video Cards',
      routeName: 'videocards',
      items: [
        {
          id: 30,
          name: 'PNY Quadro P5000 16GB PCI-E w/ DVI, Quad DP',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "https://i.ibb.co/30xcdHQ/quadro-p5000-16gb.jpg",
          price: 2500
        },
        {
          id: 31,
          name: 'GIGABYTE GeForce RTX 2070 Super GAMING OC 3X 8G Graphics Card, 3 x WINDFORCE Fans, 8GB 256-Bit GDDR6, GV-N207SGAMING OC-8GD Video Card',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "https://i.ibb.co/wrQD0PN/GIGABYTE-RTX2070.jpg",
          price: 779
        },
        {
          id: 32,
          name: 'MSI GeForce RTX 2060 DirectX 12 RTX 2060 VENTUS XS 6G OC 6GB 192-Bit GDDR6 PCI Express 3.0 x16 HDCP Ready Video Card',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "https://i.ibb.co/wg7xLTh/msi-RTX2060.jpg",
          price: 450
        },
        {
          id: 33,
          name: 'MSI GeForce GTX 1660 DirectX 12 GTX 1660 VENTUS XS 6G OC 6GB 192-Bit GDDR5 PCI Express 3.0 x16 HDCP Ready Video Card',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "https://i.ibb.co/XsS0BCZ/MSI-GTX1660.jpg",
          price: 333
        },
        {
          id: 34,
          name: 'MSI GeForce RTX 2070 DirectX 12 RTX 2070 ARMOR 8G 8GB 256-Bit GDDR6 PCI Express 3.0 x16 HDCP Ready Video Card',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "https://i.ibb.co/tDyG4Rf/MSI-RTX2070.jpg",
          price: 560
        },
      ]
    },
    powersupplies:{
        id: 6,
        title: 'Power Supplies',
        routeName: 'powersupplies',
        items: [
          {
            id: 36,
            name: 'EVGA Supernova 750 GA 750W 80 PLUS GOLD Fully Modular Power Supply',
            // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            imageUrl: "https://i.ibb.co/ZKNJ5jy/evga-750ga.jpg" ,
            price: 194
          },
          {
            id: 37,
            name: 'EVGA Supernova 550 GA 550W 80 PLUS Gold Fully Modular Power Supply',
            // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            imageUrl: "https://i.ibb.co/XkdCpPk/evga-550ga.jpg",
            price: 160
          },
          {
            id: 38,
            name: 'EVGA SuperNOVA 650 GA, 80 Plus Gold 650W, Fully Modular Power Supply',
            // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            imageUrl: "https://i.ibb.co/2Ph7dn4/evga-650a.jpg",
            price: 179
          },
          {
            id: 39,
            name: 'EVGA SuperNOVA 850 GA, 80 Plus Gold 850W, Fully Modular',
            // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            imageUrl: "https://i.ibb.co/p04QzbH/evga-850ga.jpg",
            price: 217
          },
        ]
      }
    };
  
  export default SHOP_DATA;