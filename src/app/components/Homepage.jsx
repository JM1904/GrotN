import React from "react";


export default function Home() {
  
  return (
      <main className="flex flex-col bg-white overflow-hidden">
        <nav
                className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
                style={{ height: '40px', backgroundColor: 'rgba(254, 255, 255, 0.9)', borderBottom: '1px solid rgba(222, 241, 242, 1)' }}
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
                Resources
              </span>
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
                Manual
              </span>
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
                Pricing
              </span>
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
                About Us
              </span>
            </div>
            <div className="flex-1 flex justify-center items-center mr-80">
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
              className="border-none block text-center bg-black text-white p-2 rounded-lg text-sm font-poppins mr-0"
              style={{ width: '70px' }}
            >
              Log in
            </button>
            </div>
          </div>
        </nav>
          <div className="flex w-full h-screen">
              <div className="w-1/2 h-full flex flex-col">
                  <h1 className="text-7xl mt-10 ml-12 mr-24" style={{ fontFamily: 'Lexend', fontWeight: 500 }}>
                      Your Dream 
                      <br />Mate, 
                      <br />Your Dream 
                      <br />Rental.
                  </h1>
                  <div className="flex-grow flex items-center justify-center">
                      <div className="relative w-3/4" style={{ fontFamily: 'Poppins' }}>
                          <img
                              className="bg-cover bg-center h-1/2 ml-10"
                              src="https://s3-alpha-sig.figma.com/img/9d37/b910/14b5c26f811cc55bd8d898555f405a21?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDgD-RpiQ6oyfBxCo64y2Z4oQG7UmcFUv65aVXSNqTKBeXVVEJ~bMNK2VRlWlULfFe-4M-0d9GqZFHynPJfmLzBN8ItENYiPxqsTU6C4xCvH4I8V1gfpGMzlPyRBGQxMASWmixrH7fbofuzx9WZKFqaLpj5IKI0K29XjNNDrcMBbjgGQDriGQl-DwHIfpLJFBR3Zri7cpCj4K-PwLgCLA6-zYgns5e~pqn-VrfjfXxrby6tw~8X8qpHRxF105mlEmapR2ikTueQaqYyYwEKb5zrP7r-Hhc1bN2gMP0VViTX9HVufI4MFIFsP~LQgwu-YrQY3w~RGf0qY0sDu21vo3Q"
                              alt="Building"
                          />
                          <div className="absolute top-1/4 right-10 text-white ml-20">
                              <div className="text-2xl font-light" style={{ fontFamily: 'Poppins' }}>
                                  Find your perfect living space hassle-free with <span className="font-bold text-2xl">GrotN</span>! Enjoy
                                  secure housing wherever you desire, without the stress of
                                  overbidding or uncertainty.🏡
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="w-1/2 h-full flex items-center justify-center"
                  style={{
                      backgroundImage: `url("https://s3-alpha-sig.figma.com/img/2ca9/1a80/55c2f961b411b3a08f8fca0eb455ea70?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TrZOLpEsGXQufS9U3WaSG3YM1uvQMwnwaBUnNtdVNX0syOLODPPdLaKeicUWgv5Yf9BECn1yNmekiksXHjAypwKamYU68CpcOxo6syGc6v9RLM8whUKghgNcWhEGw7OYRrjraDdcB4App2gibBxzqpSxEOq93ELvBRcYCfLiybA8GBPg5TrsESaCZxDY7CRV0ZjpVtDBZP~Am0L1MUCVlV5V-I8AOJZ1WKvmmvLua7SzwassChfz4Msg3oc1NrAEoJTAzVN94~7KFXJN8HbuZtOJvnz4iDQwtxMJhq2~zqhlz9sGS8DmV8rZq7KJTrqP0F3PR7y8YppKt9dNsuyb5w__")`,
                      backgroundSize: 'cover',
                      fontFamily: 'Poppins'
                  }}
              >
                  <form className="p-10 rounded w-3/4" style={{ color: '(222, 242, 241, 0.5)', backgroundColor: 'rgba(222, 242, 241, 0.5)' }}>
                      <div className="flex justify-center mb-10">
                          <button
                              className="px-10 py-2 focus:font-bold rounded-sm" style={{ backgroundColor: 'rgba(58, 175, 169, 1)', color: 'rgba(255, 255, 255, 1)'  }}
                              type="button"
                          >
                              Tenant
                          </button>
                          <button
                              className="px-10 py-2 focus:bg-white focus:font-bold rounded-sm"
                              type="button"
                          >
                              Landlord
                          </button>
                      </div>
                      <div className="mb-5">
                          <h3 style={{ color: 'rgba(23, 37, 42, 1)' }}>City/Street</h3>
                          <select className="w-full p-2 border border-white rounded-lg bg-transparent text-white mt-5"
                              style={{ color: 'rgba(23, 37, 42, 0.7)' }}>
                              <option>Amsterdam</option>
                              <option>Rotterdam</option>
                              <option>The Hague</option>
                              <option>Eindhoven</option>
                              <option>Utrecht</option>
                          </select>
                      </div>
                      <div className="mb-4">
                          <h3 style={{ color: 'rgba(23, 37, 42, 1)' }}>Roommate Preference</h3>
                          <select className="w-full p-2 border border-white rounded-lg bg-transparent text-white mt-5"
                              style={{ color: 'rgba(23, 37, 42, 0.7)' }}>
                              <option>With Roommate</option>
                              <option>Solo</option>
                              <option>Apartment</option>
                          </select>
                      </div>
                      <div className="mb-4">
                          <h3 style={{ color: 'rgba(23, 37, 42, 1)' }}>Monthly budget</h3>
                          <select className="w-full p-2 border border-white rounded-lg bg-transparent text-white mt-5"
                              style={{ color: 'rgba(23, 37, 42, 0.7)' }}>
                              <option>250€ - 750€</option>
                              <option>750€ - 1500€</option>
                              <option>1500€ - 3000€</option>
                          </select>
                      </div>
                      <div className="flex justify-center">
                          <button
                              className="bg-black text-white p-2 rounded-md"
                              type="submit"
                          >
                              Get Started
                          </button>
                      </div>
                  </form>
              </div>
              
          </div>
          
          
              
         
      </main>
  );
}



  






  
