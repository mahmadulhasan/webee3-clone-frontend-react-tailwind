import React from "react";

const Footer = () => {
  return (
    <footer class="relative bg-transparent  lg:p-20 md:p-10 p-5 ">
      <img
        src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e13e27f1ed1ee7a3630831_vector-8.avif"
        alt=""
        className="absolute left-0 -z-10 h-full"
      />
      <div className="rounded-2xl border border-white/10 text-gray-300 py-16 px-6 md:px-12 lg:px-20 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div>
            <h3 class="text-lg font-semibold mb-4">Pages</h3>
            <ul class="space-y-2">
              <li class="hover:text-amber-400 cursor-pointer">Home</li>
              <li class="hover:text-amber-400 cursor-pointer">Home 2</li>
              <li class="hover:text-amber-400 cursor-pointer">Case Study</li>
              <li class="hover:text-amber-400 cursor-pointer">Feature</li>
              <li class="hover:text-amber-400 cursor-pointer">Integrations</li>
              <li class="hover:text-amber-400 cursor-pointer">About</li>
              <li class="hover:text-amber-400 cursor-pointer">Pricing</li>
              <li class="hover:text-amber-400 cursor-pointer">Blog</li>
              <li class="hover:text-amber-400 cursor-pointer">Contact</li>
              <li class="hover:text-amber-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Utility</h3>
            <ul class="space-y-2">
              <li class="hover:text-amber-400 cursor-pointer">Style Guide</li>
              <li class="hover:text-amber-400 cursor-pointer">Instructions</li>
              <li class="hover:text-amber-400 cursor-pointer">Licenses</li>
              <li class="hover:text-amber-400 cursor-pointer">
                Password Protected
              </li>
              <li class="hover:text-amber-400 cursor-pointer">Changelog</li>
              <li class="hover:text-amber-400 cursor-pointer">Link in Bio</li>
              <li class="hover:text-amber-400 cursor-pointer">Error 404</li>
              <li class="hover:text-amber-400 cursor-pointer">Coming Soon</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                  className="text-amber-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                +1 (555) 123-4567
              </li>

              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l8 8 8-8" />
                </svg>
                hello@example.com
              </li>

              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
                Chicago HQ Estica Cop.
                <br />
                Macomb, MI 48042
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
            <div class="flex items-center gap-4 text-gradient">
              <button class="p-3 rounded-full bg-[#1A1A1A] hover:bg-amber-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                  className="text-gradient"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </button>

              <button class="p-3 rounded-full bg-[#1A1A1A] hover:bg-amber-400 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 7a3 3 0 00-2-2c-1.8-.5-9-.5-9-.5s-7.2 0-9 .5A3 3 0 001 7a31 31 0 000 10 3 3 0 002 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a3 3 0 002-2 31 31 0 000-10zM10 15V9l5 3-5 3z" />
                </svg>
              </button>

              <button class="p-3 rounded-full bg-[#1A1A1A] hover:bg-amber-400 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3H2l7.2 9.17L2.4 21h2.58l5.52-7.35L16.02 21h2.58l-7-8.83L18.6 3h-2.52l-5.1 6.66z" />
                </svg>
              </button>

              <button class="p-3 rounded-full bg-[#1A1A1A] hover:bg-amber-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <span>
            Designed by <span className="text-gradient">XYZ</span> , Powered by{" "}
            <span className="text-gradient">XYZ</span>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
