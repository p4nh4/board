export default function AddGame() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
        បង្កើតហ្គេម
      </h1>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
          <div className="grid grid-cols-3 gap-4 mb-2 ">
            <div>
              <label
                for="grades"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ​​​​​ ថ្នាក់
              </label>
              <select
                id="grades"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ជ្រើសរើស ថ្នាក់</option>
                <option value="K">ថ្នាក់មេតេ្តយ្យ</option>
                <option value="F">ថ្នាក់ទី ០១</option>
                <option value="S">ថ្នាក់ទី ០២</option>
              </select>
            </div>
            <div>
              <label
                for="subjects"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ​​​​​ មុខវិជ្ជា
              </label>
              <select
                id="subjects"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ជ្រើសរើស មុខវិជ្ជា</option>
                <option value="KH">ភាសាខ្មែរ</option>
                <option value="MATH">គណិតវិទ្យា</option>
                <option value="ENG">ភាសាអង់គ្លេស</option>
              </select>
            </div>
            <div>
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <div
                  id="mega-menu-full"
                  class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
                >
                  <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <button
                        id="mega-menu-full-dropdown-button"
                        data-collapse-toggle="mega-menu-full-dropdown"
                        class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {" "}
                        Assets{" "}
                        <svg
                          class="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="mega-menu-full-dropdown"
                class="mt-1 border-gray-100 shadow-sm bg-gray-50 md:bg-white border-2 dark:bg-gray-800 dark:border-gray-100"
              >
                <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                  <ul>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg"
                      />
                    </li>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg "
                      />
                    </li>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg "
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg "
                      />
                    </li>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg "
                      />
                    </li>
                    <li>
                      <img
                        src="https://static4.depositphotos.com/1003495/371/i/600/depositphotos_3714567-stock-photo-beach-ball.jpg"
                        class="block p-3 rounded-lg "
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-2 ">
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </div>
            <div className=" col-start-1">
              <div class="flex items-center justify-center w-full mt-10">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
