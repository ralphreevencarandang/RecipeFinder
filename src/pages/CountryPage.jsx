import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import { useState } from "react";
const CountryPage = () => {
  const [data, loading, errorMessage] = useFetch("/list.php?a=list");
  const [searchTerm, setSearchTerm] = useState("");

  const areaFalgs = {
    American: "us",
    British: "gb",
    Canadian: "ca",
    Chinese: "cn",
    Croatian: "hr",
    Dutch: "nl",
    Egyptian: "eg",
    Filipino: "ph",
    French: "fr",
    Greek: "gr",
    Indian: "in",
    Irish: "ie",
    Italian: "it",
    Jamaican: "jm",
    Japanese: "jp",
    Kenyan: "ke",
    Malaysian: "my",
    Mexican: "mx",
    Moroccan: "ma",
    Polish: "pl",
    Portuguese: "pt",
    Russian: "ru",
    Spanish: "es",
    Thai: "th",
    Tunisian: "tn",
    Turkish: "tr",
    Ukrainian: "ua",
    Uruguayan: "uy",
    Vietnamese: "vn",
  };
  return (
        <section className="max-container padding-x">
        <div className="mb-10  flex flex-col justify-center items-center ">
            <div className="max-w-3xl w-full">
            <h1 className="font-kanit text-5xl  text-center py-10 max-sm:text-4xl">
                Browse Country
            </h1>
            <Search
                placeholder="Search country"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            </div>
        </div>

        {loading ? (
            <Spinner />
        ) : errorMessage ? (
            <p className="text-4xl text-center">{errorMessage}</p>
        ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.meals?.filter((d) => d.strArea.toLowerCase().includes(searchTerm.toLowerCase())).map((d, i) => (
                <div key={i} className="shadow-lg p-5 place-items-center bg-base-300 rounded-lg cursor-pointer"   >
                    <img
                    src={`https://flagcdn.com/160x120/${areaFalgs[d.strArea]  }.png`} alt="Area Flag" className="hover:scale-115 transition duration-150 ease-in"/>
                    <p className="font-kanit py-3 text-2xl">{d.strArea}</p>
                </div>
                ))}
            </div>
        )}
        </section>
  );
};

export default CountryPage;
