import React, { useState } from "react";
import BuyButton from '../BuyButton';
import ramen1 from '../../assets/img/ramen-test2.png';
import boyNaruto from '../../assets/img/boy-narutos.png';




const MenuSection = () => {
    // Lista de productos
    const products = [
        { id: 1, name: "Ramen Clásico", price: 12.0, category: "Ramen", image: ramen1 },
        { id: 2, name: "Ramen Especial", price: 15.0, category: "Ramen", image: ramen1 },
        { id: 3, name: "Ramen Picante", price: 13.0, category: "Ramen", image: ramen1 },
        { id: 4, name: "Matcha Latte", price: 4.0, category: "Bebidas", image: ramen1 },
        { id: 5, name: "Sushi Deluxe", price: 20.0, category: "Sushi", image: ramen1 },
        { id: 6, name: "Tempura", price: 10.0, category: "Entradas", image: ramen1 },
        { id: 7, name: "Gyoza", price: 8.0, category: "Entradas", image: ramen1 },
        { id: 8, name: "Té Verde", price: 3.0, category: "Bebidas", image: ramen1 },
        { id: 9, name: "Yakitori", price: 12.0, category: "Entradas", image: ramen1 },
        { id: 10, name: "Dorayaki", price: 6.0, category: "Postres", image: ramen1 },
        { id: 11, name: "Mochi", price: 5.0, category: "Postres", image: ramen1 },
        { id: 12, name: "Sake", price: 15.0, category: "Bebidas", image: ramen1 },
    ];

    const categories = ["Todos", "Ramen", "Bebidas", "Postres", "Entradas", "Sushi"];

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
        <section id="menu-section" style={{ backgroundColor: '#BC002D', padding: '300px 0 100px' }}>
            <div className="container">
                {/* Título y Controles */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 style={{ color: "#F7F8FA", fontWeight: "900", fontSize: "4rem" }}>
                        Menú
                    </h2>
                    <div>
                        <select
                            className="form-select me-2"
                            style={{
                                backgroundColor: "#F7F8FA",
                                color: "#BC002D",
                                fontWeight: "700",
                                borderRadius: "50px",
                                width: "200px",
                            }}
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
                <div className="row" style={{marginTop:'10px', paddingBottom: '80px'}}>
                    {paginatedProducts.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4 d-flex justify-content-center">
                            <div
                                className="position-relative"
                                style={{
                                    backgroundColor: '#F7F8FA',
                                    border: 'solid #0F1423 3px',
                                    boxShadow: '0px 4px 8px rgba(0,0,0,0.5)',
                                    width: '100%',
                                    paddingBottom: '40px', 
                                    marginTop: '200px',
                                }}
                            >
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: "-160px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{
                                            borderRadius: "15px",
                                            width: "250px",
                                            height: "250px",
                                            objectFit: "cover",
                                            overflow: "visible",
                                        }}
                                    />
                                </div>
                                <div
                                    className="text-center d-flex flex-column align-items-center"
                                    style={{ marginTop: "80px" }}
                                >
                                    <h5
                                        style={{
                                            color: "#0D2B45",
                                            marginTop: "25px",
                                            fontWeight: "900",
                                            fontSize: "2rem",
                                        }}
                                    >
                                        {product.name}
                                    </h5>
                                    <p
                                        style={{
                                            color: "#13649D",
                                            fontWeight: "700",
                                            fontSize: "1.7rem",
                                        }}
                                    >
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <BuyButton product={product} style={{ width: "150px", margin: "0 auto" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginación */}
                <div className="d-flex justify-content-center mt-4">
                <button
                        className="btn btn-outline-light"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        style={{ marginRight: "10px" }}
                    >
                        Anterior
                    </button>
                    <span style={{ color: "#F7F8FA", fontWeight: "900" }}>
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        className="btn btn-outline-light"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        style={{ marginLeft: "10px" }}
                    >
                        Siguiente
                    </button>
                </div>
            <div className="text-center mt-5">
                <img
                    src={boyNaruto}
                    alt="Decoración Naruto"
                    className="img-fluid"
                    style={{ maxWidth: '300px', opacity: 0.8 }}
                />
            </div>
            </div>
        </section>
    );
};

export default MenuSection;
