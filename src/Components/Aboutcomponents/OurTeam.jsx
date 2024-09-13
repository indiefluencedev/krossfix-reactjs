import React from 'react';
import team1 from '../../assets/AboutHeroimages/team1.png';
import team2 from '../../assets/AboutHeroimages/team2.png';
import team3 from '../../assets/AboutHeroimages/team3.png';
import team4 from '../../assets/AboutHeroimages/team4.png';

const teamData = [
  { imgSrc: team1, name: 'John Doe', designation: 'CEO' },
  { imgSrc: team2, name: 'Jane Smith', designation: 'CTO' },
  { imgSrc: team3, name: 'Emily Johnson', designation: 'CFO' },
  { imgSrc: team4, name: 'Michael Brown', designation: 'COO' },
  { imgSrc: team1, name: 'John Doe', designation: 'CEO' }, // Repeating images
  { imgSrc: team2, name: 'Jane Smith', designation: 'CTO' },
  { imgSrc: team3, name: 'Emily Johnson', designation: 'CFO' },
  { imgSrc: team4, name: 'Michael Brown', designation: 'COO' }
];

const OurTeam = () => {
  return (
    <div className="text-center py-10">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamData.map((teamMember, index) => (
            <div
              key={index}
              className="relative group overflow-hidden transform transition-transform duration-500 hover:rotate-x-12 hover:scale-105"
            >
              {/* Image */}
              <img
                src={teamMember.imgSrc}
                alt={teamMember.name}
                className="w-80 h-60 object-cover transform group-hover:rotate-x-12 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold">{teamMember.name}</h3>
                  <p className="text-sm">{teamMember.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
