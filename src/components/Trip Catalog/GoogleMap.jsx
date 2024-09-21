import React from 'react';

const GoogleMap = ({locationQuery}) => {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden', color: 'red', width: '100%', height: '500px' }}>
      <div id="my-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: '0' }}
          frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?q=${locationQuery}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          title="Google Map"
        ></iframe>
      </div>
      <a
        className="google-maps-html"
        rel="nofollow"
        href="https://www.bootstrapskins.com/themes"
        id="enable-map-info"
      >
        premium bootstrap themes
      </a>
      <style>
        {`
          #my-map-canvas .text-marker {}
          .map-generator {
            max-width: 100%;
            max-height: 100%;
            background: none;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleMap;
