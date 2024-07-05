// pages/index.js

import Link from "next/link";

export default function Companies() {
  return (
    <div className="bg-white">
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Company prizes for top 100
                </p>
              </div>
              {/* {Companies.map((data, indx) => (
                <div key={indx} className="flex gap-4 bg-white px-4 py-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/0d5f1e98-e9a3-49ba-91c0-a3bb06ef65d1.png")',
                    }}
                  ></div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[#111517] text-base font-medium leading-normal">
                      {data.title}
                    </p>
                    <Link
                      href={`companies${indx}`}
                      className="text-[#647987] text-sm font-normal leading-normal"
                    >
                      See more
                    </Link>
                    <p className="text-[#647987] text-sm font-normal leading-normal">
                      {data.discount} dicount on 1 year premium
                    </p>
                  </div>
                </div>
              ))} */}
              <div className="flex gap-4 bg-white px-4 py-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/0d5f1e98-e9a3-49ba-91c0-a3bb06ef65d1.png")',
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111517] text-base font-medium leading-normal">
                    Acme Corp
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    See more
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    10% dicount on 1 year premium
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white px-4 py-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/0819cb48-388c-4116-849b-501473e08901.png")',
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111517] text-base font-medium leading-normal">
                    Bolt
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    See more
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    Free access to headspace for 3 months
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white px-4 py-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/85d0d7fd-19ab-46c0-812c-71a1b014e43e.png")',
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111517] text-base font-medium leading-normal">
                    Candor
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    See more
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    1st prize: $3000. 2nd prize: $2000. 3rd prize: $1000. Top
                    100 players will receive a $50 Amazon gift card.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white px-4 py-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/bf26b465-cd6e-4adb-b7f8-29186c81c2c4.png")',
                  }}
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[#111517] text-base font-medium leading-normal">
                    DynaTech
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    See more
                  </p>
                  <p className="text-[#647987] text-sm font-normal leading-normal">
                    1st prize: $1500. 2nd prize: $1000. 3rd prize: $500. Top 100
                    players will receive a $25 Amazon gift card.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
