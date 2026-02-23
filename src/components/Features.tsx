'use client';

import { motion } from 'framer-motion';
import { Layers, QrCodeIcon, Wallet, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Layers,
        title: 'Subscription Plan Management',
        description: 'Easily set up, manage, and scale product subscriptions. Control quotas and renewal terms from an intuitive dashboard.',
    },
    {
        icon: QrCodeIcon,
        title: 'QR Batch Generation',
        description: 'Generate thousands of secure, trackable QR codes in seconds. Export them for printing or digital distribution.',
    },
    {
        icon: Wallet,
        title: 'Customer Wallet & Rewards',
        description: 'Give customers a seamless digital wallet experience. Let them track points, unlock tiers, and redeem rewards instantly.',
    },
    {
        icon: ShieldCheck,
        title: 'Reports & Fraud Monitoring',
        description: 'Access real-time analytics to track engagement. Built-in fraud detection prevents abuse of your reward systems.',
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Platform Features</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Everything you need to run QR subscriptions</h3>
                    <p className="text-lg text-slate-600">
                        A comprehensive suite of tools designed to help businesses build loyalty and streamline product engagements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-white border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-100 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none -mr-20 -mt-20" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
