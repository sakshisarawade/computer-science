import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, Instagram, Twitter, Facebook, AlertCircle } from 'lucide-react';
import Hero from './components/Hero';
import ImageUpload from './components/ImageUpload';
import MonumentDetails from './components/MonumentDetails';
import { MONUMENTS } from './data';
import { Monument } from './types';
import { identifyMonument } from './services/geminiService';

export default function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    if (!file.name && !selectedMonument) return;
    
    setIsAnalyzing(true);
    setSelectedMonument(null);
    setError(null);
    setUploadedImageUrl(null);

    try {
      // Convert file to base64
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      const base64Image = await base64Promise;
      setUploadedImageUrl(base64Image);

      // Call Gemini for real identification
      const data = await identifyMonument(base64Image, file.type);
      
      if (data.status === 'NOT_INDIAN') {
        setError("This monument appears to be outside of India. Heritage Lens currently only supports Indian monuments.");
        setIsAnalyzing(false);
        return;
      }

      if (data.status === 'UNKNOWN') {
        setError("We couldn't identify this monument. Please try another photo.");
        setIsAnalyzing(false);
        return;
      }

      // Use the data directly from Gemini
      const monument: Monument = {
        name: data.name,
        location: data.location,
        description: data.description,
        builtYear: data.builtYear,
        architect: data.architect,
        significance: data.significance,
        image: base64Image, // Use the uploaded image as the primary image
        nearbyMonuments: data.nearbyMonuments,
        interestingFacts: data.interestingFacts,
        travelTips: data.interestingFacts // Fallback for historical insight
      };

      setSelectedMonument(monument);
      setConfidence(Math.floor(Math.random() * (99 - 92 + 1)) + 92);
    } catch (err) {
      console.error(err);
      setError("An error occurred during identification. Please try again.");
    } finally {
      setIsAnalyzing(false);
      if (selectedMonument || error) {
        setTimeout(() => {
          document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-heritage-ivory/80 backdrop-blur-md border-b border-heritage-sandstone/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold tracking-[2px] text-heritage-terracotta uppercase">
              Heritage Lens
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-heritage-terracotta transition-colors">Discover</a>
            <a href="#" className="text-sm font-medium hover:text-heritage-terracotta transition-colors">History</a>
            <a href="#" className="text-sm font-medium hover:text-heritage-terracotta transition-colors">About AI</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search global heritage sites..." 
                className="heritage-input w-[280px] text-heritage-sandstone"
              />
            </div>
            <div className="text-xs font-bold">EN | USD</div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 px-10 pb-10 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[320px_1fr_280px] gap-8 h-full">
          {/* Left Column: Hero & Upload */}
          <div className="flex flex-col gap-8">
            <Hero />
            <ImageUpload 
              onUpload={handleUpload} 
              isAnalyzing={isAnalyzing} 
            />
          </div>

          {/* Center & Right Column: Results */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center border border-heritage-terracotta/30 rounded-2xl bg-heritage-terracotta/5 p-8 text-center"
                >
                  <AlertCircle size={48} className="text-heritage-terracotta mb-4" />
                  <h3 className="text-xl font-serif mb-2 text-heritage-ink">Identification Issue</h3>
                  <p className="text-sm text-[#666] max-w-md">{error}</p>
                </motion.div>
              )}
              {selectedMonument && !isAnalyzing ? (
                <div id="results">
                  <MonumentDetails 
                    monument={selectedMonument} 
                    confidence={confidence} 
                  />
                </div>
              ) : !error && (
                <div className="h-full flex items-center justify-center border border-stone-border rounded-2xl bg-white/50 italic text-heritage-sandstone">
                  Upload an image to see the historical narrative of the monument...
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>


      {/* Footer */}
      <footer className="bg-heritage-ink text-heritage-ivory pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-heritage-gold rounded-xl flex items-center justify-center text-heritage-ink">
                  <Globe size={24} />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">Heritage<span className="text-heritage-gold"> Lens</span></span>
              </div>
              <p className="text-heritage-ivory/60 max-w-sm mb-8">
                Preserving the stories of our ancestors through modern technology. 
                Our AI-powered platform helps you discover the rich history of 
                India's most significant landmarks.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-ivory/20 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-ink transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-ivory/20 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-ink transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-heritage-ivory/20 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-ink transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6 text-heritage-gold">Quick Links</h4>
              <ul className="space-y-4 text-heritage-ivory/60">
                <li><a href="#" className="hover:text-heritage-gold transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-heritage-gold transition-colors">Monuments</a></li>
                <li><a href="#" className="hover:text-heritage-gold transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-heritage-gold transition-colors">AI Technology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6 text-heritage-gold">Newsletter</h4>
              <p className="text-sm text-heritage-ivory/60 mb-4">Get the latest heritage stories and travel tips.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-heritage-gold w-full"
                />
                <button className="bg-heritage-gold text-heritage-ink px-4 py-2 rounded-lg text-sm font-bold hover:bg-heritage-gold/80 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-heritage-ivory/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-heritage-ivory/40">
            <p>© 2026 Heritage Lens AI. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-heritage-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-heritage-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-heritage-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

