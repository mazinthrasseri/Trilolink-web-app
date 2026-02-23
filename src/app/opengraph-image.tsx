import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Trilolink - Smart QR Reward Platform for Businesses';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to right, #4f46e5, #312e81)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    padding: '80px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '16px', marginRight: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                        <div style={{ width: '48px', height: '48px', background: '#4f46e5', borderRadius: '12px' }} />
                    </div>
                    <div style={{ fontSize: '80px', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                        Trilolink
                    </div>
                </div>

                <div style={{ fontSize: '64px', fontWeight: 700, textAlign: 'center', maxWidth: '900px', lineHeight: 1.2, margin: 0, marginBottom: '24px' }}>
                    Smart QR Reward Platform for Businesses
                </div>
                <div style={{ fontSize: '36px', color: '#cbd5e1', textAlign: 'center', maxWidth: '800px', margin: 0 }}>
                    Generate product QR codes, manage scan-based subscriptions, and reward your customers seamlessly.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
