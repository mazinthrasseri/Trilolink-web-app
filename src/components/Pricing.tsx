'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Bronze Plan',
        price: '₹2,499',
        period: '/mo',
        description: 'Perfect for small businesses starting with QR rewards.',
        quota: 'Up to 5,000 scans/mo',
        features: [
            'Basic Digital Wallet',
            'Standard Email Support',
            '1 Active Reward Campaign'
        ],
        highlighted: false,
        ctaText: 'Start Free Trial',
        href: '/signup?plan=bronze'
    },
    {
        name: 'Silver Plan',
        price: '₹6,499',
        period: '/mo',
        description: 'Ideal for growing brands with higher engagement needs.',
        quota: 'Up to 50,000 scans/mo',
        features: [
            'Advanced Custom Wallet',
            'Priority Support',
            '5 Active Reward Campaigns',
            'Advanced Analytics'
        ],
        highlighted: true,
        ctaText: 'Get Started',
        href: '/signup?plan=silver'
    },
    {
        name: 'Gold Plan',
        price: '₹14,999',
        period: '/mo',
        description: 'For enterprises requiring unlimited scale and features.',
        quota: 'Unlimited scans',
        features: [
            'White-label Digital Wallet',
            '24/7 Dedicated Support',
            'Unlimited Campaigns',
            'Custom Integrations'
        ],
        highlighted: false,
        ctaText: 'Contact Sales',
        href: '/contact'
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Scale your rewards as you grow</h3>
                    <p className="text-lg text-slate-600">
                        Transparent plans based on your scan volume. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 bg-white ${plan.highlighted
                                ? 'ring-2 ring-brand-500 shadow-2xl shadow-brand-500/20 md:-translate-y-4 md:scale-105 z-10'
                                : 'ring-1 ring-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform z-0'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-6 pb-6 border-b border-slate-100">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 font-medium">{plan.period}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="bg-brand-50 rounded-xl p-4 mb-6 border border-brand-100">
                                    <div className="text-sm font-semibold text-brand-900 mb-1">Scan Quota</div>
                                    <div className="text-brand-700 font-medium">{plan.quota}</div>
                                </div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                            <span className="text-slate-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={plan.href}
                                className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all ${plan.highlighted
                                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg'
                                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 ring-1 ring-inset ring-slate-200'
                                    }`}
                            >
                                {plan.ctaText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
