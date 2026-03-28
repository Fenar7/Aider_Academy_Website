import "./style.scss";

const imgMap =
  "https://www.figma.com/api/mcp/asset/8fd067aa-7323-4ad8-bc87-bce43760fe6b";

export default function ContactMapSection() {
  return (
    <section className="contact-map-main">
      <div className="contact-map-container container">
        <div className="contact-map__heading">
          <h2 className="contact-map__title">
            Visit <span>Us</span>
          </h2>
        </div>

        <div className="contact-map__frame">
          <img className="contact-map__image" src={imgMap} alt="Map preview of the academy location" />
        </div>
      </div>
    </section>
  );
}
