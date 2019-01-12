import React from 'react';
import PageNavigation from "./pageNavigation";

import "./nextPage.css";

class NextPage extends PageNavigation {
  render () {
    return <PageNavigation direction="next" {...this.props} />
  }
}

export default NextPage;
