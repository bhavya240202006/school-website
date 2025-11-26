import React from "react";
import "./Gallery.css";
 
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

 
import n1 from "../assets/nashaMukti.png";

import ptm1 from "../assets/ptm1.png";
import ptm2 from "../assets/ptm2.png";


 
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";

import p1 from "../assets/prakhar.png";
import p2 from "../assets/prakhar2.png";
import p3 from "../assets/prakhar3.png";


 
import u1 from "../assets/event1.png";
import u2 from "../assets/event2.png";
import u3 from "../assets/event3.png";

 
function GallerySection({ title, images }) {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">{title}</h2>

      <div className="row">
        {images.map((img, i) => (
          <div className="col-md-4 col-sm-6 col-12" key={i}>
            <div className="gallery-img-container">
              <img src={img} alt={title} className="gallery-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Gallery() {
  return (
    <div style={{ padding: "20px" }}>

      <GallerySection
        title="Diwali Celebration"
        images={[d1, d2, d3]}
      />

      <GallerySection
        title="Samvidhan Diwas"
        images={[s1, s2, s3]}
      />

      <GallerySection
        title="Nasha Mukti Shapath"
        images={[n1]}
      />

      <GallerySection
        title="Parent-Teacher Meeting (PTM)"
        images={[ptm1, ptm2]}
      />

      <GallerySection
        title="Library Day"
        images={[l1, l2, l3]}
      />

      <GallerySection
        title="Prakhar Rajasthan"
        images={[p1, p2, p3]}
      />

      <GallerySection
        title="School Event"
        images={[u1, u2, u3]}
      />

    </div>
  );
}
