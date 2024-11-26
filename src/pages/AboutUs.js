import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUs.css'; // Importa el archivo CSS
import FounderPhoto from '../assets/img/founder.jpg'; // Reemplaza con la ruta de la imagen de la fundadora
import TeamPhoto from '../assets/img/staff.jpg'; // Imagen representativa del equipo
import QualityPhoto from '../assets/img/quality-food.jpg'; // Imagen representativa del compromiso con la calidad

const AboutUs = () => {
    return (
        <>
            <Navbar />

            {/* Sección principal: ¿Quiénes somos? */}
            <section className="about-us-header">
                <div className="container text-center text-white">
                    <h1>¿Quiénes somos?</h1>
                    <p>
                        Heiwa nació como un refugio para quienes buscan un escape del ajetreo diario, un lugar donde la
                        tranquilidad y la buena vibra se fusionan con los auténticos sabores de Japón. En japonés, "Heiwa"
                        significa paz, y eso es exactamente lo que queremos transmitir: un espacio libre de ruido visual y
                        auditivo, donde cada detalle desde nuestra estética minimalista hasta nuestros platos está diseñado para
                        reconectar tus sentidos y brindarte un momento de serenidad.
                    </p>
                    <p>
                        Heiwa nació como un refugio para quienes buscan un escape del ajetreo diario, un lugar donde la
                        tranquilidad y la buena vibra se fusionan con los auténticos sabores de Japón. En japonés, "Heiwa"
                        significa paz, y eso es exactamente lo que queremos transmitir: un espacio libre de ruido visual y
                        auditivo, donde cada detalle desde nuestra estética minimalista hasta nuestros platos está diseñado para
                        reconectar tus sentidos y brindarte un momento de serenidad.
                    </p>
                </div>
            </section>

            {/* Sección Misión y Visión */}
            <section className="about-us-mission-vision">
                <div className="container">
                    <div className="mb-4">
                        <h3>Misión</h3>
                        <p>
                            Crear un espacio donde la gastronomía japonesa auténtica se combine con una atmósfera serena y
                            acogedora, brindando a nuestros invitados una experiencia única que estimula todos los sentidos,
                            promoviendo la paz y el bienestar.
                        </p>
                    </div>

                    <div>
                        <h3>Visión</h3>
                        <p>
                            Convertirnos en el restaurante japonés líder en Panamá, reconocido por ofrecer una experiencia
                            culinaria excepcional, en un ambiente único que refleja la armonía, la calidad y la tranquilidad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección de la fundadora */}
            <section className="about-us-founder">
                <div className="container">
                    <h3 className="text-center">Nuestra Fundadora</h3>
                    <div className="founder-content">
                        <div className="founder-photo">
                            <img src={FounderPhoto} alt="Fundadora de Heiwa" />
                            <h4>Kumiko Yamamoto</h4>
                        </div>
                        <div className="founder-text text-red">
                            <p>
                                "Kumiko Yamamoto, nuestra fundadora, nació en Panamá en el seno de una familia japonesa que llegó al país buscando
                                nuevas oportunidades y un hogar lejos de su tierra natal. Desde pequeña, Kumiko creció entre dos culturas: la tradición
                                japonesa inculcada por sus padres y la calidez y alegría del pueblo panameño.
                            </p>
                            <p>
                                En un viaje a Japón, quedó fascinada al redescubrir los sabores auténticos de la cocina de sus ancestros, 
                                pero también sintió una profunda nostalgia
                                por el espíritu acogedor de Panamá. Fue en ese momento que Kumiko se propuso unificar estas dos pasiones: 
                                traer a Panamá un pedacito del Japón auténtico,
                                en un entorno que reflejara la hospitalidad panameña.
                            </p>
                            <p>
                                Así nació Heiwa, un restaurante que no solo rinde homenaje a sus raíces japonesas, sino que también 
                                celebra la riqueza cultural y la esencia vibrante de Panamá.
                                Cada plato que servimos y cada detalle de nuestro ambiente reflejan la visión de Kumiko: un puente 
                                entre dos mundos que invita a todos a disfrutar de la paz y la belleza de ambas culturas."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Nuestro Personal */}
            <section className="about-us-team">
                <div className="container">
                    <h3 className="text-center">Nuestro Personal</h3>
                    <div className="team-content">
                        <div className="team-photo">
                            <img src={TeamPhoto} alt="Equipo de Heiwa" />
                        </div>
                        <div className="team-text">
                            <p>
                                "En Heiwa, el corazón de nuestra experiencia está en nuestro equipo. Cada miembro del personal es 
                                cuidadosamente seleccionado no solo por su experiencia, sino también por su pasión por brindar un 
                                servicio excepcional. Desde el primer saludo hasta la despedida, nuestro objetivo es hacerte sentir 
                                como en casa, mientras te sumerges en la serenidad y el encanto de nuestra cultura japonesa.
                            </p>
                            <p>
                                Todos nuestros colaboradores pasan por rigurosos entrenamientos donde aprenden a combinar la excelencia 
                                culinaria japonesa con la calidez panameña, asegurando que cada detalle de tu visita sea memorable. 
                                Creemos que un equipo unido y comprometido es la clave para ofrecer más que una comida, una experiencia 
                                que toca los sentidos y el alma."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Compromiso con la Calidad */}
            <section className="about-us-quality" style={{ paddingBottom: "10em" }}>

                <div className="container">
                    <h3 className="text-center">Compromiso con la Calidad</h3>
                    <div className="quality-content">
                        <div className="quality-photo">
                            <img src={QualityPhoto} alt="Compromiso con la calidad" />
                        </div>
                        <div className="quality-text">
                            <p>
                                "En Heiwa, la calidad no es un compromiso: es nuestro estándar. Desde la selección de los 
                                ingredientes hasta la preparación de cada plato, nos aseguramos de mantener los más altos niveles 
                                de frescura, autenticidad y excelencia. Trabajamos de la mano con proveedores locales e internacionales 
                                para garantizar que cada ingrediente cumpla con nuestras estrictas expectativas.
                            </p>
                            <p>
                                Nuestra cocina combina las técnicas tradicionales japonesas con un toque moderno, respetando las recetas 
                                ancestrales pero adaptándolas al paladar contemporáneo. Además, nos enorgullece ofrecer opciones para todos, 
                                incluyendo alternativas veganas y sin gluten, porque creemos que todos merecen disfrutar de la magia de Heiwa 
                                sin compromisos."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutUs;
