import { useState } from 'react'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('الكل')

  const projects = [
    { img: '/assets/project/project (2).webp', category: 'سكني' },
    { img: '/assets/project/project-villa.webp', category: 'سكني' },
    { img: '/assets/project/project (11).webp', category: 'سكني' },
    { img: '/assets/project/project (13).webp', category: 'سكني' },
    { img: '/assets/project/project (1).webp', category: 'تجاري' },
    { img: '/assets/project/project (3).webp', category: 'تجاري' },
    { img: '/assets/project/project (4).webp', category: 'محطات الوقود' },
    { img: '/assets/project/project (5).webp', category: 'محطات الوقود' },
    { img: '/assets/project/project (6).webp', category: 'اداري' },
    { img: '/assets/project/project (7).webp', category: 'اداري' },
    { img: '/assets/project/project (8).webp', category: 'مستودعات' },
    { img: '/assets/project/project (9).webp', category: 'مستودعات' },
  ]

  const categories = ['الكل', 'سكني', 'تجاري', 'محطات الوقود', 'اداري', 'مستودعات']

  const filteredProjects = activeFilter === 'الكل'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-20 px-5 text-center overflow-hidden" id="projects">
      <h2 className="section-heading font-cairo text-4xl font-bold text-maroon mb-16">مشاريعنا</h2>

      <div className="flex justify-center mb-12 mt-8">
        <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-item relative text-lg font-medium cursor-pointer pb-1 transition-colors duration-300 hover:text-maroon ${activeFilter === cat ? 'text-maroon font-bold' : 'text-gray-500'}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div id="projects-grid" className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto px-2">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card w-75 flex-none bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-gray-100"
            data-category={project.category}
          >
            <img
              src={project.img}
              loading="lazy"
              width="400"
              height="240"
              alt={`Project ${index + 1}`}
              className="w-full h-60 object-cover block"
            />
          </div>
        ))}
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-3 mt-14 px-11 py-4 bg-maroon text-white rounded-full text-xl font-bold font-cairo shadow-lg hover:bg-maroon-dark hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        عرض كافة المشاريع <i className="fas fa-arrow-left"></i>
      </a>
    </section>
  )
}

export default Projects