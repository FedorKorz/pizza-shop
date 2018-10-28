import React from 'react';
import styles from './footer.css';

const footer = (props) => {
    return (
        <footer className = 'footer'>
            <div className = 'footer__info'>
                <ul>
                    <h2>Ололо Пицца</h2>
                    <li><a>О нас</a></li>
                    <li><a>Ололо-книга</a></li>
                    <li><a>Блог</a></li>
                    <li><a>ИС</a></li>
                </ul>
                <ul>
                    <h2>Вакансии</h2>
                    <li><a>В пиццерии</a></li>
                    <li><a>В контакт-центре</a></li>
                </ul>
                <ul>
                    <h2><a>Партнерам</a></h2>
                    <li><a>Франшиза</a></li>
                    <li><a>Инвестиции</a></li>
                    <li><a>Ищем поставщиков</a></li>
                    <li><a>Предложить помещение</a></li>
                </ul>
                <ul>
                    <h2><a>Это интересно</a></h2>
                    <li><a>Почему мы готовим без перчаток?</a></li>
                    <li><a>Экскурсии и мастер-классы</a></li>
                </ul>
                <div className = 'feedback'>
                    <a className = 'telephone' href="">8-800-555-35-35</a> 
                        <br/>
                        Звонок бесплатный 
                        <br/>
                    <b>feedback@lolo-pizza.com</b>
                </div>
            </div>

        </footer>
    );
};

export default footer;