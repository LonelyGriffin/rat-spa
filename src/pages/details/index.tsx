import React from 'react';
import css from './index.module.css';
import headerImg from "./img/header.jpg";
import Link from "redux-first-router-link";
import {ROUTE_TYPES} from "../../router/routes_map";

const BREEDS_DATA = [
    {
        name: "Стандартные",
        img: require("./img/standart_breed.jpg")
    },
    {
        name: "Кудрявыe",
        img: require("./img/curly_breed.jpg")
    },
    {
        name: "Беcхвостыe",
        img: require("./img/without_tail_breed.jpg")
    },
    {
        name: "Сфинксы",
        img: require("./img/sphinx_breed.jpg")
    },
    {
        name: "Атласные",
        img: require("./img/atlas_breed.jpg")
    },
    {
        name: "Дамбо",
        img: require("./img/atlas_breed.jpg")
    },
];

export const DetailsPage = () => {
    return (
        <div className={css.root}>
            <header className={css.header_section}>
                <h1>Декоративная крыса</h1>
                <div className={css.header_content}>
                    <span>
                        <p>
                            Крысы очень смышленые животные, нисколько не уступающие по умственным способностям кошкам и собакам, почти не издают неприятного запаха, которым отличаются многие млекопитающие.
                        </p>
                        <p>
                            Декоративных крыс можно дрессировать, и они становятся еще интереснее, чем те зверьки, которых только что купили в зоомагазине.
                        </p>
                        <p>
                            Для тех, кто любит животных, но не обладает достаточным временем или возможностями, декоративная крыса может стать домашним любимцем и другом.
                        </p>
                    </span>
                    <img className={css.header_img} src={headerImg} alt="Декоративная крыса"/>
                </div>
            </header>
            <section className={css.section}>
                <h2>Породы декоративных крыс</h2>
                <ul className={css.breeds}>
                    {BREEDS_DATA.map((breed) => (
                        <li className={css.breed}>
                            {breed.name}
                            <Link to={{type: ROUTE_TYPES.BREED, payload: {id: breed.name}}} className={css.breed_cover}>
                                <img className={css.breed_cover_img} src={breed.img} alt={breed.name}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={css.section}>
                <h2>Как ухаживать:</h2>
                <h3>Содержание</h3>
                <p>
                    Для крыс лучше всего подходят специальные крысиные клетки либо многоуровневые клетки для хорьков или шиншилл. Клетки для хомяков обычно слишком малы, а колеса слишком маленького размера опасны для крыс и могут привести к травмам хвоста. По правилам, выработанными крысоводами мира считается, что размер клетки на одну крысу должен быть не менее 60 кубических дециметров или 60 литров.
                    Клетку лучше оборудовать поилкой, миску для воды крыса или перевернет, играя, или будет бросать в нее все, что попадется под лапу. Воду нужно менять каждый день. Не стоит держать крыс в банках или аквариумах – в банке зверьку будет слишком тесно, да и чистить жилище будет куда сложнее.
                    Для того, чтоб крыса стачивала зубы, рекомендуем приобрести в магазине специальные минеральные камни.
                    В качестве наполнителя лучше всего использовать целлюлозные, кукурузные или целлюлозно-минеральные наполнители. Сено плохо впитывает запах, а опилки могут служить источником клещей. Крысам так же противопоказаны наполнители из хвойных пород дерева, так как их смолы крайне вредны для дыхательной системы. Крыс необходимо оградить от сквозняков и прямых солнечных лучей.
                </p>
                <h3>Чем кормить</h3>
                <p>
                    Чистить клетку зверька нужно не слишком часто, потому что крысы предпочитают находиться в среде их естественного запаха. Один, максимум два раза в неделю можно почистить клетку питомца. Таким образом, и крыса останется довольна, и по комнате не будет гулять не слишком приятный аромат. Если чистить клетку чаще, то крыса попытается быстро все вернуть на свои места. Многие крысы определяют место для уборной в клетке, а остальную территорию стараются не пачкать. Так что порой, чтобы избавиться от неприятного запаха, будет достаточно просто убрать это место, не трогая всю остальную клетку. Если у вас самец, то он может довольно агрессивно реагировать на ваши попытки убрать клетку, и чтобы избежать возможных неприятностей стоит пересадить его в переносную клетку.
                </p>
            </section>
            <section className={css.section}>
                <h2>Разведение</h2>
            </section>
        </div>
    );
};