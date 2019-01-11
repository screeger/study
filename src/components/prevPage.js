import PageNavigation from "./pageNavigation";

import "./prevPage.css";

class PrevPage extends PageNavigation {
  constructor(props) {
    super({ className: "prevPage", ...props });
  }
}

export default PrevPage;
