import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="src/components/About/image of co-working.JPG"
                          alt="image"       
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Shared workspace for multiple Businesses
                      </h2>
                      <p className="mt-6 text-gray-600">
                      "We provide a professional and collaborative workspace where productivity meets comfort. Whether you're an entrepreneur, freelancer, or remote worker, we've got you covered with all the essentials for a successful workday."
                      </p>
                      <p className="mt-4 text-gray-600">
                      Join Pro Cowork and experience a new level of productivity in a supportive and dynamic environment. Free Wi-Fi | Complimentary Beverages | Networking Opportunities | Convenient Location | Flexible Memberships.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}