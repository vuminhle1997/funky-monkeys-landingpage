import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import IntroVideo from './video/intro.mp4';
import DisclaimerModal from './components/DisclaimerModal';
import ContactModal from './components/ContactModal';
import Loader from './components/Loader';
import MainContent from './components/MainContent';
import { isIE, isSafari } from 'react-device-detect';

function App() {
  const [showDisclaimer, setShowDisclaimer] =
    useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleDisclaimer = useCallback(() => {
    setShowDisclaimer(!showDisclaimer);
  }, [showDisclaimer]);

  const handleContact = useCallback(() => {
    setShowContact(!showContact);
  }, [showContact]);
  const videoParentRef: any = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('DOMContentLoaded', () => {
        setLoading(false);
      });
    }

    if (isSafari && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', ''); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none';
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }

    return () =>
      window.removeEventListener('load', () => {
        setLoading(true);
      });
  }, []);

  // is IE
  if (isIE) {
    return (
      <main>
        <strong>
          IE is not supported. Download Chrome/Opera/Firefox
        </strong>
        <ul>
          <li>
            <a href="https://www.google.com/intl/de_de/chrome/">
              Chrome
            </a>
          </li>
          <li>
            <a href="https://www.mozilla.org/de/firefox/new/">
              Firefox
            </a>
          </li>
          <li>
            <a href="https://www.opera.com/de/browsers/opera">
              Safari
            </a>
          </li>
        </ul>
      </main>
    );
  }

  // Loading Done
  if (!loading && !shouldUseImage) {
    return (
      <main id={'julia-nguyen'}>
        <div id="222"></div>
        <div
          ref={videoParentRef}
          dangerouslySetInnerHTML={{
            __html: `
          <video id="introVideo" 
            autoPlay 
            muted 
            loop 
            playsinline
            preload="metadata"
            >
            <source src=${IntroVideo} type="video/mp4" />
          </video>
        `,
          }}
        />

        <div className="modals">
          <DisclaimerModal
            showDisclaimer={showDisclaimer}
            handleDisclaimer={handleDisclaimer}
          />
          <ContactModal
            showContact={showContact}
            handleContact={handleContact}
          />
        </div>
        <MainContent
          handleContact={handleContact}
          handleDisclaimer={handleDisclaimer}
        />
      </main>
    );
  }

  // Loading
  return (
    <>
      <main>
        <Loader />
      </main>
    </>
  );
}

export default App;
