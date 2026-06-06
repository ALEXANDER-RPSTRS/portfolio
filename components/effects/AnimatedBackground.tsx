'use client';

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020202]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(10,80,180,0.12),transparent_50%)]" />

      <div className="orb orb-1 absolute -left-[15%] top-[8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_70%)] blur-[80px]" />
      <div className="orb orb-2 absolute -right-[10%] top-[35%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_70%)] blur-[90px]" />
      <div className="orb orb-3 absolute bottom-[5%] left-[25%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] blur-[70px]" />
      <div className="orb orb-4 absolute bottom-[20%] right-[20%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-[60px]" />

      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020202_75%)]" />
    </div>
  );
}
