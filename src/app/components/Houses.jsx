import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBed, faShower, faPerson, faExpand, faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function Houses() {
    return (
        <div className="p-8 mx-5" >
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

            <div className="pt-30" style={{fontFamily: 'Poppins'}}>
                <span style={{ color: 'rgba(23, 37, 42, 0.4)', fontSize: '14px' }}>
                    -roommate matching
                </span>
                <span className="underline ml-2" style={{ color: 'rgba(23, 37, 42, 0.4)' , fontSize: '14px' }}>
                    -house matching
                </span>
            </div>
            <div className="flex justify-between items-center mt-4" style={{fontFamily: 'Poppins'}}>
                <div className="flex items-center">
                    <div
                        className="h-4 w-4 rounded-full mr-2"
                        style={{ backgroundColor: 'rgba(43, 122, 120, 1)' }}
                    />
                    <h1 className="text-4xl font-bold">For You</h1>
                </div>
                <button
                    type="button"
                    className="border-none bg-black text-white p-2 rounded-lg text-sm"
                    style={{ width: '100px' }}
                >
                    Next Step
                </button>
            </div>
            <div className="flex justify-between mt-12 relative" style={{fontFamily: 'Poppins'}}>
                <div className="flex items-center relative">
                    <button
                        type="button"
                        className="p-2 rounded-lg text-sm"
                        style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(23, 37, 42, 1)', fontWeight: 500 }}
                    >
                        Houses
                    </button>
                    <div
                        className="h-2 w-2 rounded-full ml-2"
                        style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
                    />
                </div>
            </div>
            <div className="mt-4 relative" style={{ borderTop: '2px solid rgba(23, 37, 42, 0.1)', fontFamily: 'Poppins'}}>
                <div
                    className="absolute"
                    style={{
                        borderTop: '2px solid rgba(58, 175, 169, 1)',
                        width: '5.7%',
                        top: '-1.5px',
                        left: '0'
                    }}
                ></div>
            </div>
            <div className="flex justify-end mt-4" style={{fontFamily: 'Poppins'}}>
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

            {/* New Box */}
            <div className="p-4 border rounded-lg shadow-sm relative mt-10 ml-20" style={{ width: '1179px', height: '200px', borderColor: 'rgba(222, 241, 242, 1)' }}>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/9968/9f70/391c161632e68ac67fa99f8dbac3baf3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULAYR0JfuHaqJZkVhWkNFwitM14VbBSMOuDLP2GX3a59tikKxkyUSJdZ91yKnWQGzLUL4RTy2SLYHe4O16rWRgz9CDdb7Sy5uav87aI1RkOWXe3ZjmJMkb4tF7V6RI~u13qFQOndgINiKuNPya-~aB1jL1Uw~Z5kvswIGBkMq1D31w4JIbaJ~s-DMgRgAjequ1rp-D6Vf2RsVsa6OUL8NXO96fzWAOWWvKCVxgv-kGeG63Jb88YsnskbEp35wTe0ll6p2SC4Jy91wJkRNgXifg19KNwykuB9EvLh6ebyrSMBjgSCXeqhO0IZkTvH5LF92Ggl5HAC5aXZxiNqyXRv3g__" 
                    alt="Image" 
                    className="absolute top-[26px] left-[23px] w-[250px] h-[147.53px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]" 
                />
                <div className="absolute top-[26px] left-[283px] flex flex-col space-y-5">
                    <span className="text-[20px] font-semibold text-black flex items-center" style={{fontFamily: 'Poppins'}}>
                        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 mr-2" />
                        Amsterdam
                    </span>
                    <div className="flex flex-col space-y-1" >
                        <div className="text-[16px] font-semibold flex items-center justify-center rounded-[10px] py-1 px-2" style={{ width: '120px', color: 'rgba(43, 122, 120, 1)', backgroundColor: 'rgba(58, 175, 169, 0.05)',fontFamily: 'Poppins'}}>
                            $2500.00
                        </div>
                        <div className="flex flex-row space-y-8 text-white rounded-[10px] p-7" style={{ width: '577px', fontSize: '18px' }}>
                            <div className="flex space-x-4">
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    2 Bed Rooms
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faShower} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    1 Bath
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faPerson} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    Roommates
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faExpand} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    67 sqmt
                                </div>
                                <button
                                    className="rounded-lg absolute font-bold"
                                    style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)', fontSize: '16px', marginLeft: 680, width:'168px', fontFamily: 'Poppins'}}
                                >
                                    Book Apartment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 border border-red-500 text-red-500 rounded-md">
                    <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm relative mt-10 ml-20" style={{ width: '1179px', height: '200px', borderColor: 'rgba(222, 241, 242, 1)' }}>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/9968/9f70/391c161632e68ac67fa99f8dbac3baf3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULAYR0JfuHaqJZkVhWkNFwitM14VbBSMOuDLP2GX3a59tikKxkyUSJdZ91yKnWQGzLUL4RTy2SLYHe4O16rWRgz9CDdb7Sy5uav87aI1RkOWXe3ZjmJMkb4tF7V6RI~u13qFQOndgINiKuNPya-~aB1jL1Uw~Z5kvswIGBkMq1D31w4JIbaJ~s-DMgRgAjequ1rp-D6Vf2RsVsa6OUL8NXO96fzWAOWWvKCVxgv-kGeG63Jb88YsnskbEp35wTe0ll6p2SC4Jy91wJkRNgXifg19KNwykuB9EvLh6ebyrSMBjgSCXeqhO0IZkTvH5LF92Ggl5HAC5aXZxiNqyXRv3g__" 
                    alt="Image" 
                    className="absolute top-[26px] left-[23px] w-[250px] h-[147.53px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]" 
                />
                <div className="absolute top-[26px] left-[283px] flex flex-col space-y-5">
                    <span className="text-[20px] font-semibold text-black flex items-center" style={{fontFamily: 'Poppins'}}>
                        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 mr-2" />
                        Amsterdam
                    </span>
                    <div className="flex flex-col space-y-1" >
                        <div className="text-[16px] font-semibold flex items-center justify-center rounded-[10px] py-1 px-2" style={{ width: '120px', color: 'rgba(43, 122, 120, 1)', backgroundColor: 'rgba(58, 175, 169, 0.05)',fontFamily: 'Poppins'}}>
                            $2500.00
                        </div>
                        <div className="flex flex-row space-y-8 text-white rounded-[10px] p-7" style={{ width: '577px', fontSize: '18px' }}>
                            <div className="flex space-x-4">
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    2 Bed Rooms
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faShower} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    1 Bath
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faPerson} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    Roommates
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faExpand} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    67 sqmt
                                </div>
                                <button
                                    className="rounded-lg absolute font-bold"
                                    style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)', fontSize: '16px', marginLeft: 680, width:'168px', fontFamily: 'Poppins'}}
                                >
                                    Book Apartment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 border border-red-500 text-red-500 rounded-md">
                    <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm relative mt-10 ml-20" style={{ width: '1179px', height: '200px', borderColor: 'rgba(222, 241, 242, 1)' }}>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/9968/9f70/391c161632e68ac67fa99f8dbac3baf3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULAYR0JfuHaqJZkVhWkNFwitM14VbBSMOuDLP2GX3a59tikKxkyUSJdZ91yKnWQGzLUL4RTy2SLYHe4O16rWRgz9CDdb7Sy5uav87aI1RkOWXe3ZjmJMkb4tF7V6RI~u13qFQOndgINiKuNPya-~aB1jL1Uw~Z5kvswIGBkMq1D31w4JIbaJ~s-DMgRgAjequ1rp-D6Vf2RsVsa6OUL8NXO96fzWAOWWvKCVxgv-kGeG63Jb88YsnskbEp35wTe0ll6p2SC4Jy91wJkRNgXifg19KNwykuB9EvLh6ebyrSMBjgSCXeqhO0IZkTvH5LF92Ggl5HAC5aXZxiNqyXRv3g__" 
                    alt="Image" 
                    className="absolute top-[26px] left-[23px] w-[250px] h-[147.53px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]" 
                />
                <div className="absolute top-[26px] left-[283px] flex flex-col space-y-5">
                    <span className="text-[20px] font-semibold text-black flex items-center" style={{fontFamily: 'Poppins'}}>
                        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 mr-2" />
                        Amsterdam
                    </span>
                    <div className="flex flex-col space-y-1" >
                        <div className="text-[16px] font-semibold flex items-center justify-center rounded-[10px] py-1 px-2" style={{ width: '120px', color: 'rgba(43, 122, 120, 1)', backgroundColor: 'rgba(58, 175, 169, 0.05)',fontFamily: 'Poppins'}}>
                            $2500.00
                        </div>
                        <div className="flex flex-row space-y-8 text-white rounded-[10px] p-7" style={{ width: '577px', fontSize: '18px' }}>
                            <div className="flex space-x-4">
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    2 Bed Rooms
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faShower} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    1 Bath
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faPerson} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    Roommates
                                </div>
                                <div style={{ color: 'rgba(43, 122, 120, 0.5)', fontWeight:400, display: 'flex', alignItems: 'center', fontFamily: 'Lexend' }}>
                                    <FontAwesomeIcon icon={faExpand} className="w-6 h-6 mr-2" style={{ color: 'rgba(23, 37, 42, 1)' }}/>
                                    67 sqmt
                                </div>
                                <button
                                    className="rounded-lg absolute font-bold"
                                    style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)', fontSize: '16px', marginLeft: 680, width:'168px', fontFamily: 'Poppins'}}
                                >
                                    Book Apartment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 border border-red-500 text-red-500 rounded-md">
                    <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                </div>
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
