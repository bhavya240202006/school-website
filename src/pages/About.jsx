import React from "react";

export default function About() {
  return (
    <div style={{ padding: "40px 20px" }}>
      {/* About Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "32px",
          animation: "fadeSlideUp 1s ease",
        }}
      >
        About Our School
      </h2>

      {/* School Description */}
      <p
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 25px",
          lineHeight: "1.6",
          fontSize: "18px",
        }}
      >
        हमारा विद्यालय राजस्थान के शांत और सुंदर क्षेत्र 3-बी बाड़ी में स्थित है। 
        यह विद्यालय बच्चों के सर्वांगीण विकास के लिए उत्कृष्ट वातावरण प्रदान करता है। 
        नीचे दिया गया मानचित्र हमारे विद्यालय के सटीक स्थान को दर्शाता है।
      </p>

      {/* Location Heading */}
      <h3
        style={{
          textAlign: "center",
          marginBottom: "15px",
          fontWeight: "600",
          fontSize: "26px",
        }}
      >
        Our Location
      </h3>

      {/* Google Map Embed */}
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          title="school-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55202.900170523266!2d73.8763646003322!3d30.146233326206616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917bbc303b310f5%3A0x57dfe6382f7d2c4d!2sWater%20Works%20Kotha!5e0!3m2!1sen!2sin!4v1764176172103!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
