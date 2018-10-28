import comboThreeCola from '../../assets/selling-tems/combo/combo_three_cola.jpg';
import comboThree from '../../assets/selling-tems/combo/combo_three.jpg';
import comboTwo from '../../assets/selling-tems/combo/combo_two.jpg';

export default () => {
    return {
        goods: [{
          id: 1,
          title: 'Компания',
          consists: 'Пицца Четыре сыра 25см., Пицца Цыпленок BBQ 25см., Пицца Карбонара 25см., Кола 1л, Кола 1л.',
          img: {
            'combo': comboThreeCola
          },
          price: {
            'combo': 777
          },
          availableSize: [],
          nutritionalValue: {
            energy: '42 ккал',
            carbohydrates: '10,6 г',
            proteins: '0 г',
            fats: '0 г'
          }
        },
        {
          id: 2,
          title: 'Три хита',
          consists: 'Пицца Пепперони 25см., Пицца Ветчина и Грибы 25см., ',
          img: {
            'combo': comboThree
          },
          availableSize: [],
          price: {
            'combo': 999
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
          title: 'Мудрый гость',
          consists: '',
          img: {
            'combo': comboTwo,
          },
          availableSize: [],
          price: {
            'combo': 1140
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
        type: 'combo' 
    };  
};
