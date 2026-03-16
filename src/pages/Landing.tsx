import CourseCard, { Course } from "../component/CourseCard";
import Appcomponent from "../component/Appcomponent";
import { data, featuredCourses, testimonials } from "../constants/data";
import TestimonialCard, { Testimonial } from "../component/TestimonialCard";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Landing = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between py-4 px-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded-lg bg-[#ec5b13]">
            {" "}
            <span className="flex items-center justify-center text-white text-xl ">
              L
            </span>
          </div>
          <h3 className="text-lg font-semibold capitalize ">learnFlow</h3>{" "}
        </div>
        <ul className="flex items-center gap-4">
          <li className="text-sm text-gray-700 capitalize">courses</li>
          <li className="text-sm text-gray-700 capitalize">mentors</li>
          <li className="text-sm text-gray-700 capitalize">pricing</li>
          <li className="text-sm capitalize bg-[#ec5b13] text-white px-5 py-1 rounded-full hover:bg-[#d44d0f] transition-all" >
            <Link to="/sign-up">  get started</Link>
          </li>
        </ul>
      </nav>
      {/* hero section  */}
      <section
        className="relative overflow-hidden pt-16 pb-12 lg:pt-32 lg:pb-24 bg-white"
        data-purpose="hero-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-[#fef1eb] text-[#ec5b13] text-xs font-bold tracking-widest uppercase mb-4">
              Empowering 50k+ Students
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Unlock Your <span className="text-[#ec5b13]">Potential</span> with
              Expert Learning
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Master the most in-demand skills in Web Development, Design, and
              Business with project-based courses taught by industry veterans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="px-8 py-4 bg-[#ec5b13] text-white rounded-xl font-semibold shadow-lg shadow-orange-100 hover:bg-[#d44d0f] transition-all text-center"
                href="#courses"
              >
                Browse Courses
              </a>
              <a
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all text-center"
                href="#"
              >
                View Roadmap
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Decorative background blobs --> */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>
      {/* card  */}
      <section className="bg-slate-50 py-12 px-10 flex justify-center items-center  ">
        <div className=" grid grid-cols-3 gap-6  w-full  ">
          {data.map((er) => (
            <Appcomponent
              id={er.id}
              icon={er.icon}
              courses={er.courses}
              description={er.description}
              title={er.title}
            />
          ))}
        </div>
      </section>
      {/* feature courses  */}
      <section className="bg-white py-12 px-10">
        <div className="max-w-7xl mx-auto ">
         <div className="flex justify-between items-end">
           <div>
            <h2 className="font-bold capitalize text-2xl leading-7">
              feature courses{" "}
            </h2>
            <p className="text-gray-500 text-sm">
              Explore our most popular and rated learning path
            </p>
          </div>
          
          <Link to="/" className="hidden md:block capitalize  text-[#ec5b13] font-semibold text-sm hover:underline">view all courses</Link>
         </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {featuredCourses.map((course: Course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* testimonial  */}

      <section className="bg-black py-12 px-10">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center  mb-16">
            <h2 className="text-white font-bold  text-2xl">
              Trusted by Learners Globally
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Hear from our student who transformed their careers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item: Testimonial) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default Landing;
