import React from 'react';

export default function SignUpForm() {
  return (
    <div className="flex flex-col h-screen">
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
      <div className="flex h-full">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://s3-alpha-sig.figma.com/img/6007/4b0b/729b4098a6dcee28c96a8d7e0fbd4cad?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ANRskOQX4ZwehiS6zmDheSTGQbkWcAKBFxIwybFTRkk2eQfIw7F6gbnW9J4COd7a-mBkk565pEzXDOuzBIFYuA4feJunCsi7vIFEUzGVjWjz0l-rTjubFxjH3c5fqG0~4UWIQk2IDtANcQltCmK4q7Y9ql1uEb9Q-ZbF~QL5CrFj3gw3SdYWv78hJ82vQ~eFCtbUgX-~V5ioS7LyRGJExJfT2oG8hZmXV6pVv4hqTl8FDX2P3U0XLqSzj9ZCVaQagHslMJZOA39lpOP045way1XTJ9RsNNllQcXa~BabAJMPK3mhv1MAfEBtYbbIjNeGsky9WTz4O5qsU~T--yC1sA__")`,
          }}
        ></div>
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-3/4">
            <h1 className="text-left text-4xl font-semibold mb-8" style={{ color: 'rgba(43, 122, 120, 1)', fontWeight: 500 }}>
              Tenant Sign Up
            </h1>
            <form className="space-y-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Open for Roommates</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Monthly Budget</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Re-password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-transparent border rounded border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
                />
              </div>
              <div className="col-span-2 flex flex-col items-center">
                <button
                  className="mx-auto block text-center bg-black text-white p-2 rounded-lg"
                  type="submit"
                  style={{ width: '250px' }}
                >
                  Get Started
                </button>
                <button
                  className="mx-auto block text-center border p-2 rounded-lg text-[rgba(43, 122, 120, 1)] border-[rgba(222, 241, 242, 1)] bg-transparent mt-4"
                  type="button"
                  style={{ width: '250px' }}
                >
                  Get started with Google
                </button>
                <div className="mt-4 text-center">
                  <span>Have an account? <span className="font-bold" style={{ color: 'rgba(43, 122, 120, 1)' }}>Log in</span></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    
    </div>
  );
}
