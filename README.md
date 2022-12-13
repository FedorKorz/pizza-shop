pizza-shop
=====================

The project is based on react+redux. A small website-application for selling pizzas and all that. The redux store stores data on the number of ordered units of goods and the total cost. I also used css-modules, routing and hoc.

Structure 
-----------------------------------
```
├── src
│   ├── actions
│   │   └── index.js
│   ├── App.js
│   ├── App.test.js
│   ├── assets
│   │   ├── header
│   │   │   └── icons
│   │   │       ├── combo.svg
│   │   │       ├── drinks.svg
│   │   │       └── pizza.svg
│   │   ├── selling-tems
│   │   │   ├── combo
│   │   │   │   ├── combo_three_cola.jpg
│   │   │   │   ├── combo_three.jpg
│   │   │   │   └── combo_two.jpg
│   │   │   ├── icons
│   │   │   │   └── menu.svg
│   │   │   └── pizza
│   │   │       ├── four-cheeses-25cm.jpg
│   │   │       ├── four-cheeses-30cm.jpg
│   │   │       ├── four-cheeses-35cm.jpg
│   │   │       ├── hawaiian-25cm.jpg
│   │   │       ├── hawaiian-30cm.jpg
│   │   │       ├── hawaiian-35cm.jpg
│   │   │       ├── margarita-25cm.jpg
│   │   │       ├── margarita-30cm.jpg
│   │   │       └── margarita-35cm.jpg
│   │   └── slider
│   │       ├── slider-arrows
│   │       │   ├── arrow-next.svg
│   │       │   └── arrow-prev.svg
│   │       └── slider-images
│   │           ├── carbonara.jpg
│   │           ├── footbal-pizza.jpg
│   │           └── lucky-five.jpg
│   ├── components
│   │   ├── Bars
│   │   │   └── SearchBar.js
│   │   ├── Cart
│   │   │   └── Cart.js
│   │   ├── Footer
│   │   │   ├── footer.css
│   │   │   └── Footer.js
│   │   ├── Header
│   │   │   ├── Cart
│   │   │   │   └── Cart.js
│   │   │   ├── header.css
│   │   │   └── Header.js
│   │   └── Main
│   │       ├── Bars
│   │       │   ├── search-bar.css
│   │       │   └── SearchBar.js
│   │       ├── Goods
│   │       │   ├── SellingItem
│   │       │   │   ├── NutritionalValue.js
│   │       │   │   ├── SellingItem.css
│   │       │   │   └── SellingItem.js
│   │       │   └── SellingItems.js
│   │       └── Sliders
│   │           ├── MainSlider
│   │           │   ├── SimpleSlider.css
│   │           │   └── SimpleSlider.js
│   │           ├── range-slider.css
│   │           └── RangeSlider.js
│   ├── hoc
│   │   ├── WrappedApp.js
│   │   ├── wrapped-selling-items.css
│   │   └── WrappedSellingItems.js
│   ├── index.css
│   ├── index.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── reducer_cart.js
│   │   └── reducer_total_price_cart.js
│   ├── registerServiceWorker.js
│   └── store
│       ├── combo-state
│       │   └── combo-state.js
│       ├── drinks-state
│       │   └── drinks-state.js
│       └── pizza-state
│           └── pizza-state.js
└── yamm_colors.png


```
Used technology
-----------------------------------
* react
* redux

How to run
-----------------------------------
* npm install
* npm start
* npm i react-css-modules

![](https://i.imgur.com/23MffJn.gif)
