'use client'

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegistrationSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-green-100 dark:bg-green-900/30"
            >
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </motion.div>
           
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Registration Successful!
            </motion.h1>
           
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 mb-8"
            >
              Congratulations! You have taken the first step toward joining the Jannah of innovation and faith unity. Our team will review your partnership request and contact you soon.
            </motion.p>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="glass-card p-8 mb-12 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl font-bold mb-4">What happens next?</h2>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-summit-gold-100 text-summit-gold-700 dark:bg-summit-gold-900/30 dark:text-summit-gold-400 mr-3 mt-0.5">1</span>
                    <span>Our partnership team will review your application within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-summit-gold-100 text-summit-gold-700 dark:bg-summit-gold-900/30 dark:text-summit-gold-400 mr-3 mt-0.5">2</span>
                    <span>You'll receive a welcome email with access to our partner portal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-summit-gold-100 text-summit-gold-700 dark:bg-summit-gold-900/30 dark:text-summit-gold-400 mr-3 mt-0.5">3</span>
                    <span>Our coordinator will schedule a personal call to discuss partnership details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-summit-gold-100 text-summit-gold-700 dark:bg-summit-gold-900/30 dark:text-summit-gold-400 mr-3 mt-0.5">4</span>
                    <span>Begin your journey as a valued partner of the Global Futuristic Summit 2025</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/">
                <Button variant="default" size="lg" className="gap-2">
                  <Home className="h-4 w-4" />
                  Return to Home
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg" className="gap-2">
                  Explore Events
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};

export default RegistrationSuccess;
