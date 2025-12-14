import React from 'react'

const About = () => {
  return (
    <>
    <section id="about" className="w-[90%] mx-auto px-6 py-12">
        <div  className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="text-4xl font-bold mb-3  bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
                bg-clip-text text-transparent inline-block">About Me</h3>
            <p className="text-slate-300 text-md">I am a B.Tech graduate in Information Technology with a strong foundation in front-end and back-end web development. I specialize in building responsive and interactive applications using React, JavaScript, and modern web technologies.</p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <div><strong>Skills:</strong> React, Node.js, MongoDB</div>
              <div><strong>Interests:</strong> ML,Blockchain, UX, Performance</div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-gray-600 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Timeline</h4>
                  <div className="text-xs text-slate-400">2019 - 2025</div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>2021 - Internship: Python + ML (Softpro India)</li>
                  <li>2023 - Built Consensus Mechanism Selector (College Project)</li>
                  <li>2024 - Internship: Frontend & React (Edureka)</li>
                  <li>2025 - Actively seeking Full-Stack Developer opportunities</li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl ring-1 ring-gray-600">
                  <h5 className="font-semibold mb-2">Certificates</h5>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>Python with Machine Learning – Softpro (A+)</li>
                    <li>Web Development Certification</li>
                  </ul>
                </div>
                {/* <div className="p-4 rounded-xl ring-1 ring-slate-700/30">Open-source contributions</div> */}
              </div>
            </div>
          </div>
        </div>

        


{/* ----------------------- */}
<h4 className="font-semibold mb-10  pt-20 text-3xl  bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
bg-clip-text text-transparent inline-block">Education</h4>


<div className="relative w-full">
  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 h-full w-px bg-slate-600"></div>

  {/* BTECH – RIGHT */}
  <div className="relative mb-12 flex items-start justify-end" data-aos="fade-down" data-aos-delay="200">
    {/* CARD – full width after line */}
    <div className="w-[48%] pl-8" data-aos="fade-down" >
      <div className="bg-slate-900/40 border   border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2022 - 2025</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">B.Tech - Information Technology </p>
        <p className="text-xs sm:text-lg text-slate-400">Rajkiya Engineering College Azamgarh</p>
      </div>
    </div>

    {/* DOT */}
    <span className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
  </div>

  {/* DIPLOMA – LEFT */}
  <div className="relative mb-12 flex items-start justify-start" data-aos="fade-down" data-aos-delay="200">
    <div className="w-[48%] pr-8 text-right">
      <div className="bg-slate-900/40 border  border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2019 - 2021</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">Diploma - Information Technology</p>
        <p className="text-xs sm:text-lg text-slate-400">Chhatrapati Shahuji Maharaj Government Polytechnic College Ambedkar Nagar</p>
      </div>
    </div>

    {/* DOT */}
    <span className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
  </div>

  {/* 12th – RIGHT */}
  <div className="relative mb-12 flex items-start justify-end" data-aos="fade-down" data-aos-delay="200">
    <div className="w-[48%] pl-8">
      <div className="bg-slate-900/40 border border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2017 - 2019</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">Senior Secondary (12th)</p>
        <p className="text-xs sm:text-lg text-slate-400">Uttar Pradesh Board of High School and Intermediate Education</p>
      </div>
    </div>

    <span className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
  </div>

  {/* 10th – LEFT */}
  <div className="relative flex items-start justify-start" data-aos="fade-down" data-aos-delay="200">
    <div className="w-[48%] pr-8 text-right">
      <div className="bg-slate-900/40 border  border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2015 – 2017</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">Secondary (10th)</p>
        <p className="text-xs sm:text-lg text-slate-400">Uttar Pradesh Board of High School and Intermediate Education</p>
      </div>
    </div>

    <span className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
  </div>
</div>




      </section>
    </>
  )
}

export default About