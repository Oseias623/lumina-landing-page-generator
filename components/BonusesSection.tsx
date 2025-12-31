import React from 'react';

interface BonusesSectionContent {
    title: string;
    items: {
        title: string;
        description: string;
        image: string;
    }[];
    closing: string;
}

interface BonusesSectionProps {
    content: BonusesSectionContent;
}

const BonusesSection: React.FC<BonusesSectionProps> = ({ content }) => {
    return (
        <section className="py-24 bg-navy-50 text-navy-900 border-t border-navy-100 relative overflow-hidden">
            {/* Decorative particles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Para complementar tu proceso
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 leading-tight mb-6">
                        {content.title}
                    </h2>
                    <div className="h-1 w-24 bg-gold-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.items.map((item, index) => (
                        <div key={index} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 border-b border-slate-50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-navy-900/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Bono {index + 1}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif leading-snug">
                                    {item.title.replace(/Bono \d+ — /, '')}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                    {item.description}
                                </p>
                                <div className="pt-4 border-t border-slate-50">
                                    <span className="text-xs font-bold text-gold-600 uppercase tracking-widest flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Incluido Gratis
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block bg-white p-6 rounded-2xl shadow-lg border border-gold-100 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-2xl">
                        <p className="text-lg md:text-xl text-navy-800 font-serif font-medium leading-relaxed">
                            "{content.closing}"
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BonusesSection;
