import React from 'react';
import '../Styles/History.css'; // Import the styles for this component

const History = () => {
  return (
    <div className="history-container">
      <h2 className="history-title">History of Our Company</h2>
      <div className="timeline">
        {/* First Event */}
        <div className="timeline-item left">
          <div className="timeline-year">2018</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-left"></div> {/* Triangle added */}
            <p className='text-[18px] font-semibold'>Foundation of Vcube Chemicals</p>
            <p className='text-[14px]'>Established in Rewari, Haryana, Vcube emerged as a pioneer in the chemical industry, producing high-quality adhesives.</p>
          </div>
        </div>

        {/* Second Event */}
        <div className="timeline-item right">
          <div className="timeline-year">2001-2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-right"></div> {/* Triangle added */}
            <p className='text-[18px] font-semibold'>Launch of KrossFix Adhesives</p>
            <p className='text-[14px]'>With a decade of expertise, Vcube Chemicals launched KrossFix to provide premium, customized solutions for the footwear industry.</p>
          </div>
        </div>

        {/* Third Event */}
        <div className="timeline-item left">
          <div className="timeline-year">2002</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-left"></div> {/* Triangle added */}
            <p className='text-[18px] font-semibold'>State-of-the-Art Manufacturing Facility</p>
            <p className='text-[14px]'>KrossFix established a world-class manufacturing facility in Nadiad GIDC, near Ahmedabad, to ensure the highest standards of quality and sustainability.</p>
          </div>
        </div>

        {/* Fourth Event */}
        <div className="timeline-item right">
          <div className="timeline-year">2010</div>
          <div className="timeline-dot"></div>
          <div className="timeline-box">
            <div className="triangle-right"></div> {/* Triangle added */}
            <p className='text-[18px] font-semibold'>Market Leader in Footwear Adhesives</p>
            <p className='text-[14px]'>Today, Krossfix has become a leading name in the Indian footwear adhesive sector, exceeding industry expectations with reliable, on-time delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;