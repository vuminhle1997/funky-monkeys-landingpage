import React, { useCallback, useEffect, useState } from 'react';
import IntroVideo from './video/intro.mp4';
import DisclaimerModal from './components/DisclaimerModal';
import ContactModal from './components/ContactModal';
import Loader from './components/Loader';
import MainContent from './components/MainContent';
import { isIE } from 'react-device-detect';

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

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('Loaded');
      setLoading(false);
    });
  }, []);

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

  return !loading ? (
    <main id={'julia-nguyen'}>
      <video id="introVideo" autoPlay muted loop src={IntroVideo} />
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
  ) : (
    <>
      <main>
        <Loader />
      </main>
    </>
  );
}

export default App;
