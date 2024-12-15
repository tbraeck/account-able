
const SearchResults = ({ politicians }) => {
  return (
    <div className="drop-shadow-2xl p-4 mt-3 border rounded-md border-4 border-gray-400 bg-white h-60">
      {politicians && politicians.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <ul className="divide-y divide-gray-200 border rounded-md shadow-md bg-white">
            {politicians.map((politician, index) => (
              <li key={index} className="p-4">
                <h3 className="text-lg font-semibold">{politician.name}</h3>
                <p>
                  <span className="font-medium">Position:</span> {politician.position}
                </p>
                <p>
                  <span className="font-medium">Party:</span> {politician.party}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {politician.email ? (
                    <a
                      href={`mailto:${politician.email}`}
                      className="text-blue-500 underline"
                    >
                      {politician.email}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {politician.phone || "N/A"}
                </p>
                <p>
                  <span className="font-medium">Office Address:</span>{" "}
                  {politician.address || "N/A"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No results found for the provided criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;
