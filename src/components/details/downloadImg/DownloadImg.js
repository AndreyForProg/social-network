import React from 'react'
import downloadSvg from '../../../assetc/download.svg'

const DownloadImg = (props) => {
  return <div>
    {props.download ? <img src={downloadSvg} alt=""/> : null}
  </div>
}

export default DownloadImg