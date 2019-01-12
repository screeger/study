import React from 'react';
import PageNavigation from "./pageNavigation";

import "./prevPage.css";

class PrevPage extends PageNavigation {
  render () {
    return <PageNavigation direction="prev" {...this.props} />
  }
}

export default PrevPage;
