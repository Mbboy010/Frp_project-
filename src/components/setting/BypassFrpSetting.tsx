import { IoMdSettings } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";

export default function BypassFrpSetting() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Bypass Frp Setting</h1>
      
      <div className="w-full max-w-md space-y-4">
      <a className="p-3" href="intent://com.android.settings/#Intent;scheme=android-app;end">
      
        <div className="flex items-center hover:bg-gray-700 p-4 bg-gray-800 shadow rounded-lg">
          <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
            <IoMdSettings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-600">1. Click Open App Setting</h2>
            <p className="text-gray-500">Open Setting</p>
          </div>
        </div>
          </a>

        <a className="p-3" href="intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end">
        
        
        <div className="flex items-center hover:bg-gray-700 p-4 bg-gray-800 shadow rounded-lg">
          <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
            <FaUnlockAlt className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-orange-600">2. Set Screen Lock</h2>
            <p className="text-gray-500">Open set screen Lock</p>
          </div>
        </div>
        
         </a>

        <a className="p-3" href="tel:+234">
        
        
        
        <div className="flex items-center hover:bg-gray-700 p-4 bg-gray-800 shadow rounded-lg">
          <div className="bg-green-500 text-white p-3 rounded-full mr-4">
            <MdCall className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-600">3. Click to open Phone app</h2>
            <p className="text-gray-500">Open Phone call</p>
          </div>
        </div>
              </a>

      </div>
    </div>
  );
}
