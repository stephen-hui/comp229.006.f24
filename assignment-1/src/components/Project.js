export default function Project({ title, description, image, alt }) {
  return (
    <div className="card shadow" style={{ width: "100%", height: "600px" }}>
      <div
        style={{
          height: "400px",
          width: "100%",
          borderBottom: "2px solid #287928",
        }}
      >
        <img
          className="card-img-top"
          src={image}
          alt={alt}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
