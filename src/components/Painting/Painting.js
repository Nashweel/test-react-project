import React from "react";
import PropTypes from "prop-types";
import s from "./Painting.module.css"

const Painting = ({url, title, tag, price, profileUrl, quantity}) => {
    return (
    <div className={s.container}>
    <img 
    src={url} 
    alt={title}
    width="100%"
    />
    <h2>{title}</h2>
    <p>Автор: <a href={profileUrl}>{tag}</a></p>
    <p>Цена: {price} кредитов</p>
    <p> Доступность: {quantity < 10 ? "Заканчивается" : "Есть на складе"}</p>
    <button type="button">Добавить в корзину</button>
  </div>
    )
}

Painting.propTypes ={
url: PropTypes.string,
title: PropTypes.string.isRequired,
profileUrl: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
quantity: PropTypes.number.isRequired,
}

export default Painting