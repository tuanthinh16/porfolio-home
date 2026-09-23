export default function RoadmapBackdrop({ city }: { city: string }) {
  return (
    <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      <circle cx="960" cy="110" r="55" fill="#e6d9ac" opacity=".55" />
      {city === "da-nang" ? (
        <>
          <path d="m0 225 160-100 115 67 125-97 164 130 165-111 150 92 177-90 144 109v165H0Z" fill="#c4d6cc" />
          <path d="M0 290q300-65 580 10t620-5v265H0Z" fill="#c4dce0" opacity=".7" />
          <g stroke="#ae9659" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M305 276h825M380 276v54m170-54v54m170-54v54m170-54v54m170-54v54" />
            <path d="M345 270q95-165 195-15t190-5 190 5 128-64" strokeWidth="13" />
            <path d="m1035 207 43-33 40 8-27 22-29-2m20-23 4-22m-7 20-12-21" />
          </g>
          <g stroke="#b3cdd0" strokeWidth="3"><path d="M100 350h190m350 15h150m160-25h200M260 388h210m390 16h190" /></g>
        </>
      ) : city === "ha-noi" ? (
        <>
          <path d="M0 315q290-90 600 0t600 0v245H0Z" fill="#c6dcda" />
          <g fill="#b9cfbd"><circle cx="120" cy="240" r="72" /><circle cx="240" cy="254" r="51" /><circle cx="450" cy="244" r="58" /><circle cx="1040" cy="220" r="90" /><circle cx="1170" cy="252" r="60" /></g>
          <ellipse cx="770" cy="327" rx="122" ry="18" fill="#b8c9ae" />
          <g fill="#dddbc6" stroke="#9aa78e" strokeWidth="3">
            <path d="M702 305h136v-58H702Zm16-58h104v-48H718Zm17-48h70v-41h-70Z" />
            <path d="m692 247 14-12h128l14 12Zm17-49 14-13h94l14 13Zm18-42 17-16h52l17 16ZM757 140v-18h26v18" />
          </g>
          <g fill="#8fa48f"><path d="M719 305v-26a10 10 0 0 1 20 0v26Zm41 0v-27a10 10 0 0 1 20 0v27Zm41 0v-26a10 10 0 0 1 20 0v26ZM735 244v-24a9 9 0 0 1 18 0v24Zm51 0v-24a9 9 0 0 1 18 0v24ZM760 189v-17a10 10 0 0 1 20 0v17Z" /></g>
          <path d="M580 357h260m-105 23h160" stroke="#aec9c7" strokeWidth="3" />
        </>
      ) : city === "ho-chi-minh" ? (
        <>
          <g fill="#c1d0c8"><path d="M90 315V201h75v114m20 0V167h64v148m720 0V178h68v137m20 0V214h95v101m-827 0V224h72v91" /></g>
          <path d="M887 310V93l46-36 22 253Z" fill="#aebfb9" stroke="#91a8a0" strokeWidth="3" />
          <path d="m888 160 88-11-2 18-84 5" fill="#c2cfca" stroke="#91a8a0" strokeWidth="3" />
          <g fill="#ded9c2" stroke="#adad95" strokeWidth="3"><path d="M450 310v-69h353v69ZM600 310V198h57v112Z" /><path d="m430 241 38-36h129v36m61 0v-36h132l37 36M593 199l36-37 36 37" /></g>
          <circle cx="629" cy="220" r="13" fill="#eef1e4" stroke="#8b9e92" strokeWidth="2" /><path d="M629 211v10h8" stroke="#7f9287" strokeWidth="2" />
          <path d="M614 310v-45a15 15 0 0 1 30 0v45" fill="#9aaa9a" />
          <g stroke="#aabca9" strokeWidth="6"><path d="M350 309v-48m0 4-23-12m23 6 26-16m455 67v-48m0 4-23-12m23 6 26-16" /></g>
        </>
      ) : (
        <g stroke="#c0d1c6" strokeWidth="3"><path d="M620 160h280v170H620Zm-30 195h340m-190-25v25m90-25v25" /><path d="m680 220-20 17 20 17m160-34 20 17-20 17m-60-28-16 58" /></g>
      )}
    </svg>
  );
}
