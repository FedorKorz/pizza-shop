import React from 'react';

const footer = (props) => {
    return (
        <footer className = 'footer'>
            <div className = 'footer__info'>
                <ul>
                    <h2>Додо Пицца</h2>
                    <li><a>О нас</a></li>
                    <li><a>Додо-книга</a></li>
                    <li><a>Блог "Сила"</a></li>
                    <li><a>Додо ИС</a></li>
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
                <div>
                    <a className = 'telephone' href="">8-800-333-23-22</a> 
                        <br/>
                        Звонок бесплатный 
                        <br/>
                    <b>feedback@dodo-pizza.com</b>
                </div>
            </div>

        </footer>
    );
};

export default footer;