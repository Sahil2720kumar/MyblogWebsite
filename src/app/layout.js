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
    openGraph: {
        images: [
            { url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png` }
        ],
        title: "DailyLearn",
        url:process.env.NEXT_PUBLIC_BASE_URL,
        description:"Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!",
        siteName: "DailyLearn",
        locale: "en_US",
        type: "website",
        publishedTime: new Date()
    },
    verification: { google: "F7Fw7pPWJ1O_nyt6i4SobSc-iDScH99Hz0nhW2aRceY" }
};

// const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "My Students Helpline",
//     alternateName: ["Students Helpline", "Education Blog", "MSH"],
//     url: "https://mystudentshelpline.com/"
// };

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
