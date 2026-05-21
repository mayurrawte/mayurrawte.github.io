import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Photo {
  id: number;
  alt: string;
}

const photos: Photo[] = [
  { id: 14237553, alt: 'Great Buddha Statue in Bodh Gaya' },
  { id: 11230739, alt: 'Red Royal Enfield Motorcycle' },
  { id: 10979606, alt: 'Indian Ocean Sunset' },
  { id: 9456594,  alt: 'Buddha — Peace & Calm' },
  { id: 9305430,  alt: 'Moon in Night Sky' },
];

const pexelsUrl = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

const CreativeWork: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="photos" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Photography</h2>
            <div className="text-right hidden sm:block">
              <p className="text-stone-900 font-sans font-medium text-sm">13.2M views</p>
              <p className="text-stone-400 font-sans text-xs">102 photos · Rank #6.2K</p>
            </div>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {photos.map((photo, i) => (
              <motion.a
                key={photo.id}
                href={`https://www.pexels.com/photo/${photo.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group aspect-square overflow-hidden rounded-sm bg-stone-100"
              >
                <img
                  src={pexelsUrl(photo.id)}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.a>
            ))}

            {/* Stat tile */}
            <div className="aspect-square bg-stone-100 rounded-sm flex flex-col items-center justify-center text-center p-4 sm:hidden">
              <p className="text-stone-900 font-sans font-semibold text-lg">13.2M</p>
              <p className="text-stone-400 font-sans text-xs mt-1">views on Pexels</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://www.pexels.com/@mayur-rawte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 font-sans text-sm font-medium underline underline-offset-4 decoration-amber-700 hover:text-amber-700 transition-colors duration-200"
            >
              View portfolio on Pexels →
            </a>
            <a
              href="https://instagram.com/rawhgir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 font-sans text-sm hover:text-stone-700 transition-colors duration-200"
            >
              @rawhgir on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeWork;
