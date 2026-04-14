import { motion } from 'motion/react';
import { MapPin, Star, ArrowRight, Lightbulb, Utensils, Hotel, TreePine } from 'lucide-react';
import { Monument } from '../types';

interface MonumentDetailsProps {
  monument: Monument;
  confidence: number;
}

export default function MonumentDetails({ monument, confidence }: MonumentDetailsProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GEMINI_API_KEY}&q=${encodeURIComponent(monument.name + ', ' + monument.location)}`;
  // Note: In a real app, we'd use a dedicated Maps API key, but for this demo we'll use a placeholder or a simple search link if embed fails without key
  // Actually, I'll use a simple iframe with a search query which is more reliable for demo
  const simpleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(monument.name + ' ' + monument.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8"
    >
      {/* Main Content: Details & History */}
      <div className="bg-white border border-stone-border rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden">
        <div className="mb-8 border-b border-stone-border pb-6">
          <span className="text-sm text-heritage-gold font-semibold uppercase tracking-widest block mb-2">
            {monument.location}
          </span>
          <h2 className="text-5xl font-serif text-heritage-ink mb-4">{monument.name}</h2>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-heritage-gold/20 text-heritage-gold text-xs font-bold rounded-lg">
              {confidence}% AI Match
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
          <div className="text-base leading-relaxed text-[#444] space-y-6 font-sans">
            <h3 className="section-title">Historical Narrative</h3>
            {monument.description.map((para, idx) => (
              <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-heritage-terracotta">
                {para}
              </p>
            ))}

            {monument.nearbyMonuments && monument.nearbyMonuments.length > 0 && (
              <div className="mt-12">
                <h3 className="section-title">Nearby Heritage Sites</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {monument.nearbyMonuments.map((nearby, idx) => (
                    <div key={idx} className="p-4 bg-heritage-ivory border border-stone-border rounded-xl flex justify-between items-center">
                      <span className="font-serif text-heritage-ink">{nearby.name}</span>
                      <span className="text-xs font-bold text-heritage-sandstone">{nearby.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-2 border border-heritage-gold/30 rounded-xl -z-10 rotate-2" />
              <img 
                src={monument.image} 
                alt={monument.name} 
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-heritage-ivory p-6 rounded-xl border border-stone-border space-y-6">
              <h4 className="text-lg font-serif text-heritage-terracotta border-b border-heritage-gold/30 pb-2">Architectural Profile</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="fact-item">
                  <div className="fact-item-label">Completed</div>
                  <div className="fact-item-value">{monument.builtYear}</div>
                </div>
                <div className="fact-item">
                  <div className="fact-item-label">Architect</div>
                  <div className="fact-item-value">{monument.architect}</div>
                </div>
                <div className="fact-item">
                  <div className="fact-item-label">Significance</div>
                  <div className="fact-item-value text-sm leading-snug">{monument.significance}</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-stone-border h-[250px]">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src={simpleMapUrl}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interesting Facts Section */}
      {monument.interestingFacts && monument.interestingFacts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {monument.interestingFacts.map((fact, idx) => (
            <div key={idx} className="bg-heritage-gold/5 border border-heritage-gold/20 rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-heritage-gold rounded-full flex items-center justify-center text-heritage-ivory shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Historical Insight</h4>
                <p className="text-heritage-ink/70 italic leading-relaxed">
                  "{fact}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
