export default function SkillBar({ skill, level, aosDelay = 0 }) {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white">{skill}</span>
        <span className="text-xs font-mono text-neon">{level}%</span>
      </div>
      <div className="h-2 bg-bg-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon to-green-300 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] rounded-full" />
        </div>
      </div>
    </div>
  );
}
