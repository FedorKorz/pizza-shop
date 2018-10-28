export default () => {
    return {
        goods: [{
          id: 1,
          title: 'Seven Up',
          consists: '',
          img: {
            '0.5l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/dcbaf0ah1r.jpg',
            '1l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/dcbaf0ah1r.jpg',
            '2l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/dcbaf0ah1r.jpg'
          },
          price: {
            '0.5l': 40,
            '1l': 70,
            '2l': 120
          },
          availableSize: ['0.5l', '1l', '2l'],
          nutritionalValue: {
            energy: '42 ккал',
            carbohydrates: '10,6 г',
            proteins: '0 г',
            fats: '0 г'
          }
        },
        {
          id: 2,
          title: 'Mirinda',
          consists: '',
          img: {
            '0.5l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/jv237.jpg',
            '1l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/jv237.jpg',
            '2l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/jv237.jpg'
          },
          availableSize: ['0.5l', '1l', '2l'],
          price: {
            '0.5l': 39,
            '1l': 59,
            '2l': 99
          },
          nutritionalValue: {
            energy: '246,5 ккал',
            carbohydrates: '28,6 г',
            proteins: '28,6 г',
            fats: '9,2 г',
            weight: '440±50 г'
          }
        },
        {
          id: 3,
          title: 'Pepsi',
          consists: '',
          img: {
            '0.5l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/ncvga7f.jpg',
            '1l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/ncvga7f.jpg',
            '2l': 'https://www.yummpizza.ru/upload/endy_module_images/images_items/big/ncvga7f.jpg'
          },
          availableSize: ['0.5l', '1l', '2l'],
          price: {
            '0.5l': 39,
            '1l': 49,
            '2l': 99
          },
          nutritionalValue: {
            energy: '246,5 ккал',
            carbohydrates: '28,6 г',
            proteins: '28,6 г',
            fats: '9,2 г',
            weight: '440±50 г'
          }
        }],
        searchInput: '',
        priceRange: 0,
        type: 'drinks' 
    };  
};
