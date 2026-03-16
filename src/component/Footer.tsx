import { Link } from "react-router-dom"
import { footerLinks } from "../constants/data"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 px-10">
      <div className="max-w-7xl mx-auto ">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

          {/* Logo + Description */}
          <div className="col-span-2 lg:col-span-2">

            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#ec5b13] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                LearnFlow
              </span>
            </div>

            <p className="text-slate-500 text-sm max-w-xs mb-6">
              Empowering lifelong learners with world-class education accessible from anywhere in the world.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">

              <a href="#" className="text-slate-400 hover:text-[#ec5b13]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
              </a>

              <a href="#" className="text-slate-400 hover:text-[#ec5b13]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373..." />
                </svg>
              </a>

            </div>

          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase mb-4">
              Platform
            </h4>

            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-[#ec5b13]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase mb-4">
              Company
            </h4>

            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-[#ec5b13]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase mb-4">
              Legal
            </h4>

            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-[#ec5b13]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-slate-400">
            © 2024 LearnFlow Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              System Status:
            </span>

            <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Operational
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer