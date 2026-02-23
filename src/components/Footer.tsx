import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 14H17V17H14V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 17H20V20H17V17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="font-semibold text-slate-900 tracking-tight">Trilolink</span>
                </div>

                <div className="flex gap-6 text-sm text-slate-500">
                    <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-sm text-slate-500 text-center flex-wrap">
                    <span>&copy; {new Date().getFullYear()} Trilolink Inc.</span>
                    <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-slate-400" /> Crafted by <a href="https://codcentric.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 font-medium transition-colors">codcentric</a>
                    </span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
