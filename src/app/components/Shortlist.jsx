import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMars, faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Shortlist() {
    const bioTexts = [
      'Loves hiking and outdoor adventures.',
      'Enjoys cooking and trying out new recipes.',
      'Passionate about reading and writing.'
    ];
  
    return (
      <div className="p-8 mx-5">
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

        <div className="pt-30">
          <span className="underline" style={{ color: 'rgba(23, 37, 42, 0.4)' }}>
            -roommate matching
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div
              className="h-4 w-4 rounded-full mr-2"
              style={{ backgroundColor: 'rgba(43, 122, 120, 1)' }}
            />
            <h1 className="text-4xl font-bold">Possible Roommates</h1>
          </div>
          <button
            type="button"
            className="border-none block text-center bg-black text-white p-2 rounded-lg text-white text-sm"
            style={{ width: '100px' }}
          >
            Next Step
          </button>
        </div>
        <div className="flex justify-between mt-12 relative">
          <div className="flex items-center relative">
            <button
              type="button"
              className="p-2 rounded-lg text-sm"
              style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(58, 175, 169, 1)' }}
            >
              Shortlisted
            </button>
            
            <span className="text-gray-600 ml-8">Fast Matches</span>
            <div
              className="h-2 w-2 rounded-full ml-2"
              style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
            />
          </div>
          
        </div>
        <div className="mt-4 relative" style={{ borderTop: '2px solid rgba(23, 37, 42, 0.1)' }}>
          <div
            className="absolute"
            style={{
              borderTop: '2px solid rgba(58, 175, 169, 1)',
              width: '6.5%',
              top: '-1.5px',
              left: '0'
            }}
          ></div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="border rounded-md text-sm"
            style={{
              borderColor: 'rgba(43, 122, 120, 1)',
              color: 'rgba(43, 122, 120, 1)',
              borderWidth: '2px',
              fontSize: '16px',
              padding: '8px'
            }}
          >
            Continue searching
          </button>
        </div>
        <div className="mt-8 space-y-8">
          {bioTexts.map((text, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm relative" style={{ width: '1222px', height: '157px', borderColor: 'rgba(222, 241, 242, 1)' }}>
              <div className="flex mt-2">
                <img src={`https://s3-alpha-sig.figma.com/img/ef7d/a7b0/d1d72d3ae8065c692d7e26087a4a22c5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KPxLdyqIY6uoE8JrahMCsUrQqPOaDObjnPLOpFQRBHIc8EMBaIohSG428YpXJPGQY0tkesCXJBQMrjvBZLjTPt~jeSk4ef0L2dtU33rkdD93ciSrTlB7Pzx9qYFYhO0tS9PA73VhMiVnFonfCAavwEvQZK~Cd-l-t9NYre0r17pKZCmeSxVRiHKJ8ZfTBLN-sy1Gw-kvnm-N1OKjGn~hFTUoHgGlkF4XekVny4brTHKO0hA3NM803yWyf-bZhg04YkqUGW7W08sHVDCYRUbzF0mpGzYT3TRxoThNZsNpEN~xUJ7o-oI65Pr8GppKuHBbsalmsFvqRSINfzXoFjYOIw__`} alt="Random" className="mr-4 rounded-md" style={{ width:'100px', height: '100px'}} />
                <div>
                  <div style={{ color: 'rgba(23, 37, 42, 1)', fontWeight: 'bold' }}>Alp Nik</div>
                  <div className="mt-1" style={{ color: ' rgba(23, 37, 42, 0.7)' }}>{text}</div>
                  <div className="flex space-x-2 mt-5">
                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(43, 122, 120, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                      Age: 26
                    </div>
                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(43, 122, 120, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                    <FontAwesomeIcon icon={faMars} style={{ color: 'white', marginRight: '4px', width: '12px', height: '12px' }} />Male
                    </div>
                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(49, 181, 112, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                      Active
                    </div>
                    <div className="flex items-center justify-center" style={{ color: 'rgba(23, 37, 42, 1)', fontWeight: 'bold' }}>
                      €5000.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 border border-red-500 text-red-500 rounded-md">
                    <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                </div>
              <div className="absolute bottom-4 right-4">
                <button
                  className="py-1 px-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)' }}
                >
                  Send invite
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(23, 37, 42, 1)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
        </div>
        <footer className="relative flex items-center justify-center mt-10" style={{
            width: '1440px',
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
      </div>
    );
  }
  
  
  