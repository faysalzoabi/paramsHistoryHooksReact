import React from 'react'
import {useLocation, useHistory} from 'react-router';

function About() {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  return (
    <div>
      <div>
        About
      </div>
      <div>
        {location.pathname}
      </div>
      <div>
        From = {location.state.from}
      </div>
      <button onClick={goBackHandle}>Go Back</button>
    </div>
  )

  function goBackHandle(){
    history.goBack()
  }
}

export default About
