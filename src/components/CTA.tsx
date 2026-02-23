import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden bg-brand-900">
            {/* Abstract Background Accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-brand-600/30 to-transparent blur-[100px]" />
                <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-brand-800/50 to-transparent blur-[80px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to transform your customer engagement?
                </h2>
                <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl mx-auto font-light">
                    Start rewarding your customers smarter with QR-powered engagement. Join hundreds of businesses growing their subscriber base.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/coming-soon" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-900 font-bold hover:bg-brand-50 transition-all shadow-xl shadow-black/20 hover:shadow-black/30 active:scale-95 text-lg w-full sm:w-auto justify-center group">
                        Get Started Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/coming-soon" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white/20 hover:bg-white/10 transition-all active:scale-95 text-lg w-full sm:w-auto">
                        Book a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
