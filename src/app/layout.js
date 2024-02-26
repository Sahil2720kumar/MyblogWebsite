import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ApolloWrapper } from "@/context/apollo-wrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextAuthProvider from "@/context/NextAuthProvider";
import { Analytics } from "@vercel/analytics/react"

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
        ]
    }
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
                                <main className="">
                                {children}
                                <Footer />
                                </main>
                                <Analytics/>
                        </NextAuthProvider>
                    </body>
                </html>
            </ThemeContextProvider>
        </ApolloWrapper>
    );
}
