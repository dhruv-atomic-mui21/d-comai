export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="110" r="4" fill="#8B1C26" opacity="0.8"/>
      <circle cx="45" cy="100" r="3.5" fill="#8B1C26" opacity="0.8"/>
      <circle cx="42" cy="90" r="3" fill="#8B1C26" opacity="0.8"/>
      <circle cx="42" cy="80" r="2.5" fill="#8B1C26" opacity="0.8"/>
      <circle cx="45" cy="70" r="2" fill="#8B1C26" opacity="0.8"/>
      <circle cx="50" cy="60" r="1.5" fill="#8B1C26" opacity="0.8"/>

      <circle cx="150" cy="110" r="4" fill="#8B1C26" opacity="0.8"/>
      <circle cx="155" cy="100" r="3.5" fill="#8B1C26" opacity="0.8"/>
      <circle cx="158" cy="90" r="3" fill="#8B1C26" opacity="0.8"/>
      <circle cx="158" cy="80" r="2.5" fill="#8B1C26" opacity="0.8"/>
      <circle cx="155" cy="70" r="2" fill="#8B1C26" opacity="0.8"/>
      <circle cx="150" cy="60" r="1.5" fill="#8B1C26" opacity="0.8"/>

      <path fill="#C41E2F" d="M75 120 L65 100 L85 60 L100 85 Z" />
      <path fill="#E58E8E" d="M125 120 L135 100 L115 60 L100 85 Z" />
      <path fill="#5E0D14" d="M75 125 L125 125 L100 145 Z" />
    </svg>
  );
}