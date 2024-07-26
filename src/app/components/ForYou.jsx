'use client'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower, faPerson, faExpand, faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';

export default function ForYou() {
    const imageUrls = [
      'https://s3-alpha-sig.figma.com/img/9968/9f70/391c161632e68ac67fa99f8dbac3baf3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULAYR0JfuHaqJZkVhWkNFwitM14VbBSMOuDLP2GX3a59tikKxkyUSJdZ91yKnWQGzLUL4RTy2SLYHe4O16rWRgz9CDdb7Sy5uav87aI1RkOWXe3ZjmJMkb4tF7V6RI~u13qFQOndgINiKuNPya-~aB1jL1Uw~Z5kvswIGBkMq1D31w4JIbaJ~s-DMgRgAjequ1rp-D6Vf2RsVsa6OUL8NXO96fzWAOWWvKCVxgv-kGeG63Jb88YsnskbEp35wTe0ll6p2SC4Jy91wJkRNgXifg19KNwykuB9EvLh6ebyrSMBjgSCXeqhO0IZkTvH5LF92Ggl5HAC5aXZxiNqyXRv3g__',
      'https://s3-alpha-sig.figma.com/img/4439/3b90/2b0c2efdd5af25d1d4eb10c526ac9558?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtUFKsr212WjQfF44qjcdgI0nOHrc6fA-Q8Jo33AYNohAJ1o~G7ersZ6hBYKMoUMOApB1Uf5MxE8K-JdgiE-DfIMVmEMNkD2HuzqTUDKQ9ByYB1hr~zqAVEvWt4O9RaOziII6r~tdEhr2FKgI622Fu2nUCBj-jA9b0Ve6iaVho1ALboxZs~hXq3v44LIe01M2DB9tOPoZ3~aL1KYvVlaQD6MhvmOVYn0Gbp9Bd56Tw14zd6TAucoCf50yio7-OMRwlZN3gegG797tZVT13ReboKkrk0i2zWj7YWovaEVdKjkk1GDl3aROoGLfdlS-6bS5U4gq0rTPhNHLmkDvET45g__',
      'https://s3-alpha-sig.figma.com/img/cb01/3270/77792e51ba2ecbfc8da5d9ed378159de?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6YK5MPRMf1teV485X-Qo~tCyuyoqN3RajL6aitcS13BOzhmxgiz7rt38fVHnJRvqNPES49yH-PUwLNLLMk-T4TZLkTE8-Beap0An5t5SfcS8neWGzE5rw3AaxmCZ3TFcfpPp6KUcfQbxOb~lgjLRkhnfbtEbKsDDRc8zcC1uSpZghTHTqT~9JEaI1O9dQKZSlT6c9ZoV7wDkailnCJtnGklXTYc8jEZoYTfwU23tA30Zvg~GVKx~0okBWp3FE6VZ3RDhyjato5e4oHNR4j2vQzRX9-XSc43Ou1No4ywtoQ9DI7bz20ahrRhK7MJEqP2n1oIL9AzoGKBUFFHKjtMew__',
      'https://s3-alpha-sig.figma.com/img/341c/b3d0/becfb6149022ded95fccfaf9f246427f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dqvq-cVv3vNi3PZ7Usq96V5kpaq9wAXNVF-mjG4IdQknCtHpy1Cy8KTV2pk4IwFBra55QTkZVYvXro2rCpv0jNzQIRNlAU1FlgjPIqQ-4Bq~kpQxO14v-2phjPKKCGYskwTkBNSnZfisjdihz-R-slI-QxgzF~RazPEyKEYI0qCmj5~0VlzDViY6d9aGgXhopSwS3~hnA8Ew0quY6S9d8OT39eLs4eGUzPlsb7-7njhQ4mpve-UHi9CohosNVoJWVZWYbXiQOK50JpDWooiEcipLgzFD5203luwJ1R760~no9pZhXIlmBMcGHjaxJKFCLveoPfZn4o51yIDaPXIdYA__'
    ];

    return (
      <>
        
        <nav
                className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
                style={{ height: '60px', backgroundColor: 'rgba(254, 255, 255, 0.9)', borderBottom: '1px solid rgba(222, 241, 242, 1)' }}
            >
          <div className="flex justify-between items-center h-full px-4">
            <div className="flex items-center">
              <img 
                src="https://s3-alpha-sig.figma.com/img/b53c/2b0f/d2f7a7cc9efd1002e55660b3fc5cd7dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6hYSoP5xbWxdS2gnTsToFfeKYv3CNvKj1WxH50-Nv6UGzWgWg8x9mpWHW8UNMmTGGYiw8Pi7hNR77nmrH5CA21RXtg4cblO6K9QH-jf-4ueDGQXfnkmaPbY3F4pszBnRgn8V5vVMunJ5HR9zdR0N7ev2r~EL-heXRxEYdePRK4ZzLs9NJu-IRxVvwfQXBLKOAteFxjALyaIzu7xI4az1rFXwh0DGVyCRf8exfQ3KN3XdDN6nwZ46eOwl-0q~VB0Tj5WjCIhIhStbnXaOQ16RXZ1AkLDe2lRACFZ0Jq~vhc6rrhS023fF9eMvEHb93eAxhOg8fFIQHDZQ9omiUUBTg__"
                alt="Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  top: '2px',
                  left: '30px',
                  opacity: '1',
                  position: 'relative'
                }}
              />
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  textAlign: 'left',
                  color: 'rgba(23, 37, 42, 1)',
                  marginLeft: '40px'
                }}
              >
                Home
              </span>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '36px',
                  textAlign: 'center',
                  color: 'rgba(23, 37, 42, 1)',
                }}
              >
                GrotN
              </span>
            </div>
            <div className="flex items-center">
              
              <button
              type="button"
              className="border-none block text-center bg-black text-white p-2 rounded-lg text-sm font-poppins mr-20"
              style={{ width: '70px' }}
            >
              Log out
            </button>
            </div>
          </div>
        </nav>

        <div className="mx-10 p-8 pt-16">
          <div className="pt-8">
            <span className="font-poppins text-gray-500">
              -roommate matching
            </span>
            <span className="font-poppins underline pl-2 text-gray-500">
              -house matching
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div
                className="h-4 w-4 rounded-full mr-2"
                style={{ backgroundColor: 'rgba(43, 122, 120, 1)' }}
              />
              <h1 className="text-4xl font-bold font-poppins">For you</h1>
            </div>
            <button
              type="button"
              className="border-none block text-center bg-black text-white p-2 rounded-lg text-sm font-poppins"
              style={{ width: '100px' }}
            >
              Next Step
            </button>
          </div>
          <div className="flex justify-between mt-12">
            <div className="flex items-center">
              <span className="text-gray-600 font-bold font-poppins">Houses</span>
              <div
                className="h-2 w-2 rounded-full ml-2"
                style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
              />
            </div>
            <button
              type="button"
              className="text-white p-2 rounded-lg text-sm font-poppins"
              style={{ backgroundColor: 'rgba(58, 175, 169, 1)', width: '100px' }}
            >
              Filters
            </button>
          </div>
          <div className="mt-4 border-t border-gray-200"></div>
          <div className="mt-4 grid grid-cols-4 gap-8">
            {['Bedrooms', 'Location', 'Price', 'Rating'].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-1 font-poppins">{label}</label>
                {label === 'Bedrooms' && (
                  <input
                    type="text"
                    placeholder="How many bedrooms?"
                    className="w-full p-2 bg-transparent border rounded outline-none"
                    style={{ borderColor: 'rgba(222, 241, 242, 1)', borderRadius: '10px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '15px' }}
                  />
                )}
                {label === 'Location' && (
                  <select
                    className="w-full p-2 bg-transparent border rounded outline-none"
                    style={{ borderColor: 'rgba(222, 241, 242, 1)', borderRadius: '10px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '15px' }}
                  >
                    <option disabled selected hidden>Select</option>
                    <option>Amsterdam</option>
                    <option>Rotterdam</option>
                    <option>The Hague</option>
                    <option>Eindhoven</option>
                    <option>Utrecht</option>
                  </select>
                )}
                {label === 'Price' && (
                  <select
                    className="w-full p-2 bg-transparent border rounded outline-none"
                    style={{ borderColor: 'rgba(222, 241, 242, 1)', borderRadius: '10px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '15px' }}
                  >
                    <option disabled selected hidden >Select</option>
                    <option>€250-€750</option>
                    <option>€750-€1500</option>
                    <option>€1500-€3000</option>
                  </select>
                )}
                {label === 'Rating' && (
                  <select
                    className="w-full p-2 bg-transparent border rounded outline-none"
                    style={{ borderColor: 'rgba(222, 241, 242, 1)', borderRadius: '10px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '15px' }}
                  >
                    <option disabled selected hidden>Select</option>
                    <option>Above 4.0</option>
                    <option>Rated 3.0</option>
                    <option>Rated 2.0</option>
                  </select>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative overflow-hidden">
                <div className="text-xl font-bold mb-2 flex items-center font-poppins" style={{ color: 'rgba(23, 37, 42, 1)' }}>
                  <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 mr-2" />
                  Amsterdam
                </div>
                <img src={url} alt={`Roommate ${index + 1}`} className="w-full h-auto" style={{ borderRadius: '2%' }} />
                <div className="absolute top-10 left-2 flex items-center justify-center" style={{ width: '25px', height: '25px', backgroundColor: 'white', borderRadius: '30%' }}>
                  <div className="flex items-center justify-center">
                    <span className="text-lg text-center" style={{ color: 'rgba(23, 37, 42, 0.7)' }}>+</span>
                  </div>
                </div>
                <div className="mt-2 flex space-x-10 font-poppins">
                  <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                    2 Bed Rooms
                  </div>
                  <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faShower} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                    1 Bath
                  </div>
                  <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faPerson} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                    Roommates
                  </div>
                  <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faExpand} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                    67 sqmt
                  </div>
                  <div className="absolute top-10 right-3 mt-2 mr-2 bg-white bg-opacity-0 rounded-md" >
                  <span className="text-white font-semibold text-sm">4.0</span>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 ml-1" />
                </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    type="button"
                    className="border-none block text-center bg-black text-white p-2 rounded-lg text-sm font-poppins flex items-center"
                    style={{ width: '80px', height: '30px' }}
                  >
                    $2500.00
                  </button>
                  <button
                    type="button"
                    className="py-1 px-3 rounded-lg text-sm font-poppins"
                    style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="relative flex items-center justify-center" style={{
            width: '1473px',
            height: '403px',
            gap: '0px',
            background: 'rgba(23, 37, 42, 1)',
        }}>
        
      
        <div className="absolute" style={{
            width: '50px',
            height: '48.52px',
            top: '37px',
            left: '178px',
            opacity: '0px'
        }}>
            <img src="https://s3-alpha-sig.figma.com/img/b53c/2b0f/d2f7a7cc9efd1002e55660b3fc5cd7dc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6hYSoP5xbWxdS2gnTsToFfeKYv3CNvKj1WxH50-Nv6UGzWgWg8x9mpWHW8UNMmTGGYiw8Pi7hNR77nmrH5CA21RXtg4cblO6K9QH-jf-4ueDGQXfnkmaPbY3F4pszBnRgn8V5vVMunJ5HR9zdR0N7ev2r~EL-heXRxEYdePRK4ZzLs9NJu-IRxVvwfQXBLKOAteFxjALyaIzu7xI4az1rFXwh0DGVyCRf8exfQ3KN3XdDN6nwZ46eOwl-0q~VB0Tj5WjCIhIhStbnXaOQ16RXZ1AkLDe2lRACFZ0Jq~vhc6rrhS023fF9eMvEHb93eAxhOg8fFIQHDZQ9omiUUBTg_" alt="Logo" style={{ width: '100%', height: '100%' }} />
        </div>

     
        <div className="absolute" style={{
            width: '268px',
            height: '180px',
            top: '105px',
            left: '180px',
            background: 'rgba(23, 37, 42, 1)',
            opacity: '1',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            <p style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '30px',
            textAlign: 'left',
            color: 'rgba(254, 255, 255, 1)'
            }}>
            405 N Main St,<br />
            Davidson, NC 28035, NC, US
            <br /><br />
            +1 (704) 490-0246
            <br />
            info@grotn.com
            </p>
        </div>

        
        <div className="absolute" style={{
            width: '208px',
            height: '290px',
            top: '27px',
            left: '659px',
            padding: '10px 0px 0px 0px',
            gap: '10px',
            opacity: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(23, 37, 42, 1)',
            boxSizing: 'border-box'
        }}>
            <p style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '30px',
            textAlign: 'left',
            color: 'white',
            margin: '0'
            }}>
            <span style={{color:'rgba(43, 122, 120, 1)'}}>Pages:</span>
            <br />
            <br />
            About
            <br />
            <br />
            Terms of Service
            <br />
            <br />
            Tenant Account
            <br />
            <br />
            Landlord Account
            </p>
        </div>

      
        <div className="absolute" style={{
            width: '131px',
            height: '230px',
            top: '27px',
            left: '1078px',
            padding: '10px 0px 0px 0px',
            gap: '10px',
            opacity: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(23, 37, 42, 1)',
            boxSizing: 'border-box'
        }}>
            <p style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '30px',
            textAlign: 'left',
            color: 'white',
            margin: '0'
            }}>
            <span style={{color:'rgba(43, 122, 120, 1)'}}>Resources:</span>
            <br />
            <br />
            Our Code
            <br />
            <br />
            Our Site
            <br />
            <br />
            Our Plans
            </p>
        </div>

     
        <div className="absolute" style={{
            width: '1473px',
            height: '0px',
            top: '356px',
            borderTop: '1px solid rgba(222, 242, 241, 0.5)',
            opacity: '0px'
        }}></div>

   
        <div className="absolute" style={{
            width: '1420.88px',
            height: 'auto',
            bottom: '10px',
            right: '10px',
            textAlign: 'right',
            color: 'rgba(254, 255, 255, 1)',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px'
        }}>
            GrotN ©2024
        </div>

        </footer>
      </>
    );
}
