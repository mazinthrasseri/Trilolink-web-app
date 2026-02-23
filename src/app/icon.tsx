import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#4f46e5" />
                <rect x="6" y="6" width="8" height="8" rx="2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="18" y="6" width="8" height="8" rx="2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="6" y="18" width="8" height="8" rx="2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 18H22V22H18V18Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 22H26V26H22V22Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        { ...size }
    );
}
