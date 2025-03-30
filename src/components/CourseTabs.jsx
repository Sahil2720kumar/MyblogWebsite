"use client";
import React, { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const CourseTabs = ({ topicTitle, topicContent }) => {
  const [tabShow, setTabShow] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const tabClasses = "cursor-pointer transition-all duration-200 hover:text-indigo-600 text-[18px] md:text-2xl dark:text-white font-semibold text-gray-700 pb-2";
  const activeTabClasses = "border-b-2 border-indigo-600 text-indigo-600";

  return (
    <div className="container mx-auto px-4">
      <nav className="border-b border-gray-200 dark:border-gray-700" role="tablist">
        <ul className="list-none flex items-center space-x-8 overflow-x-auto scrollbar-hide">
          {[
            { id: 1, label: "Overview" },
            { id: 2, label: "Q&A" },
            { id: 3, label: "Downloads" },
            { id: 4, label: "Announcements" }
          ].map(tab => (
            <li key={tab.id}>
              <button
                onClick={() => setTabShow(tab.id)}
                className={`${tabClasses} ${tabShow === tab.id ? activeTabClasses : ""}`}
                role="tab"
                aria-selected={tabShow === tab.id}
                aria-controls={`panel-${tab.id}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="min-h-screen py-6">
        {isLoading ? (
          <div className="h-[280px] flex items-center justify-center">
            <PuffLoader color="#4f46e5" size={60} />
          </div>
        ) : (
          <>
            <div
              role="tabpanel"
              id="panel-1"
              className={`${tabShow === 1 ? "block" : "hidden"} space-y-6`}
            >
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {topicContent.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: topicContent.content.html }}
                className="prose prose-lg dark:prose-invert max-w-none"
              />
            </div>

            <div
              role="tabpanel"
              id="panel-2"
              className={`${tabShow === 2 ? "block" : "hidden"} space-y-6`}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {`${topicContent.title} Question and Answers`}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                No questions available at this time.
              </p>
            </div>

            <div
              role="tabpanel"
              id="panel-3"
              className={`${tabShow === 3 ? "block" : "hidden"} space-y-6`}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {`${topicContent.title} Downloads`}
              </h2>
              <ol className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Course Notes
                  </span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Download
                  </button>
                </li>
              </ol>
            </div>

            <div
              role="tabpanel"
              id="panel-4"
              className={`${tabShow === 4 ? "block" : "hidden"} space-y-6`}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {`${topicContent.title} Announcements`}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                No announcements at this time.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseTabs;
