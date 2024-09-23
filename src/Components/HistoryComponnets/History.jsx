import React from 'react';
import '../Styles/History.css'; // Import the styles for this component

const History = () => {
  return (
    <div className="history-container">
      <h2 className="history-title">History of Our Company</h2>
      <div className="timeline">
        {/* First Event */}
        <div className="timeline-item left">
          <div className="timeline-year">2001-2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-left"></div> {/* Triangle added */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Second Event */}
        <div className="timeline-item right">
          <div className="timeline-year">2001-2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-right"></div> {/* Triangle added */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Third Event */}
        <div className="timeline-item left">
          <div className="timeline-year">2001-2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-left"></div> {/* Triangle added */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Fourth Event */}
        <div className="timeline-item right">
          <div className="timeline-year">2001-2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-right"></div> {/* Triangle added */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;