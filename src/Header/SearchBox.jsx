export default function SearchBox() {
  return (
    <div>
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative w-15">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="flex justify-end w-96 h-30 gap-x-2">
            <input
              type="search"
              id="default-search"
              className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-10 w-300 "
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white w-28 bg-red-500 hover:text-lg  font-bold  rounded-md "
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
