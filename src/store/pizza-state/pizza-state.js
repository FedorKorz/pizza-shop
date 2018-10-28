import fourCheeses25cm from '../../assets/selling-tems/pizza/four-cheeses-25cm.jpg';
import fourCheeses30cm from '../../assets/selling-tems/pizza/four-cheeses-30cm.jpg';
import fourCheeses35cm from '../../assets/selling-tems/pizza/four-cheeses-35cm.jpg';

import margarita25cm from '../../assets/selling-tems/pizza/margarita-25cm.jpg';
import margarita30cm from '../../assets/selling-tems/pizza/margarita-30cm.jpg';
import margarita35cm from '../../assets/selling-tems/pizza/margarita-35cm.jpg';

import hawaiian25cm from '../../assets/selling-tems/pizza/hawaiian-25cm.jpg';
import hawaiian30cm from '../../assets/selling-tems/pizza/hawaiian-30cm.jpg';
import hawaiian35cm from '../../assets/selling-tems/pizza/hawaiian-35cm.jpg';

export default () => {
    return {
      goods: [{
          id: 1,
          title: 'Четыре сыра',
          consists: 'Томатный соус, моцарелла, сыр блючиз и смесь сыров чеддер и пармезан',
          img: {
            '25cm': fourCheeses25cm,
            '30cm': fourCheeses30cm,
            '35cm': fourCheeses35cm
          },
          price: {
            '25cm': 435,
            '30cm': 635,
            '35cm': 775
          },
          availableSize: ['25cm', '30cm', '35cm'],
          nutritionalValue: {
            energy: '246,5 ккал',
            carbohydrates: '28,6 г',
            proteins: '28,6 г',
            fats: '9,2 г',
            weight: '440±50 г'
          }
        },
        {
          id: 2,
          title: 'Маргарита',
          consists: 'Томатный соус, томаты, моцарелла и орегано',
          img: {
            '25cm': margarita25cm,
            '30cm': margarita30cm,
            '35cm': margarita35cm
          },
          price: {
            '25cm': 345,
            '30cm': 495,
            '35cm': 645
          },
          availableSize: ['25cm', '30cm', '35cm'],
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
          title: 'Гавайская',
          consists: 'Томатный соус, ананасы, моцарелла и цыпленок',
          img: {
            '25cm': hawaiian25cm,
            '30cm': hawaiian30cm,
            '35cm': hawaiian35cm
          },
          price: {
            '25cm': 100,
            '30cm': 200,
            '35cm': 300
          },
          availableSize: ['25cm', '30cm', '35cm'],
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
        type: 'pizza' 
    };  
}
;
