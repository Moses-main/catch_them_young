const OfficeLocation = () => (
  <div className="map-container mt-8">
    <h2 className="text-3xl font-bold text-emerald-800 text-center mb-6">
      Our Office Location
    </h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=https://www.bing.com/maps?osid=4b0b8bfb-b30b-4fdc-b03f-1f48b4bdf9ee&cp=6.441084~3.518996&lvl=16.892075&style=h&pi=0&v=2&sV=2&form=S00027"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
);

export default OfficeLocation;
