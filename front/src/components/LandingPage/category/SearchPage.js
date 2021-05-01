import React, { useState, useEffect } from "react";

function SearchPage(props) {
  let current = props.location.state.SearchPost.current;
  const [Searched, setSearched] = useState(null);
  console.log(current);
  useEffect(() => {
    setSearched(current);

    //axios getLandingPage()
  }, [current]);

  return <div></div>;
}

export default SearchPage;
