import React from 'react';
import './InstagramGallery.css';

const InstagramGallery = () => {
  return (
    <section className="instagram-gallery">
      <div className="gallery-container">
        
        {/* Polaroid Photos */}
        <div className="polaroid photo-1 float-slow">
          <img src="/assets/ig_harddrive_1779017824639.png" alt="Hard Drive Rug" />
          <div className="caption handwritten">Storage so soft!</div>
        </div>

        <div className="polaroid photo-2 float-fast">
          <img src="/assets/ig_microscope_1779017838130.png" alt="Microscope Rug in Pan" />
          <div className="caption handwritten">Cooking science...</div>
        </div>

        {/* Since we didn't generate ig_virus because I replaced it earlier, let's use the tufted_virus we have as the 3rd photo */}
        <div className="polaroid photo-3 float-slow">
          <img src="/assets/tufted_virus_1779017783681.png" alt="Giant Virus Rug" />
          <div className="caption handwritten">Don't catch a bug!</div>
        </div>

        {/* Giant Green Instagram Button */}
        <div className="ig-button-wrapper">
          <a href="#instagram" className="ig-button pop-border pop-shadow">
            <span className="arrow">→</span> INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
