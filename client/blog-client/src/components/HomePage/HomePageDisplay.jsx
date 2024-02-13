import PropTypes from "prop-types";
import ArticleDisplay from "../utilities/ArticleDisplay";

const HomePageDisplay = ({ loading, displayDataArray }) => {
  return (
    <>
      {loading ? null : (
        <div className="flex flex-col w-screen items-center">
          <div className="grid grid-cols-4 gap-2 grid-rows-3 [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-3 w-10/12 mt-4">
            {/* Render the first 7 items */}
            {displayDataArray.slice(0, 7).map((displayData) => (
              /* Target the container to specialize it in css cause tailwind doesn't seem to work */
              <ArticleDisplay
                key={displayData.id}
                displayData={displayData}
                classNameSpecifier="big-article-container"
              />
            ))}
          </div>
          {/* Render the content after the 7th child in a container */}
          <div className="grid grid-cols-3 gap-2 grid-rows-1 w-10/12 mt-4 mb-8">
            {displayDataArray.slice(7).map((displayData) => (
              <ArticleDisplay key={displayData.id} displayData={displayData} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

HomePageDisplay.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  displayDataArray: PropTypes.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  loading: PropTypes.bool.isRequired,
};

export default HomePageDisplay;
