import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import './Preview.css'

const Preview = () => {

  const videoRef = useRef();
  const [previewEnded, setPreviewEnded] = useState(false)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const videoUrl = "https://868419156.tapecontent.net/radosgw/jWv2OyGLWRSD29/5de1obpcbMc_ScN_z6C7PaaIMZV5rzVlcagfS_P3GIWwj-0O-fO-GZXvdjnzizgiEoe_ZBOx8nJn4EacbXxSs4ITioedgmOsCL1ItGJoHTQcwzBP6TrJM-2rqRZiQBPimfFmkyvsq3gUKowIihDoxusHhAuHdyqG1Rahzx8YtpNoTTIDHQsTfUhiD7hfHSrQvvHwVqbEdbz6Ru1qP_Y_LjFwhoSiRHZ6RlchdUERSw6FHiJElyDpJSoOSRmUPPa5eQMSISrbsv4tiZbSMFThVRWuIiNldSmd4eBlZw/Skyscraper+%282018%29?stream=1#t=600,700"
  const posterUrl = "https://prettymuchgeeks.com/wp-content/uploads/2018/07/skyscraper-2018-movie-wallpaper.jpg"
  const overview = "Will Sawyer is a former FBI agent and U.S. war veteran who now assesses security for skyscrapers. While he's on assignment in China, the world's tallest and safest building catches on fire -- and Will gets framed for it. Now a wanted man and on the run, he must find those responsible, clear his name and somehow rescue his family members when they become trapped inside the inferno."

  if (previewEnded) {
    return (
      <div className="preview-poster" style={{ backgroundSize: 'cover', backgroundImage: `url(${posterUrl})`, backgroundPosition: 'center center' }}>
        <div className="preview-poster-content">
          <div className="preview-poster-content-title">Skyscraper</div>
          <div className="preview-poster-content-btn">
            <button>Play</button>
            <button>More Info</button>
          </div>
          <div className="preview-poster-content-overview">{truncate(overview, 150)}</div>
        </div>
    </div>
    )
  }

  return (
    <div>
        <video onPause={() => setPreviewEnded(true)} loop={false} className="preview-video" autoPlay muted src={videoUrl}></video>
    </div>)
}

export default Preview