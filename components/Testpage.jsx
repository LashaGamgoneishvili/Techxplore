export default function Testpage() {
  return (
    <div
      class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      // style="--radio-dot-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(17,21,23)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e'); font-family: Manrope, &quot;Noto Sans&quot;, sans-serif;"
    >
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
            <div class="flex flex-col gap-3 p-4">
              <div class="flex gap-6 justify-between">
                <p class="text-[#111517] text-base font-medium leading-normal">
                  Question 1/4
                </p>
              </div>
              <div class="rounded bg-[#dce1e5]">
                <div class="w-[25%] h-2 rounded bg-[#111517]"></div>
              </div>
            </div>
            <h1 class="text-[#111517] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
              Which of these is not a primary color?
            </h1>
            <form class="flex flex-col gap-3 p-4">
              <div class="flex items-center gap-4 rounded-xl border border-solid border-[#dce1e5] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#dce1e5] bg-transparent text-transparent checked:border-[#111517] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111517]"
                  name="9a105435-e9f4-492c-9264-f9a7c8f81a55"
                  // checked=""
                />
                <div class="flex grow flex-col">
                  <p class="text-[#111517] text-sm font-medium leading-normal">
                    Red
                  </p>
                </div>
              </div>
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#dce1e5] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#dce1e5] bg-transparent text-transparent checked:border-[#111517] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111517]"
                  name="9a105435-e9f4-492c-9264-f9a7c8f81a55"
                />
                <div class="flex grow flex-col">
                  <p class="text-[#111517] text-sm font-medium leading-normal">
                    Blue
                  </p>
                </div>
              </label>
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#dce1e5] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#dce1e5] bg-transparent text-transparent checked:border-[#111517] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111517]"
                  name="9a105435-e9f4-492c-9264-f9a7c8f81a55"
                />
                <div class="flex grow flex-col">
                  <p class="text-[#111517] text-sm font-medium leading-normal">
                    Green
                  </p>
                </div>
              </label>
              <label class="flex items-center gap-4 rounded-xl border border-solid border-[#dce1e5] p-[15px]">
                <input
                  type="radio"
                  class="h-5 w-5 border-2 border-[#dce1e5] bg-transparent text-transparent checked:border-[#111517] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111517]"
                  name="9a105435-e9f4-492c-9264-f9a7c8f81a55"
                />
                <div class="flex grow flex-col">
                  <p class="text-[#111517] text-sm font-medium leading-normal">
                    Yellow
                  </p>
                </div>
              </label>
            </form>
            <div class="flex px-4 py-3">
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1f93e0] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
