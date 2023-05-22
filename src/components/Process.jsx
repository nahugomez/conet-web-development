import React from "react";
import ProcessCard from "./ProcessCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Process = () => {
    return (
        <div className="container mb-24 text-center">
            <h2 className="text-2xl font-bold">Nuestro Proceso</h2>
            <div className="-mt-2">
                <span className="inline-block h-1 w-40 rounded-full bg-blue-700"></span>
                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-700"></span>
                <span className="mx-1 inline-block h-1 w-1 rounded-full bg-blue-700"></span>
            </div>
            <p className="mb-10 text-center text-gray-700 lg:text-start">Conoce como es el desarrollo de tu web</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Pagination]}
                pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <ProcessCard
                        image={
                            "https://img.freepik.com/foto-gratis/concepto-diseno-sitio-web-plantilla-web_53876-125608.jpg?w=826&t=st=1684789429~exp=1684790029~hmac=b85a8fc15829983975f9fce54f880e6b32acd5c6ed597a50825fa414fcc5a6c9"
                        }
                        title={"Prototipo Web"}
                        description={"Desarrollamos un prototipo que se adecue a la descripcion que nos brindaste de tu empresa"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProcessCard
                        image={
                            "https://img.freepik.com/foto-gratis/cerrar-hombre-escribiendo-codigo-computadora-portatil_158595-5169.jpg?w=996&t=st=1684789673~exp=1684790273~hmac=a226b88c38c36684f49b0b436a3b4764eeb148cdf9e895b31f310a8f05f44033"
                        }
                        title={"Prototipo Web"}
                        description={"Desarrollamos un prototipo que se adecue a la descripcion que nos brindaste de tu empresa"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProcessCard
                        image={"https://img.freepik.com/fotos-premium/ciberespacio-digital-conexiones-red-datos_24070-1059.jpg?w=1060"}
                        title={"Prototipo Web"}
                        description={"Desarrollamos un prototipo que se adecue a la descripcion que nos brindaste de tu empresa"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProcessCard
                        image={
                            "https://img.freepik.com/foto-gratis/mano-usando-computadora-portatil-pantalla-virtual-documento-aprobar-linea-concepto-gestion-erp-garantia-calidad-papel_616485-61.jpg?w=996&t=st=1684789725~exp=1684790325~hmac=b33cb5b890fd20afef506054b8cb97cfe0614ff3f7adc34778b850702966a761"
                        }
                        title={"Prototipo Web"}
                        description={"Desarrollamos un prototipo que se adecue a la descripcion que nos brindaste de tu empresa"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Process;
