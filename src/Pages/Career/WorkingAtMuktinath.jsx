import React, { useState } from "react";

const WorkingAtMuktinath = () => {
  // All state and logic must live inside the component function
  const [jobs, setJobs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({ 
    title: "", 
    deadline: "", 
    description: "" 
  });

  const benefits = [
    { title: "Growth", desc: "Clear career paths and leadership training.", icon: "📈" },
    { title: "Culture", desc: "A supportive, family-like environment.", icon: "🌱" },
    { title: "Wellness", desc: "Health insurance and wellness programs.", icon: "🏥" },
    { title: "Impact", desc: "Help promote natural herbal health solutions.", icon: "🌿" },
  ];

  const handleAddJob = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    setJobs([...jobs, { ...formData, id: Date.now() }]);
    // Clear the form after adding
    setFormData({ title: "", deadline: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Admin Toggle */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="fixed bottom-5 right-5 z-50 bg-gray-900 text-white px-4 py-2 rounded-full text-xs opacity-40 hover:opacity-100 transition-all shadow-lg"
      >
        {isAdmin ? "Close Admin" : "Admin Panel"}
      </button>

      {/* Hero Header */}
      <header className="bg-green-50 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <img src="/assets/muktinath.png" alt="Logo" className="mx-auto w-32 md:w-40" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Join the Herbal Revolution</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            At Muktinath Herbal Bank Ltd, we don't just offer jobs; we offer the chance to build a 
            healthier future. We are looking for passionate individuals to grow with us.
          </p>
        </div>
      </header>

      {/* Working at Muktinath Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Why Work at Muktinath?</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Posting Form */}
      {isAdmin && (
        <section className="py-10 bg-gray-50 border-y border-gray-200">
          <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl border-t-4 border-green-600">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Post New Vacancy</h3>
            <form onSubmit={handleAddJob} className="space-y-4">
              <input
                type="text" 
                placeholder="Job Title"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <input
                type="text" 
                placeholder="Application Deadline"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
              <textarea
                placeholder="Job Role & Requirements"
                className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-green-400 outline-none"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
                Publish Opening
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Open Vacancies List */}
      <main className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Open Vacancies</h2>
              <p className="text-gray-500">Find your place in our growing team.</p>
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="bg-white p-16 text-center rounded-3xl shadow-sm border border-gray-100">
              <p className="text-2xl font-semibold text-gray-300">No active openings right now.</p>
              <p className="text-gray-400 mt-2 text-sm">Follow us to stay updated on future opportunities.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-8 border-green-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 mt-2">{job.description}</p>
                    <div className="mt-4 inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                      Apply by: {job.deadline || "TBD"}
                    </div>
                  </div>
                  <button className="whitespace-nowrap bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-100">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer Contact */}
      <footer className="py-12 text-center border-t border-gray-100 text-gray-500 text-sm">
        <p className="font-semibold text-gray-700">Muktinath Herbal Bank Ltd</p>
        <p>Ph: 9099099999 | Email: bhumika@gmail.com</p>
        <p className="mt-4">© {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default WorkingAtMuktinath;