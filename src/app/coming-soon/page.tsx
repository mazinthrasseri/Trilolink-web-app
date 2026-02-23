import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4 animate-pulse">
                        <Clock className="w-8 h-8" />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Coming Soon!
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 font-medium">
                        We are currently building this feature. Check back soon for updates to Trilolink.
                    </p>
                </div>

                <div className="pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100/80 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
