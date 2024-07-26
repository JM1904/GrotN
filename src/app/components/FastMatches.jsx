import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the heart icon

export default function FastMatches() {
    return (
        
        <div className="p-8 mx-5" style={{ fontFamily: 'Poppins' }}>
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
                        style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
                    />
                    <h1 className="text-4xl font-bold">Possible Roommates</h1>
                </div>
                <button
                    type="button"
                    className="border-none block text-center bg-black text-white p-2 rounded-lg text-sm"
                    style={{ width: '100px' }}
                >
                    Next Step
                </button>
            </div>
            <div className="flex justify-between mt-12 relative">
                <div className="flex items-center" style={{ fontWeight: 700 }}>
                    <span className="text-gray-600 mr-8">Shortlisted</span>
                    <button
                        type="button"
                        className="p-2 rounded-lg text-sm"
                        style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(23, 37, 42, 1);' }}
                    >
                        Fast Matches
                    </button>
                </div>
                
            </div>

            {/* Dividing Line */}
            <div className="mt-4 relative" style={{ borderTop: '2px solid rgba(23, 37, 42, 0.1)' }}>
                <div
                    className="absolute"
                    style={{
                        borderTop: '2px solid rgba(58, 175, 169, 1)',
                        width: '7%',
                        top: '-1.5px',
                        marginLeft: '105px',
                        zIndex: '0'
                    }}
                ></div>
            </div>

            {/* Underlined Text and Sticker */}
            <div className="flex items-center mt-4 relative" style={{ marginRight: '150px' }}>
                <div className="flex items-center" style={{ marginRight: '20px' }}>
                    <span
                        style={{
                            fontSize: '12px',
                            fontWeight: '300',
                            lineHeight: '18px',
                            textAlign: 'left',
                            color: 'rgba(23, 37, 42, 0.7)',
                            textDecoration: 'underline'
                        }}
                    >
                        algorithm match highlighted in
                    </span>
                </div>
                <div
                    className="flex items-center justify-center px-2 py-1 rounded-md"
                    style={{
                        backgroundColor: 'rgba(155, 119, 92, 1)',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 500,
                        borderRadius: '4px'
                    }}
                >
                    Brown
                </div>
                <div className="absolute top-1 right-1">
                    <button
                        type="button"
                        className="py-1 px-4 rounded-lg"
                        style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)', border: '1.5px solid' }}
                    >
                        Continue searching
                    </button>
                </div>
            </div>

            {/* Centered Box */}
            <div className="flex justify-center mt-12">
                <div className="flex border rounded-lg shadow-sm" style={{ width: '1075px', height: '399px', position: 'relative' }}>
                    {/* Pass Sticker */}
                    <div
                        className="absolute"
                        style={{
                            width: '72px',
                            height: '30px',
                            top: '13px',
                            left: '983px',
                            padding: '3px 10px',
                            gap: '10px',
                            borderRadius: '10px 10px 10px 10px',
                            opacity: '0.8',
                            background: 'rgba(242, 71, 71, 1)',
                            color: 'rgba(254, 255, 255, 1)',
                            fontSize: '16px',
                            fontWeight: '500',
                            lineHeight: '24px',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Pass
                    </div>

                    {/* Left Side Content */}
                    <div className="flex-1 p-4 mt-10">
                        <div className="flex items-center">
                            <img src={`https://s3-alpha-sig.figma.com/img/f1bd/8158/3c5116338c0523798287977f9619940b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5BGJgiSyVmYkQPPgj7Qja31omQfUUWDMkdtVwr5cvwQjDgjK0hMRMq0OacNl7WCkG2z8MZiqHPfTn4WWXXv7LZRHil1~5t4fQPp0Tw4AgKDgCDxnXacog04l6mjM7-3wzjYXXE2ubX3C1ZGDw1pNtjPgVsh6OisB-OEJdeBNpvmzxnfbB2rNqzKWkzsWMHafw4VPHadrYiAQN-U7a2Tz2sOQQSmv4Dr6qSgkicT8B25duVduGce4jG~B7eN8jyQoiBCWaAIYMFaF0Jexis68d7t5ZK~l1Pxb-IEDsMJyStScnVRFL4NcnYMgfD5GviUi7nFpJtmXS~XJjJneUk30w__`} alt="Random" className="mr-4 mb-10 rounded-lg" style={{width: 150, height: 150}} />
                            <div>
                                <div style={{ color: 'rgba(23, 37, 42, 1)', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                    Alp Nik    
                                    <FontAwesomeIcon icon={faHeart}  style={{ color: '#FFD43B', marginRight: '8px', width: '20px', height: '20px' }} /> {/* Heart icon */}
                                    
                                </div>
                                <div className="mt-1" style={{ color: 'rgba(23, 37, 42, 0.7)', fontSize: '15px', width: '278px' }}>
                                    I Like walking dogs, Interested in watching movies, Prefers staying out.
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(43, 122, 120, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                                        Age: 26
                                    </div>
                                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(43, 122, 120, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                                        <FontAwesomeIcon icon={faMars} style={{ color: 'white', marginRight: '4px', width: '12px', height: '12px' }} />
                                        Male
                                    </div>
                                    <div className="flex items-center justify-center" style={{ width: '65px', height: '20px', backgroundColor: 'rgba(49, 181, 112, 1)', color: 'white', fontSize: '13px', borderRadius: '4px' }}>
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span style={{ color: 'rgba(23, 37, 42, 1)', fontWeight: '700', fontSize: '16px', marginTop: '50px' }}>Activities</span>
                            <div className="w-full h-67px rounded-md mt-2" style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', fontSize: '15px', padding: '10px', width: '493px', fontFamily:'Lexend'  }}>
                                <span style={{ color: 'rgba(155, 119, 92, 1)', fontWeight: 600 }}>Swimming</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> GYM</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Arcade</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Fun out</span>, 
                                <span style={{ color: 'rgba(155, 119, 92, 1)', fontWeight: 600 }}> Take out</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Board games</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Golf</span>, 
                                <span style={{ color: 'rgba(155, 119, 92, 1)', fontWeight: 600 }}> Video games</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="w-1/3 p-4 flex flex-col justify-between" style={{ marginRight: '150px' }}>
                        <div className="flex items-center mt-4">
                            <div className="flex items-center justify-center px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(155, 119, 92, 1)', color: 'white', fontSize: '15px', fontWeight: 500, borderRadius: '4px' }}>
                                Budget:
                            </div>
                            <div className="flex items-center justify-center ml-2 px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(23, 37, 42, 1)', fontSize: '15px', fontWeight: 500, borderRadius: '4px' }}>
                                €5000.00
                            </div>
                        </div>

                        <div className="mt-2">
                            <span style={{ color: 'rgba(23, 37, 42, 1)', fontSize: '16px', fontWeight: 600 }}>House Preferences</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <div className="flex items-center px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(23, 37, 42, 0.7)', color: 'rgba(254, 255, 255, 1)', fontSize: '15px', fontWeight: 400 }}>
                                    Sleeping early
                                </div>
                                <div className="flex items-center px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(23, 37, 42, 0.7)', color: 'rgba(254, 255, 255, 1)', fontSize: '15px', fontWeight: 400 }}>
                                    Duty roaster
                                </div>
                                <div className="flex items-center px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(23, 37, 42, 0.7)', color: 'rgba(254, 255, 255, 1)', fontSize: '15px', fontWeight: 400 }}>
                                    House being clean at all times
                                </div>
                            </div>
                            <div className="flex items-center justify-center px-1 py-1 rounded-md mt-2" style={{ backgroundColor: 'rgba(155, 119, 92, 1)', color: 'rgba(254, 255, 255, 1)', fontSize: '15px', fontWeight: 400, width: '73px' }}>
                                Privacy
                            </div>
                        </div>

                        <div className="mt-10 mb-10">
                            <span className="text-lg font-bold" style={{ color: 'rgba(23, 37, 42, 1)', fontSize: '16px', fontWeight: 600 }}>Interests</span>
                            <div className="w-full h-67px rounded-md mt-2" style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', fontSize: '15px', padding: '10px', width: '493px', fontFamily:'Lexend' }}>
                                <span style={{ color: 'rgba(155, 119, 92, 1)', fontWeight: 600, fontFamily:'Lexend'  }}> Reading books</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Podcasts</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Fashion</span>, 
                                <span style={{ color: 'rgba(155, 119, 92, 1)', fontWeight: 600 }}> Software Engineering</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Poetry</span>, 
                                <span style={{ color: 'rgba(23, 37, 42, 0.7)', fontWeight: 400 }}> Music</span>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <button
                                type="button"
                                className="py-1 px-4 rounded-lg"
                                style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)', fontWeight: 700 }}
                            >
                                Send invite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(23, 37, 42, 1)' }} />
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(222, 241, 242, 1)' }} />
            </div>
            <footer className="relative flex items-center justify-center mt-20" style={{
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
        </div>
    );
}
