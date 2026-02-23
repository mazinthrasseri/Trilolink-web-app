'use client';

import { motion } from 'framer-motion';
import { Building2, QrCode, Gift, BarChart3 } from 'lucide-react';

const steps = [
    {
        icon: Building2,
        title: 'Register Company',
        description: 'Sign up and create your business profile on Trilolink in minutes.',
    },
    {
        icon: QrCode,
        title: 'Generate QR Codes',
        description: 'Create unique or batch QR codes tied to specific products or subscriptions.',
    },
    {
        icon: Gift,
        title: 'Scan & Earn Rewards',
        description: 'Customers scan the code to instantly earn rewards in their digital wallet.',
    },
    {
        icon: BarChart3,
        title: 'Track Analytics',
        description: 'Monitor scans, customer engagement, and ROI through real-time reports.',
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-zinc-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Workflow</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Trilolink Works</h3>
                    <p className="text-lg text-slate-600">
                        A simple, intuitive process to start engaging and rewarding your customers today.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector line for desktop */}
                    <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center px-4"
                            >
                                <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-brand-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <step.icon className="w-10 h-10 text-brand-600 relative z-10" strokeWidth={1.5} />

                                    {/* Step number badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-zinc-50 z-20">
                                        {index + 1}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
