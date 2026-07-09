export default function Footer({
  contained = true,
}: {
  contained?: boolean;
}) {
  return (
    <footer className="w-full font-sans">
      <div
        className={`rounded-t-[32px] bg-neutral-100 py-14 md:rounded-t-[48px] ${
          contained ? "mx-auto max-w-[2080px]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-[2080px] flex-col justify-between gap-8 px-6 text-sm text-neutral-500 md:flex-row md:px-10">

          <div>
            <p className="mb-3 text-2xl font-semibold text-neutral-700">
              TCPS Lab
            </p>
            <p>Terramechanics and Cyber-Physical Systems Laboratory</p>
            <p>
              Department of Convergence Biosystems Engineering, Chonnam
              National University
            </p>
          </div>

          <div className="text-left md:text-right">
            <p>CALS Bldg 2, Room 222</p>
            <p>77, Yongbong-ro, Buk-gu, Gwangju, 61186, Republic of Korea</p>
            <p className="mt-3 text-neutral-400">
              Copyright © 2024 TCPS Lab &nbsp;|&nbsp; Developed and designed
              by Jihwan Park
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
