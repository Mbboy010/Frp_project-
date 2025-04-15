import React from "react";

const FactoryResetGuide = () => {
  return (
    <div className="text-gray-400">
      <h1 className="text-[1rem] text-blue-400  font-bold  mb-4">How to Factory Reset Your Phone</h1>
      <p className=" mb-4">
        A factory reset can help resolve software issues, improve performance, or prepare your phone for resale. Below are the steps to safely reset your phone.
      </p>
      
      <h2 className="text-[1rem] text-blue-400 font-semibold  mb-2">Why Perform a Factory Reset?</h2>
      <ul className="list-disc pl-6  mb-4">
        <li>Fix software glitches</li>
        <li>Remove malware or viruses</li>
        <li>Improve device performance</li>
        <li>Prepare for resale or gifting</li>
      </ul>
      
      <h2 className="text-[1rem]  font-semibold text-blue-400  mb-2">Steps to Factory Reset Your Phone</h2>
      <ol className="list-decimal pl-6  mb-4">
        <li>Backup your important data.</li>
        <li>Ensure your phone has sufficient battery.</li>
        <li>Go to <strong>Settings</strong> &gt; <strong>System</strong> &gt; <strong>Reset</strong>.</li>
        <li>Select <strong>Factory Data Reset</strong> and confirm.</li>
        <li>Wait for the process to complete and restart your phone.</li>
      </ol>
      
      <h2 className="text-[1rem]  font-semibold text-red-400  mb-2">Things to Consider</h2>
      <p className=" mb-4">
        Remember that a factory reset will erase all your data. Ensure you've backed up everything necessary before proceeding.
      </p>
    </div>
  );
};

export default FactoryResetGuide;
