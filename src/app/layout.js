import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ApolloWrapper } from "@/context/apollo-wrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextAuthProvider from "@/context/NextAuthProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata = {
    title: {
        default: "DailyLearn",
        template: "%s - DailyLearn"
    },
    description:
        "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!",
    twitter: {
        card: "summary_large_image"
    },
    siteName: "DailyLearn",
    openGraph: {
        images: [
            { url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png` }
        ],
        title: "DailyLearn",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        description:
            "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!",
        siteName: "DailyLearn",
        locale: "en_US",
        type: "website",
        publishedTime: new Date()
    },
    verification: { google: "F7Fw7pPWJ1O_nyt6i4SobSc-iDScH99Hz0nhW2aRceY" }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "DailyLearn",
    alternateName: ["DailyLearn", "Daily learn", "Dibrugarh university"],
    url: process.env.NEXT_PUBLIC_BASE_URL
};

export default function RootLayout({ children }) {
    return (
        <ApolloWrapper>
            <ThemeContextProvider>
                <html lang='en' className=''>
                    <body>
                        <ToastContainer />
                        <NextAuthProvider>
                            <Navbar />
                            <main className=''>
                                {/* Move the script tag here */}
                                <section>
                                    {/* Add JSON-LD to your page */}
                                    <script
                                        type='application/ld+json'
                                        dangerouslySetInnerHTML={{
                                            __html: JSON.stringify(jsonLd)
                                        }}
                                    />
                                    {/* ... */}
                                </section>
                                {children}
                                <Footer />
                            </main>

                            <Analytics />
                            <SpeedInsights />
                        </NextAuthProvider>
                    </body>
                </html>
            </ThemeContextProvider>
        </ApolloWrapper>
    );
}
