import { useId } from "react";

// Each pose is shown in turn (see the avatar-pose-* keyframes in globals.css).
// With reduced motion, only the last pose stays visible.
const POSE_CLASSES = [
  "animate-[avatar-pose-1_7s_step-end_infinite] motion-reduce:animate-none motion-reduce:opacity-0",
  "animate-[avatar-pose-2_7s_step-end_infinite] motion-reduce:animate-none motion-reduce:opacity-0",
  "animate-[avatar-pose-3_7s_step-end_infinite] motion-reduce:animate-none",
];

/**
 * Full-body 3D-style avatar from the "Avatar en pied" design, cycling through
 * its three poses: a knowing wink while pointing at the viewer, a finger
 * raised with a soft smile, then a finger raised with a big smile.
 */
export function StandingAvatar({ className = "", label }: { className?: string; label: string }) {
  // Gradient and filter ids must be unique when the avatar renders more than once.
  const p = `avatar-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}-`;
  return (
    <svg viewBox="70 10 340 760" role="img" aria-label={label} className={className}>
      <defs>
        <filter id={`${p}b3`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" /></filter>
        <filter id={`${p}b8`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id={`${p}b18`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="18" /></filter>
        <filter id={`${p}shadow`} x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#3A2010" floodOpacity="0.18" /></filter>
        <radialGradient id={`${p}skin`} cx="46%" cy="40%" r="68%">
        <stop offset="0" stopColor="#D9A37C" />
        <stop offset="0.6" stopColor="#C08660" />
        <stop offset="1" stopColor="#9A6141" />
        </radialGradient>
        <radialGradient id={`${p}hand`} cx="38%" cy="35%" r="70%">
        <stop offset="0" stopColor="#D9A37C" />
        <stop offset="1" stopColor="#A86C49" />
        </radialGradient>
        <radialGradient id={`${p}ear`} cx="35%" cy="40%" r="75%">
        <stop offset="0" stopColor="#D49D76" />
        <stop offset="1" stopColor="#9A5F3E" />
        </radialGradient>
        <linearGradient id={`${p}hairBack`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#6E4A33" />
        <stop offset="1" stopColor="#312117" />
        </linearGradient>
        <linearGradient id={`${p}lock`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#312117" />
        <stop offset="0.5" stopColor="#886b58" />
        <stop offset="1" stopColor="#312117" />
        </linearGradient>
        <linearGradient id={`${p}spike`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#312117" />
        <stop offset="0.6" stopColor="#886b58" />
        <stop offset="1" stopColor="#6E4A33" />
        </linearGradient>
        <radialGradient id={`${p}hairFront`} cx="45%" cy="15%" r="90%">
        <stop offset="0" stopColor="#a58f81" />
        <stop offset="0.45" stopColor="#6E4A33" />
        <stop offset="1" stopColor="#312117" />
        </radialGradient>
        <radialGradient id={`${p}iris`} cx="45%" cy="38%" r="62%">
        <stop offset="0" stopColor="#6B5236" />
        <stop offset="0.7" stopColor="#3B2A18" />
        <stop offset="1" stopColor="#1C130A" />
        </radialGradient>
        <radialGradient id={`${p}sclera`} cx="50%" cy="35%" r="70%">
        <stop offset="0.55" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E9E1DA" />
        </radialGradient>
        <linearGradient id={`${p}brass`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E9C072" />
        <stop offset="0.5" stopColor="#B07F35" />
        <stop offset="1" stopColor="#5E3E16" />
        </linearGradient>
        <radialGradient id={`${p}brassCup`} cx="38%" cy="32%" r="75%">
        <stop offset="0" stopColor="#D9A955" />
        <stop offset="0.6" stopColor="#9A6C2C" />
        <stop offset="1" stopColor="#4E3212" />
        </radialGradient>
        <radialGradient id={`${p}lens`} cx="40%" cy="35%" r="70%">
        <stop offset="0" stopColor="#3E3A36" />
        <stop offset="1" stopColor="#0B0A09" />
        </radialGradient>
        <linearGradient id={`${p}gold`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F6D27A" />
        <stop offset="1" stopColor="#B07E22" />
        </linearGradient>
        <linearGradient id={`${p}sweater`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#1B1B1F" />
        <stop offset="0.45" stopColor="#3B3B42" />
        <stop offset="1" stopColor="#18181B" />
        </linearGradient>
        <linearGradient id={`${p}pants`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#151518" />
        <stop offset="0.5" stopColor="#2E2E34" />
        <stop offset="1" stopColor="#121214" />
        </linearGradient>
        <linearGradient id={`${p}shoe`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#DCD8D6" />
        </linearGradient>

        <g id={`${p}headBack`}>
        <path d="M330,142 L296,64 L352,128 Z" fill={`url(#${p}spike)`} />
        <path d="M356,132 L372,40 L390,130 Z" fill={`url(#${p}spike)`} />
        <path d="M392,134 L446,66 L420,146 Z" fill={`url(#${p}spike)`} />
        <path d="M318,152 L254,108 L328,164 Z" fill={`url(#${p}spike)`} />
        <path d="M412,152 L478,118 L424,170 Z" fill={`url(#${p}spike)`} />
        <ellipse cx="368" cy="146" rx="66" ry="34" fill={`url(#${p}lock)`} />
        <path d="M310,140 C340,128 396,128 428,140" fill="none" stroke="#312117" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        <path d="M318,156 C350,146 392,146 422,158" fill="none" stroke="#a58f81" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        <rect x="392" y="126" width="26" height="14" rx="5" fill={`url(#${p}gold)`} transform="rotate(-18 405 133)" />
        <path d="M160,400 C146,228 248,126 360,126 C472,126 574,228 560,400 Z" fill={`url(#${p}hairBack)`} />
        <path d="M190,300 C150,360 130,450 128,540 C126,600 120,640 112,676 L138,650 L146,690 L166,654 L182,700 L196,650 L214,684 L224,630 L246,600 C236,520 226,420 220,320 Z" fill={`url(#${p}lock)`} />
        <path d="M530,300 C570,360 590,450 592,540 C594,600 600,640 608,676 L582,650 L574,690 L554,654 L538,700 L524,650 L506,684 L496,630 L474,600 C484,520 494,420 500,320 Z" fill={`url(#${p}lock)`} />
        <path d="M200,340 C180,420 166,520 160,640" fill="none" stroke="#a58f81" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
        <path d="M222,360 C214,450 206,540 200,660" fill="none" stroke="#312117" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <path d="M520,340 C540,420 554,520 560,640" fill="none" stroke="#a58f81" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
        <path d="M498,360 C506,450 514,540 520,660" fill="none" stroke="#312117" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <ellipse cx="160" cy="468" rx="34" ry="46" fill={`url(#${p}ear)`} />
        <path d="M150,442 C136,456 138,486 152,496" fill="none" stroke="#8A4F31" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <ellipse cx="560" cy="468" rx="34" ry="46" fill={`url(#${p}ear)`} />
        <path d="M570,442 C584,456 582,486 568,496" fill="none" stroke="#8A4F31" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <path d="M360,196 C470,196 538,256 546,362 C554,470 520,556 452,590 C422,604 392,610 360,610 C328,610 298,604 268,590 C200,556 166,470 174,362 C182,256 250,196 360,196 Z" fill={`url(#${p}skin)`} />
        <ellipse cx="345" cy="300" rx="110" ry="50" fill="#FFF" opacity="0.16" filter={`url(#${p}b18)`} />
        <ellipse cx="360" cy="600" rx="110" ry="16" fill="#6B3A20" opacity="0.22" filter={`url(#${p}b8)`} />
        <ellipse cx="236" cy="530" rx="38" ry="22" fill="#EE7F86" opacity="0.4" filter={`url(#${p}b8)`} />
        <ellipse cx="484" cy="530" rx="38" ry="22" fill="#EE7F86" opacity="0.4" filter={`url(#${p}b8)`} />
        <ellipse cx="360" cy="520" rx="15" ry="10" fill="#8F5536" opacity="0.4" filter={`url(#${p}b3)`} />
        <ellipse cx="357" cy="513" rx="6" ry="4" fill="#FFF" opacity="0.4" />
        </g>

        <g id={`${p}headFront`}>
        <path d="M176,360 C156,220 252,136 360,136 C468,136 564,220 544,360 C530,300 470,250 372,236 L360,250 L348,236 C250,250 190,300 176,360 Z" fill={`url(#${p}hairFront)`} />
        <path d="M352,238 C300,250 240,290 214,350 C204,380 200,410 206,440 L218,404 L226,430 C232,380 262,320 318,282 C334,270 348,256 352,238 Z" fill={`url(#${p}hairFront)`} />
        <path d="M368,238 C420,250 480,290 506,350 C516,380 520,410 514,440 L502,404 L494,430 C488,380 458,320 402,282 C386,270 372,256 368,238 Z" fill={`url(#${p}hairFront)`} />
        <path d="M352,150 C300,165 236,215 196,320" fill="none" stroke="#a58f81" strokeWidth="8" strokeLinecap="round" opacity="0.55" />
        <path d="M340,175 C292,195 246,240 222,300" fill="none" stroke="#312117" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
        <path d="M368,150 C420,165 484,215 524,320" fill="none" stroke="#a58f81" strokeWidth="8" strokeLinecap="round" opacity="0.55" />
        <path d="M380,175 C428,195 474,240 498,300" fill="none" stroke="#312117" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
        <path d="M346,250 C300,268 250,310 224,380" fill="none" stroke="#a58f81" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        <path d="M374,250 C420,268 470,310 496,380" fill="none" stroke="#a58f81" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        <ellipse cx="300" cy="170" rx="60" ry="18" fill="#FFF" opacity="0.16" filter={`url(#${p}b8)`} />
        <g transform="translate(0,-22)">
        <ellipse cx="360" cy="342" rx="130" ry="14" fill="#5A2E18" opacity="0.35" filter={`url(#${p}b8)`} />
        <path d="M262,300 C230,302 200,310 174,326" fill="none" stroke="#2E2016" strokeWidth="24" strokeLinecap="round" />
        <path d="M458,300 C490,302 520,310 546,326" fill="none" stroke="#2E2016" strokeWidth="24" strokeLinecap="round" />
        <rect x="502" y="296" width="22" height="28" rx="4" fill="none" stroke={`url(#${p}brass)`} strokeWidth="5" transform="rotate(16 513 310)" />
        <path d="M296,254 L272,222" stroke={`url(#${p}brass)`} strokeWidth="7" strokeLinecap="round" />
        <circle cx="294" cy="252" r="5" fill="#8A6228" />
        <circle cx="262" cy="206" r="22" fill={`url(#${p}brass)`} />
        <circle cx="262" cy="206" r="16" fill="#A9BFC4" opacity="0.85" />
        <ellipse cx="256" cy="200" rx="5" ry="7" fill="#FFF" opacity="0.7" />
        <path d="M256,282 L212,266 L254,300 Z" fill={`url(#${p}brass)`} />
        <path d="M442,258 L474,218 L462,272 Z" fill={`url(#${p}brass)`} />
        <path d="M466,296 L512,300 L466,314 Z" fill={`url(#${p}brass)`} />
        <circle cx="302" cy="296" r="50" fill={`url(#${p}brassCup)`} />
        <circle cx="302" cy="296" r="41" fill="none" stroke="#E8BC66" strokeWidth="6" />
        <circle cx="302" cy="296" r="37" fill={`url(#${p}lens)`} />
        <ellipse cx="290" cy="282" rx="14" ry="9" fill="#FFF" opacity="0.28" transform="rotate(-30 290 282)" />
        <circle cx="418" cy="296" r="50" fill={`url(#${p}brassCup)`} />
        <circle cx="418" cy="296" r="41" fill="none" stroke="#E8BC66" strokeWidth="6" />
        <circle cx="418" cy="296" r="37" fill={`url(#${p}lens)`} />
        <ellipse cx="406" cy="282" rx="14" ry="9" fill="#FFF" opacity="0.28" transform="rotate(-30 406 282)" />
        <path d="M350,294 Q360,280 370,294" fill="none" stroke={`url(#${p}brass)`} strokeWidth="10" strokeLinecap="round" />
        <g fill="#F1CE7E">
        <circle cx="302" cy="249" r="3.5" /><circle cx="258" cy="318" r="3.5" /><circle cx="302" cy="343" r="3.5" /><circle cx="343" cy="318" r="3.5" />
        <circle cx="418" cy="249" r="3.5" /><circle cx="462" cy="318" r="3.5" /><circle cx="418" cy="343" r="3.5" /><circle cx="377" cy="318" r="3.5" />
        </g>
        </g>
        </g>

        <g id={`${p}lowerBody`}>
        <ellipse cx="250" cy="742" rx="120" ry="14" fill="#3A2010" opacity="0.18" filter={`url(#${p}b8)`} />
        <rect x="190" y="540" width="56" height="176" rx="22" fill={`url(#${p}pants)`} />
        <rect x="254" y="540" width="56" height="176" rx="22" fill={`url(#${p}pants)`} />
        <rect x="196" y="540" width="108" height="60" rx="16" fill="#1A1A1E" />
        <path d="M174,724 C174,704 192,698 214,698 C236,698 250,704 250,720 C250,734 238,740 212,740 C186,740 174,736 174,724 Z" fill={`url(#${p}shoe)`} />
        <path d="M250,720 C250,704 264,698 286,698 C308,698 326,704 326,724 C326,736 314,740 288,740 C262,740 250,734 250,720 Z" fill={`url(#${p}shoe)`} />
        <path d="M178,730 L248,730" stroke="#C9C3C0" strokeWidth="3" strokeLinecap="round" />
        <path d="M252,730 L322,730" stroke="#C9C3C0" strokeWidth="3" strokeLinecap="round" />
        <rect x="232" y="290" width="36" height="26" rx="10" fill="#A86C49" />
        <path d="M172,336 C172,314 204,300 250,300 C296,300 328,314 328,336 L340,540 C340,562 318,574 250,574 C182,574 160,562 160,540 Z" fill={`url(#${p}sweater)`} />
        <path d="M162,538 C190,552 310,552 338,538 L340,556 C320,572 180,572 160,556 Z" fill="#141417" />
        <path d="M190,548 L190,566 M214,552 L214,570 M238,553 L238,572 M262,553 L262,572 M286,552 L286,570 M310,548 L310,566" stroke="#2B2B30" strokeWidth="2" />
        <ellipse cx="250" cy="306" rx="46" ry="12" fill="#141417" />
        <ellipse cx="226" cy="380" rx="34" ry="60" fill="#FFF" opacity="0.05" filter={`url(#${p}b8)`} />
        </g>
      </defs>
      <g filter={`url(#${p}shadow)`}>
        <g className={POSE_CLASSES[0]}>
          <use href={`#${p}lowerBody`} />
          <path d="M318,346 Q348,440 336,512" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="336" cy="530" r="20" fill={`url(#${p}hand)`} />
          <path d="M184,346 Q140,440 198,428" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="214" cy="414" r="22" fill={`url(#${p}hand)`} />
          <rect x="212" y="364" width="15" height="44" rx="7.5" fill={`url(#${p}hand)`} transform="rotate(24 219 404)" />
          <ellipse cx="200" cy="402" rx="8" ry="11" fill="#C08660" transform="rotate(-20 200 402)" />
          <g transform="translate(70,0) scale(0.5) rotate(4 360 400)">
          <use href={`#${p}headBack`} />
          <path d="M244,368 Q286,344 328,358" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <path d="M392,370 Q434,360 476,374" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="282" cy="454" rx="40" ry="34" fill={`url(#${p}sclera)`} />
          <circle cx="290" cy="458" r="27" fill={`url(#${p}iris)`} />
          <circle cx="290" cy="458" r="13" fill="#0E0905" />
          <circle cx="279" cy="448" r="8" fill="#FFF" />
          <path d="M234,458 Q282,428 330,458 L332,398 L232,398 Z" fill="#C48A64" />
          <path d="M240,456 Q282,430 324,456" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <path d="M250,482 Q282,494 314,482" fill="none" stroke="#A86A47" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <ellipse cx="438" cy="454" rx="40" ry="34" fill={`url(#${p}sclera)`} />
          <circle cx="446" cy="458" r="27" fill={`url(#${p}iris)`} />
          <circle cx="446" cy="458" r="13" fill="#0E0905" />
          <circle cx="435" cy="448" r="8" fill="#FFF" />
          <path d="M390,458 Q438,428 486,458 L488,398 L388,398 Z" fill="#C48A64" />
          <path d="M396,456 Q438,430 480,456" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <path d="M406,482 Q438,494 470,482" fill="none" stroke="#A86A47" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <path d="M330,562 Q364,582 398,552" fill="none" stroke="#5A1A1E" strokeWidth="7" strokeLinecap="round" />
          <path d="M336,570 Q364,586 392,562" fill="none" stroke="#7A3550" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
          <use href={`#${p}headFront`} />
          </g>
        </g>
        <g className={POSE_CLASSES[1]}>
          <use href={`#${p}lowerBody`} />
          <path d="M318,346 Q348,440 336,512" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="336" cy="530" r="20" fill={`url(#${p}hand)`} />
          <g transform="translate(70,0) scale(0.5) rotate(-4 360 400)">
          <use href={`#${p}headBack`} />
          <path d="M244,370 Q286,344 328,358" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <path d="M392,358 Q434,344 476,370" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="282" cy="446" rx="40" ry="43" fill={`url(#${p}sclera)`} />
          <circle cx="276" cy="432" r="29" fill={`url(#${p}iris)`} />
          <circle cx="276" cy="432" r="14" fill="#0E0905" />
          <circle cx="265" cy="420" r="9" fill="#FFF" />
          <circle cx="288" cy="446" r="3.5" fill="#FFF" opacity="0.85" />
          <path d="M243,440 Q282,394 321,440" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <ellipse cx="438" cy="446" rx="40" ry="43" fill={`url(#${p}sclera)`} />
          <circle cx="430" cy="432" r="29" fill={`url(#${p}iris)`} />
          <circle cx="430" cy="432" r="14" fill="#0E0905" />
          <circle cx="419" cy="420" r="9" fill="#FFF" />
          <circle cx="442" cy="446" r="3.5" fill="#FFF" opacity="0.85" />
          <path d="M399,440 Q438,394 477,440" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <path d="M334,562 Q360,580 386,562" fill="none" stroke="#5A1A1E" strokeWidth="7" strokeLinecap="round" />
          <use href={`#${p}headFront`} />
          </g>
          <path d="M184,346 Q150,270 142,206" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="141" cy="186" r="22" fill={`url(#${p}hand)`} />
          <rect x="133" y="128" width="15" height="48" rx="7.5" fill={`url(#${p}hand)`} />
          <ellipse cx="158" cy="188" rx="8" ry="11" fill="#C08660" transform="rotate(30 158 188)" />
        </g>
        <g className={POSE_CLASSES[2]}>
          <use href={`#${p}lowerBody`} />
          <path d="M318,346 Q356,430 352,500" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="352" cy="518" r="20" fill={`url(#${p}hand)`} />
          <g transform="translate(70,0) scale(0.5) rotate(-7 360 400)">
          <use href={`#${p}headBack`} />
          <path d="M244,364 Q286,336 328,350" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <path d="M392,350 Q434,336 476,364" fill="none" stroke="#2B1A10" strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="282" cy="446" rx="40" ry="43" fill={`url(#${p}sclera)`} />
          <circle cx="274" cy="430" r="29" fill={`url(#${p}iris)`} />
          <circle cx="274" cy="430" r="14" fill="#0E0905" />
          <circle cx="263" cy="418" r="9" fill="#FFF" />
          <circle cx="286" cy="444" r="3.5" fill="#FFF" opacity="0.85" />
          <path d="M243,440 Q282,394 321,440" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <ellipse cx="438" cy="446" rx="40" ry="43" fill={`url(#${p}sclera)`} />
          <circle cx="428" cy="430" r="29" fill={`url(#${p}iris)`} />
          <circle cx="428" cy="430" r="14" fill="#0E0905" />
          <circle cx="417" cy="418" r="9" fill="#FFF" />
          <circle cx="440" cy="444" r="3.5" fill="#FFF" opacity="0.85" />
          <path d="M399,440 Q438,394 477,440" fill="none" stroke="#24160D" strokeWidth="7" strokeLinecap="round" />
          <path d="M316,548 Q360,562 404,548 Q398,604 360,606 Q322,604 316,548 Z" fill="#5A1A1E" />
          <ellipse cx="360" cy="592" rx="22" ry="10" fill="#E0605E" />
          <path d="M324,552 Q360,564 396,552 Q394,566 360,569 Q326,566 324,552 Z" fill="#FFFFFF" />
          <path d="M316,548 Q360,562 404,548 Q398,604 360,606 Q322,604 316,548 Z" fill="none" stroke="#7A3550" strokeWidth="4" strokeLinejoin="round" />
          <use href={`#${p}headFront`} />
          </g>
          <path d="M186,346 Q128,262 112,186" fill="none" stroke="#26262B" strokeWidth="44" strokeLinecap="round" />
          <circle cx="110" cy="166" r="22" fill={`url(#${p}hand)`} />
          <rect x="101" y="108" width="15" height="48" rx="7.5" fill={`url(#${p}hand)`} transform="rotate(-10 108 150)" />
          <ellipse cx="128" cy="168" rx="8" ry="11" fill="#C08660" transform="rotate(30 128 168)" />
        </g>
      </g>
    </svg>
  );
}
