
export const metadata = {
    title:"About",
    description: "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!",
};

export default function About(){
  return(
    <div className="p-3 min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white w-screen flex items-center  flex-col">
      <h2 className="text-indigo-500 text-4xl font-bold mb-4">Welcome to DailyLearn</h2>
      <p className="text-gray-700 dark:text-stone-100 mb-8">
        At DailyLearn, we believe in the transformative power of continuous learning. Our platform is crafted with love using React for seamless interactivity and Tailwind CSS for a visually stunning user interface.
      </p>
      <p className="text-gray-700 dark:text-stone-100  mb-8">
        Whether you're a seasoned professional or just starting your learning journey, DailyLearn provides a curated space where knowledge meets simplicity. Explore a wide array of articles, tutorials, and resources designed to enrich your mind and fuel your passion for learning.
      </p>
      <p className="text-gray-700 dark:text-stone-100 ">
        Join us on this educational adventure, where every click brings you closer to a world of information. DailyLearn - where learning is a daily delight!
      </p>
    </div>
  )
}