import ReplacementCard from "../components/ReplacementCard/ReplacementCard";

const Store = () => {
  return (
    <div className="m-4">
      <br />
      <br />
      <ReplacementCard
        name="Bujia"
        marca="NGK"
        imageUrl="https://i.ibb.co/LnnX8JF/pngwing-com-1.png"
        puntuacionProm={3}
        cantReseñas={12}
        precio={5000}
        descuento={false}
        fondo={"red"}
      />
    </div>
  );
};

export default Store;
