import { Frown } from 'lucide-react'
import React from 'react'


function ForStudents() {
  return (
  <>
     <div className="min-h-screen bg-four p-4 md:p-10 lg:p-20">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          {/* Header Section */}
          <header className="space-y-6 md:space-y-8">
            <div className="flex justify-center items-center">
              <img
                src="/assets/muktinath.png"
                alt="Muktinath Herbal Bank Logo"
                className="w-1/2 md:w-1/5 lg:w-1/3 object-contain h-auto"
              />
            </div>

            <div className="text-center space-y-3">
              <h1 className="font-bold text-3xl md:text-5xl">
                Muktinath Herbal Bank Ltd
              </h1>
              <div className="text-three text-base md:text-xl font-medium flex justify-center space-x-5">
                <span>Ph: 9099099999</span> <span>|</span>
                <span> Email: info@muktinathherbal.com</span>
              </div>
              <div className="pt-4">
                <span className="bg-green-100 text-one px-6 py-2 rounded-full text-lg md:text-2xl font-semibold uppercase tracking-wide">
                  Vacancies
                </span>
              </div>
            </div>
          </header>

          {/* Content Section */}
          <main className="max-w-4xl mx-auto bg-white shadow-lg border border-four p-12 md:p-24 rounded-3xl transition-all hover:shadow-xl">
            <div className="flex flex-col items-center space-y-4">
              <Frown className="text-three size-20"/>
              <p className="font-semibold text-2xl md:text-4xl text-three">
                No Job Openings Currently.
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Please check back later or follow us for updates.
              </p>
            </div>
          </main>

          {/* Footer info */}
          <footer className="text-center text-three text-xl">
            © {new Date().getFullYear()} Muktinath Herbal Bank Ltd. All rights
            reserved.
          </footer>
        </div>
      </div>
  </>
  )
}

export default ForStudents