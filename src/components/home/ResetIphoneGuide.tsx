export default function ResetIphoneGuide() {
  return (
    <div className="max-w-lg   rounded-lg ">
      <h2 className="text-[1rem font-bold mb-4">How to Reset Your iPhone</h2>
      <p>
        To reset your iPhone, go to{" "}
        <span className="font-semibold">Settings &gt; General &gt; Transfer or Reset &gt; Erase All Content and Settings</span>. 
        You might need to enter your passcode or Apple ID password.
      </p>

      <h3 className="text-[1rem]  font-semibold mt-4">Steps to reset your iPhone</h3>
      <ol className="list-decimal list-inside space-y-2 mt-2">
        <li>Go to Settings</li>
        <li>Select General</li>
        <li>Select Transfer or Reset</li>
        <li>Enter your passcode or Apple ID password if prompted</li>
        <li>Select Erase All Content and Settings</li>
        <li>Select Continue</li>
        <li>Wait for your device to erase</li>
      </ol>

      <h3 className="text-[1rem]  font-semibold mt-6">Force restart your iPhone</h3>
      <p className="mt-2">
        If your iPhone isn't responding, you can try force restarting it:
      </p>
      <ol className="list-decimal list-inside space-y-2 mt-2">
        <li>Press and quickly release the volume up button</li>
        <li>Press and quickly release the volume down button</li>
        <li>Press and hold the side button</li>
        <li>Release the side button when the Apple logo appears</li>
      </ol>

      <h3 className="text-[1rem]  font-semibold mt-6">When to reset your iPhone</h3>
      <p className="mt-2">
        You might want to reset your iPhone if it's experiencing issues like 
        crashing apps, not connecting to Wi-Fi, or other software errors.
      </p>
    </div>
  );
}
