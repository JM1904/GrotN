import React from 'react';



export default function LoginForm() {
  return (
    <div className="flex h-screen" style={{fontFamily: 'Poppins'}}>
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
              Sign up
            </button>
            </div>
          </div>
        </nav>
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/c4b8/a0e2/d280c74719c221dd4a3074d08c57cd4b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=el-GUJkMvXaB04e~Q4ZrhrYWAQcfexn5zZWsL-9R0NIcISPEnb-GyPpB8BtgepyGreZUPWyobv7NfL8-pDeofxU0zowMBdPV0eByQP13zkEL6GC~ewcQmu9Ep2JSBvzne2eFyfqs7C0TIFim9knp3zUG06HErkaBZHYFKu-Yv1VN7ZYy7o33~aMdurpScPdZvY5tSpHJ6qiYWZB9akbv79Gcs7oUefox2Bdx805kGbd9y5Tnr4BC661Se0skDO7brwy~x7eyxEoBdKIcA3ibztrQKPdmMtvlJD1l5vGoRKJebQVn5GD5St39Od3qsLrSZfwxM7xzgVAIz-4Oox1y2Q__")`,
        }}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4">
          <h1 className="text-left text-4xl font-semibold mb-8" style={{ color: 'rgba(43, 122, 120, 1)', fontWeight: 500, fontFamily: 'Poppins' }}>Tenant Log in</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 ">Email Address</label>
              <input
                type="text"
                className="w-full p-2 bg-transparent border rounded-md border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 bg-transparent border rounded-md border-[rgba(222, 241, 242, 1)] focus:border-[rgba(58, 175, 169, 1)] outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <label className="ml-2">Remember me</label>
              </div>
              <button type="button" className="border-none bg-none outline-none focus:outline-none" style={{ color: 'rgba(43, 122, 120, 1)', fontWeight: 400}}>I'm a landlord</button>
            </div>
            <button
              className="mx-auto block text-center bg-black text-white p-2 rounded-lg"
              type="submit"
              style={{ width: '250px' }}  
            >Log in</button>
            <button
              className="mx-auto block text-center border p-2 rounded-lg text-[rgba(43, 122, 120, 1)] border-[rgba(222, 241, 242, 1)] bg-transparent mt-4"
              type="button"
              style={{ width: '250px' }} 
            >
              Log in with Google
            </button>
            <div className="mt-4 text-center">
              <span>Get started with <span className="font-bold" style={{ color: 'rgba(43, 122, 120, 1)' }}>GrotN. </span></span>
              <button
                type="button"
                className="text-[rgba(43, 122, 120, 1)] border-none bg-none outline-none focus:outline-none font-bold mr-2"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
