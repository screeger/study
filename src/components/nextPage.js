import PageNavigation from "./pageNavigation";

import "./nextPage.css";

class NextPage extends PageNavigation {
  constructor(props) {
    super({ className: "nextPage", ...props });
  }
}

export default NextPage;
