import EstateCard from "./EstateCard";

const Estates = () => {
  return (
    <section>
      <h2 className="text-xl">Estates - 5</h2>

      <EstateCard
        estateImage="/placeholder-estate-img.png"
        estateName="Sample Estate"
        numberOfHouses={10}
        estateAddress="123 Sample Street, Sample City"
      />
    </section>
  );
};

export default Estates;
