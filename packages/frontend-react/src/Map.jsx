import { forwardRef } from "react";
const Map = forwardRef(({ className }, ref) => {
  return (
    <div id="map-section" ref={ref} className={className}>
      <article className="post">
        <header className="major">
          <h2 className="map-title">Find Us</h2>
        </header>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.0357979134737!2d108.5037155!3d11.7625291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31713e8c3a222d3f%3A0x2d9ed0ba9ace1d08!2zQ8OgIFBow6ogQuG6o28gSMawbmc!5e0!3m2!1sen!2sus!4v1750572759489!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bao Hung Coffee Location"
          ></iframe>
        </div>
      </article>
    </div>
  );
});
export default Map;
