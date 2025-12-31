import React from 'react';

interface BonusesSectionContent {
    title: string;
    items: {
        title: string;
        description: string;
    }[];
    closing: string;
}

interface BonusesSectionProps {
    content: BonusesSectionContent;
}

const BonusesSection: React.FC<BonusesSectionProps> = ({ content }) => {
    return (
        <section className="py-24 bg-navy-50 text-navy-900 border-t border-navy-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 leading-tight">
                        {content.title}
                    </h2>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {content.items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-start transition-transform hover:scale-[1.01]">
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center border border-gold-200">
                                    <span className="text-gold-600 font-bold text-lg">{index + 1}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl text-navy-800 italic font-medium bg-white inline-block px-8 py-4 rounded-full shadow-sm border border-gold-100">
                        "{content.closing}"
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BonusesSection;
