import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Next js</h1>
      <div className="pagination flex justify-end space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
          Home
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
          About
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">
          Services
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Contact
        </a>
      </div>

      <div className="first-image relative">
        <img
          src="https://wise.com/imaginary-v2/a1aff2ea163604c7be42140235af0772.jpg?width=700px"
          className="w-full h-500px "
          alt="New York City Evening"
        ></img>
      </div>

      <div className="flex justify-center mt-8">
        <div className="about-us">About us</div>
      </div>

      <div className="text-column flex flex-col lg:flex-row lg:space-x-4 mt-8">
        <div className="first-row bg-blue-200 p-6 lg:p-10 rounded-lg hover:bg-blue-300 transition duration-300 mb-4 lg:mb-0">
          <h1 className="text-xl font-bold">Our Values</h1>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
        </div>

        <div className="second-row bg-blue-200 p-6 lg:p-10 rounded-lg hover:bg-green-300 transition duration-300 mb-4 lg:mb-0">
          <h1 className="text-xl font-bold">Our Objectives</h1>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
        </div>

        <div className="third-row bg-blue-200 p-6 lg:p-10 rounded-lg hover:bg-yellow-300 transition duration-300">
          <h1 className="text-xl font-bold">Our Objectives</h1>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
          <p>
            As our responsibilities, we like to receive people from all
            countries abroad.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="about-us">our Services</div>
      </div>

      <div className="flex flex-row space-x-4">
        <div className="our-services-column">
          <div className="flex items-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:916/1*z2BaY_MTgmcjgLfNyGQJ4g.png"
              alt="Mobile Application"
              className="mr-2"
            ></img>
            <h3 className="ml-2">Mobile application</h3>
          </div>
        </div>

        <div className="our-services-column">
          <div className="flex items-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:916/1*z2BaY_MTgmcjgLfNyGQJ4g.png"
              alt="Web Application"
              className="mr-2"
            ></img>
            <h3 className="ml-2">Web application</h3>
          </div>
        </div>

        <div className="our-services-column">
          <div className="flex items-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:916/1*z2BaY_MTgmcjgLfNyGQJ4g.png"
              alt="UI Design"
              className="mr-2"
            ></img>
            <h3 className="ml-2">UI design</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
