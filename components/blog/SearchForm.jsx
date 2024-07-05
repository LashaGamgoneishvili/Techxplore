import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchForm({ data, setBlog }) {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (search.length < 3) {
      return setBlog(data);
    }
    const searchedProduct = data.filter((product) =>
      product.title.toUpperCase().startsWith(search.toUpperCase())
    );

    if (submit && search.length > 2) {
      console.log("searchedProduct", searchedProduct);
      setBlog(searchedProduct);
    }
  }, [data, search, submit, setBlog]);

  function onhandleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 500);
  }

  return (
    <form className="p-8 bg-[#fbf9ff] dark:bg-[#3c3c3c]">
      <div className="flex items-center bg-white border border-gray-300 ">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search Keyword"
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 w-full h-full border-none  focus:outline-none"
        />

        <div
          className="bg-[#ff2020] p-5 h-full cursor-pointer"
          onClick={(e) => onhandleSubmit(e)}
        >
          <GoSearch className="text-white" />
        </div>
      </div>
      <button
        className="mt-4 bg-[#ff2020] text-white px-4 py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 w-full"
        onClick={(e) => onhandleSubmit(e)}
      >
        SEARCH
      </button>
    </form>
  );
}

export default SearchForm;
