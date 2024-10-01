import Bar from "./Bar";

const Map = () => {
  return (
    <section className="map-section">
      <Bar headline={"KONTAKT INFORMACIJE"} />

      <div className="info-side">
        <h1>Industrija Mehanizacije i Traktora</h1>
        <p className="info-p">Žanke Stokić 39</p>
        <p className="info-p">11000 Beograd</p>
        <p className="info-p">Konstantina Danila bb</p>
        <p className="info-p">23250 Jarkovac</p>
        <p className="info-p">www.tractors-europe.com</p>
        <p className="info-p">dg@tractors-europe.com</p>
        <p className="info-p">Prodaja: 063 8608 565</p>
      </div>

      <div className="map-side">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Jarkovac+(IMT%20Jarkovac)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </section>
  );
};

export default Map;
