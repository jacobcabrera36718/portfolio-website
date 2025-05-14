'use client'; // ✅ This makes it a Client Component

import dynamic from 'next/dynamic';

// Dynamically import ShaderBackground with SSR disabled
const ShaderBackground = dynamic(() => import('./ShaderBackground'), {
  ssr: false,
});

export default function ClientShaderWrapper() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <ShaderBackground />
    </div>
  );
}
