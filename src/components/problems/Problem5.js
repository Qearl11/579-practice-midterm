import {useState, useEffect} from "react";
// @todo when you click the button you need to fetch from
//  'https://yesno.wtf/api', which returns a yes or no +
// an image. You also need to keep track of how many yes or nos
// are returned.
// Refer to the example and the comments below for more details.

const Problem5 = () => {
  const [yesOrNo, setYesOrNo] = useState(null)

  const getYesNos = () => {
    console.log('SOMETHING NEEDS TO HAPPEN HERE');
  }


  return (
    <div className='row'>
      <div className="col col-sm-4">
        <button onClick={getYesNos}>
          Get a yes or no
        </button>
        <h3>YES COUNT: @todo the number of "yes"</h3>
        <h3>NO COUNT: @todo the number of "no"</h3>
      </div>
      <div className="col col-sm-8">
        @todo THE IMAGES WILL SHOW UP HERE
        {yesOrNo !== null && <><h3>@todo the answer from yesno.wtf (either 'yes' or 'no')</h3><img src="@todoTHE_IMAGE_RETURNED_FROM_https://yesno.wtf/api" alt="@todo the answer from yesno.wtf (either 'yes' or 'no')" /></>}
      </div>
    </div>
  )
}

export default Problem5;
