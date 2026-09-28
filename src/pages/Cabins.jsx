// import Heading from "../ui/Heading";
// import Row from "../ui/Row";

import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    // getCabins().then((data) => console.log(data));
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      {/* <Row type="horizontal"> */}
      <h1 as="h1">All cabins</h1>
      <p>TEST</p>
      {/* </Row> */}
    </>
  );
}

export default Cabins;
