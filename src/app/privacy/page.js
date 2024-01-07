export const metadata = {
    title:"Privacy",
    description: "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!",
};


export default function Privacy(){
  return (
   <div className="min-h-screen p-3 bg-gray-50 dark:bg-gray-800 dark:text-white w-screen flex items-center flex-col">
      <h2 className="text-indigo-500 text-4xl font-bold mb-4">Privacy Policy</h2>
      <p className="text-gray-700 dark:text-stone-100  mb-8">
        Your privacy is important to us at DailyLearn. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.
      </p>
      <h3 className="text-indigo-500 text-2xl font-bold mb-4">Information We Collect</h3>
      <p className="text-gray-700 mb-8 dark:text-stone-100 ">
        We may collect various types of information, including but not limited to your name, email address, and usage data. Rest assured, we treat this information with the utmost confidentiality.
      </p>
      <h3 className="text-indigo-500 text-2xl font-bold mb-4">How We Use Your Information</h3>
      <p className="text-gray-700 dark:text-stone-100 mb-8">
        The information we collect is used to enhance your experience on DailyLearn, personalize content, and improve our services. We do not share your personal information with third parties without your consent.
      </p>
      <h3 className="text-indigo-500 text-2xl font-bold mb-4">Cookies</h3>
      <p className="text-gray-700 dark:text-stone-100 mb-8">
        DailyLearn uses cookies to analyze website traffic and provide a personalized experience. You can choose to disable cookies through your browser settings, but this may affect certain features of our site.
      </p>
      <h3 className="text-indigo-500 text-2xl font-bold mb-4">Security</h3>
      <p className="text-gray-700 dark:text-stone-100 mb-8">
        We take all necessary measures to secure your personal information. DailyLearn employs industry-standard security protocols to protect data against unauthorized access or disclosure.
      </p>
      <h3 className="text-indigo-500 text-2xl font-bold mb-4">Changes to This Privacy Policy</h3>
      <p className="text-gray-700 dark:text-stone-100 ">
        DailyLearn reserves the right to update this Privacy Policy. We encourage you to review this page periodically for any changes.
      </p>
    </div>
  )
}