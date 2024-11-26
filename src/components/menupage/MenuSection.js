import React, { useState } from "react";
import BuyButton from '../BuyButton';
import ramen1 from '../../assets/img/ramen1.png';
import ramen2 from '../../assets/img/ramen2.png';
import ramen3 from '../../assets/img/ramen3.png';
import matcha from '../../assets/img/matcha.png'
import matchaLatte from '../../assets/img/matcha-latte.png';
import sushiDeluxe from '../../assets/img/sushi-1.png';
import tempura from '../../assets/img/udon-tempura.png';
import gyoza from '../../assets/img/gyozas-clasicas.png';
import teVerde from '../../assets/img/te-verde.png';
import yakitori from '../../assets/img/yakitori.png';
import dorayaki from '../../assets/img/dorayak.png';
import mochi from '../../assets/img/mochi.png';
import misoSoup from '../../assets/img/miso-soup.png'
import sake from '../../assets/img/sake.png';
import veganMisoSoup from '../../assets/img/vegan-miso.png';
import nigiri from '../../assets/img/nigiri.png';
import boyNaruto from '../../assets/img/boy-narutos.png';
import spicyGyoza from '../../assets/img/spicy-gyozas.png';

import '../../styles/MenuSection.css'; // Importamos los estilos CSS

const MenuSection = () => {
    // Lista de productos
    const products = [
        { id: 1, name: "Ramen Clásico", price: 12.0, category: "Sopas", image: ramen1 },
        { id: 2, name: "Ramen Especial", price: 15.0, category: "Sopas", image: ramen2 },
        { id: 3, name: "Ramen Picante", price: 13.0, category: "Sopas", image: ramen3 },
        { id: 15, name: "Matcha", price: 3.0, category: "Bebidas", image: matcha },
        { id: 4, name: "Matcha Latte", price: 4.0, category: "Bebidas", image: matchaLatte },
        { id: 5, name: "Sushi Deluxe", price: 20.0, category: "Sushi", image: sushiDeluxe },
        { id: 6, name: "Udon Tempura", price: 10.0, category: "Entradas", image: tempura },
        { id: 7, name: "Gyoza", price: 8.0, category: "Entradas", image: gyoza },
        { id: 8, name: "Té Verde", price: 3.0, category: "Bebidas", image: teVerde },
        { id: 9, name: "Yakitori", price: 12.0, category: "Entradas", image: yakitori },
        { id: 10, name: "Dorayaki", price: 6.0, category: "Postres", image: dorayaki },
        { id: 11, name: "Mochi", price: 5.0, category: "Postres", image: mochi },
        { id: 12, name: "Sake", price: 15.0, category: "Bebidas", image: sake },
        { id: 13, name: "Sopa de Miso", price: 9.0, category: "Sopas", image: misoSoup },
        { id: 14, name: "Sopa de Miso Vegana", price: 10.0, category: "Sopas", image: veganMisoSoup },
        { id: 16, name: "Nigiri", price: 7.0, category: "Sushi", image: nigiri },
        { id:17, name: "Spicy Gyozas", price: 12.0, category: "Entradas", image: spicyGyoza },
    ];

    const categories = ["Todos", "Sopas", "Bebidas", "Postres", "Entradas", "Sushi"];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const itemsPerPage = 9; // Elementos por página

    // Filtrado por categoría
    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    // Productos para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    );
    //Manejo de cambio de página de productos
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setTimeout(() => {
            document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    // Total de páginas
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <section id="menu-section" className="menu-section">
            <div className="container">
                {/* Título y Controles */}
                <div className="menu-header d-flex justify-content-between align-items-center mb-4">
                    <h2 className="menu-title">
                        Menú
                    </h2>
                    <div>
                        <select
                            className="form-select category-select"
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1); // Reinicia a la primera página
                            }}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Productos */}
                <div className="row menu-products">
                    {paginatedProducts.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4 d-flex justify-content-center">
                            <div className="product-card">
                                <div className="product-img-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-img"
                                    />
                                </div>
                                <div className="text-center d-flex flex-column justify-content-end align-items-center product-info">
                                    <h5 className="product-name">
                                        {product.name}
                                    </h5>
                                    <p className="product-price">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <div className="buy-button-container">
                                        <BuyButton product={product} className="buy-button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginación */}
                <div className="pagination d-flex justify-content-center align-items-center mt-4">
                    <button
                        className="btn btn-outline-light pagination-btn-ant"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Anterior
                    </button>
                    <span className="pagination-text">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        className="btn btn-outline-light pagination-btn-sig"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Siguiente
                    </button>
                </div>

                {/* Decoración */}
                <div className="text-center mt-5">
                    <img
                        src={boyNaruto}
                        alt="Decoración Chico Naruto"
                        className="decoration-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
