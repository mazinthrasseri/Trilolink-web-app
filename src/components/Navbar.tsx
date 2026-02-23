import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 14H17V17H14V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 17H20V20H17V17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <Link href="/" className="font-bold text-xl tracking-tight text-slate-900">
                        Trilolink
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it Works</Link>
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
                    <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/coming-soon" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Login
                    </Link>
                    <Link href="/coming-soon" className="px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-all shadow-sm shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-95">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
