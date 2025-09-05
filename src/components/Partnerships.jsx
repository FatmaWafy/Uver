import React from 'react';
import { FaUniversity, FaFeatherAlt, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from "react-icons/md";
import Button from './Button';

const Partnerships = () => {
  const partners = [
    { name: "CollegeX", icon: <FaGraduationCap size={30} />, style: 'iconLeft' },
    { name: "EDUTECH INSTITUTE", style: 'textOnly' },
    { name: "Global University Network", icon: <FaUniversity size={35} />, style: 'iconLeft'  },
    { name: "FutureEd Solutions", style: 'textOnly' }, 
    { name: "EduConsortium", icon: <MdSchool size={30} />, style: 'iconLeft' },
    { name: "AdmissionsPro", style: 'borderedTextDouble' },
    { name: "CampusLink", style: 'textOnly' },
    { name: "ScholarSearch", icon: <FaFeatherAlt size={25} />, style: 'iconTop' },
  ];

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              UVER is proud to have established partnerships with leading institutions and organizations in the education sector.
            </h2>
            <Button  >
              Connect With Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {partners.map((partner, index) => {
              const isLastRow = index >= 4;
              const isLastColumnOnMobile = (index + 1) % 2 === 0;
              const isLastColumnOnDesktop = (index + 1) % 4 === 0;

              const borderClasses = [
                !isLastRow ? "border-b" : "",
                !isLastColumnOnMobile ? "border-r" : "",
                "md:border-r",
                isLastColumnOnDesktop ? "md:border-r-0" : "",
                "border-gray-700"
              ].filter(Boolean).join(" ");

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center min-h-[160px] p-6 text-gray-400 font-medium ${borderClasses}`}
                >
                  {partner.style === 'iconTop' && (
                    <div className="flex flex-col items-center space-y-3">
                      {partner.icon}
                      <span className="text-lg text-center">{partner.name}</span>
                    </div>
                  )}

                  {partner.style === 'iconLeft' && (
                    <div className="flex items-center gap-x-3">
                      {partner.icon}
                      <span className="text-lg">{partner.name}</span>
                    </div>
                  )}

                  {partner.style === 'borderedTextDouble' && (
                    <div className="relative">
                      <span className="block border border-gray-600 px-6 py-3 text-lg relative z-10 bg-gray-900">
                        {partner.name}
                      </span>
                      <span className="absolute -top-1 -left-1 block h-full w-full border border-gray-600"></span>
                    </div>
                  )}

                  {partner.style === 'textOnly' && (
                    <span className="text-lg">{partner.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;