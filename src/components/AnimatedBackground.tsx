"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#FFEDD1]/10 blur-[120px] animate-float-slow" />
      <div className="absolute -top-[10%] -right-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#7B87D9]/15 blur-[100px] animate-float-medium" />
      <div
        className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#1A2478]/20 blur-[100px] animate-float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-[10%] -right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-[#FFEDD1]/10 blur-[90px] animate-float-medium"
        style={{ animationDelay: "-2s" }}
      />
    </div>
  );
}
