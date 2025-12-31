import React from 'react';

interface TestimonialItem {
    quote: string;
    author: string;
}

interface RealTestimonialsContent {
    title: string;
    subtitle?: string;
    items: TestimonialItem[];
    closing: string;
}

interface RealTestimonialsProps {
    content: RealTestimonialsContent;
}

const RealTestimonials: React.FC<RealTestimonialsProps> = ({ content }) => {
    return (
        <section className="py-24 bg-navy-50 text-navy-900 border-t border-navy-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 leading-tight">
                        {content.title}
                    </h2>
                    {content.subtitle && (
                        <p className="text-lg text-slate-600 font-medium italic">
                            {content.subtitle}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.items.map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex-grow">
                                <p className="text-lg text-slate-700 leading-relaxed italic mb-8 relative">
                                    <span className="text-4xl text-gold-300 absolute -top-4 -left-2 font-serif">“</span>
                                    {item.quote}
                                </p>
                            </div>
                            <div className="mt-4 pt-6 border-t border-slate-50">
                                <p className="font-bold text-navy-900">{item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl font-serif font-bold text-navy-900 opacity-80 max-w-2xl mx-auto leading-tight">
                        {content.closing}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default RealTestimonials;
