import React from 'react';

export default function RoommateMatching() {
  const bioTexts = [
    'Loves hiking and outdoor adventures.',
    'Enjoys cooking and trying out new recipes.',
    'Passionate about reading and writing.',
    'Avid gamer and tech enthusiast.'
  ];

  return (
    <div className="p-8" style={{fontFamily: 'Poppins'}}>
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

      <div className=" pt-30">
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
      <div className="flex justify-between mt-12">
        <div className="flex items-center">
          <span className="text-gray-700">Shortlisted</span>
          <div
            className="h-2 w-2 rounded-full ml-2 mr-8"
            style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
          />
          <span className="text-gray-700">Fast Matches</span>
          <div
            className="h-2 w-2 rounded-full ml-2"
            style={{ backgroundColor: 'rgba(58, 175, 169, 1)' }}
          />
        </div>
        <button
          type="button"
          className="text-white p-2 rounded-lg text-sm"
          style={{ backgroundColor: 'rgba(58, 175, 169, 1)', width: '100px' }}
        >
          Filters
        </button>
      </div>
      <div className="mt-4" style={{ borderTop: '2px solid rgba(23, 37, 42, 0.1)' }}></div>
      <div className="mt-4 grid grid-cols-4 gap-8">
            {[ 'Gender', 'Budget', 'Rating'].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-1 font-poppins">{label}</label>
              
                {label === 'Gender' && (
                  <select
                    className="w-full p-2 bg-transparent border rounded outline-none"
                    style={{ borderColor: 'rgba(222, 241, 242, 1)', borderRadius: '10px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '15px' }}
                  >
                    <option disabled selected hidden>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                )}
                {label === 'Budget' && (
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
        {bioTexts.map((text, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm relative">
            <div className="text-lg font-bold">Catelyn Finch</div>
            <div className="flex mt-2">
              <img src={`https://s3-alpha-sig.figma.com/img/a51d/59a9/fc77a9618660f11790094f7f5e609416?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=efrEh9hB1WfSgPDHUPsYIDi7vbCJxHAmdJ4yu2jJmwB5WGn~AG0NRl2kjMObJW5LHshjH15IZJQu~P9KpC6m6l81PLulHm4NRxI~8-33FcuSo79g7BLNnjOQGNvmFnF6tyOEridHSft1jskw8xHbG8~Tn-gyX~2t33ZxyT0az3utK7Z68vNMCSjAZnX~QDaEwhlDnlBtLJ6C7zTzwHT8kqqjiG0z4LEwJbow~k~sjj-mGA6m8cz8pRrcEnCKLhU6kSjlbWorXSvkh5wD11Jv1z78Gu9ne7ByNwBIJqoaLYJzbnjI-E64fvLAPvel9a81~rWPk8ZITpHJREdpsEmJhA__`} alt="Random" className="mr-4" style={{width:107, height: 107, borderRadius:'10px'}} />
              <div>
                <div style={{ color: 'rgba(23, 37, 42, 1)', fontWeight: 'bold' }}>Bio:</div>
                <div className="mt-1" style={{ color: 'rgba(23, 37, 42, 0.7)' }}>{text}</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="py-1 px-4 rounded-lg" style={{ backgroundColor: 'rgba(242, 71, 71, 1)', color: 'rgba(254, 255, 255, 1)' }}>Reject</button>
              <button className="py-1 px-4 rounded-lg" style={{ backgroundColor: 'rgba(58, 175, 169, 0.05)', color: 'rgba(43, 122, 120, 1)' }}>Shortlist</button>
            </div>
            <div className="absolute top-2 right-2 text-gray-500">4.0</div>
            <div className="absolute bottom-16 left-40" style={{ color: 'rgba(23, 37, 42, 1)', fontWeight: 'bold' }}>€5000.00</div>
            <div className="absolute bottom-16 right-4 underline cursor-pointer" style={{ color: 'rgba(23, 37, 42, 1)' }}>more details</div>
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
