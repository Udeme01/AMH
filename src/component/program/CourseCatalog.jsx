import { useState } from "react";
import { Filter, ChevronDown, Users, Clock, Award } from "lucide-react";
import { COURSES } from "../../data/courses";

const CourseCatalog = () => {
  const [selectedSort, setSelectedSort] = useState("Most popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sortOptions = [
    "Most popular",
    "Newest",
    "Rating: High to Low",
    "Duration: Short to Long",
    "Duration: Long to Short",
  ];

  const levels = ["Beginner Friendly", "Intermediate", "Advanced"];
  const categories = ["Course", "Bootcamp", "Specialization"];

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-size-3xl tracking-display leading-h-normal mb-6 font-semibold text-left capitalize">
        Everything you need in one place
      </h2>
      {/* Header */}
      <div className="mb-8">
        <h4 className="text-size-lg font-semibold mb-3">Browse Catalog</h4>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Filters and Results */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} />
              <button className="text-size-base font-medium rounded">
                Filters
              </button>
            </button>
            <div className="text-sm text-gray-600">
              <span className="text-size-sm font-semibold">841 results</span>
              <button className="text-size-sm font-medium cursor-pointer ml-4">
                Clear filters
              </button>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Filters Panel */}
        {filtersOpen && (
          <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Level</h3>
                {levels.map((level) => (
                  <label key={level} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-sm text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                {categories.map((category) => (
                  <label key={category} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Duration</h3>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2 text-blue-600" />
                  <span className="text-sm text-gray-700">0-10 hours</span>
                </label>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2 text-blue-600" />
                  <span className="text-sm text-gray-700">10-30 hours</span>
                </label>
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2 text-blue-600" />
                  <span className="text-sm text-gray-700">30+ hours</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Course Category Badge */}
            <div className="p-4 pb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                {course.category}
              </span>
            </div>

            {/* Course Content */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Course Stats */}
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-gray-900">
                      {course.rating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Instructor:{" "}
                    <span className="font-medium">{course.instructor}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-6 text-center">
        <button className="px-8 py-4 bg-blue text-white font-medium rounded cursor-pointer transition duration-500 transform hover:-translate-y-0.5 hover:scale-95">
          Load More Courses
        </button>
      </div>
    </div>
  );
};

export default CourseCatalog;
