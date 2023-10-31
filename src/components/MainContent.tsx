import React from 'react';
import ShowImg from '../img/show.jpg';
import WipImg from '../img/placeholder.jpg';
import XMAS_SHOW from '../img/tfm-xmas.jpg';
import MINA_FROM_TWICE from '../img/mina.jpg';
import classNames from 'classnames';
import Logo from '../img/logo.svg';

const socials = [
  {
    href: 'https://instagram.com/thefunkymonkeys.berlin',
    label: 'instagram',
  },
  {
    href: 'https://www.facebook.com/TheFunkyMonkeys.berlin',
    label: 'facebook',
  },
  {
    href: 'https://www.youtube.com/channel/UCLoLkx82y3VqsyKVQy2nC3w',
    label: 'youtube',
  },
  {
    href: 'https://vimeo.com/thefunkymonkeys',
    label: 'vimeo',
  },
];

export default function MainContent({
  handleDisclaimer,
  handleContact,
}: {
  handleDisclaimer: () => void;
  handleContact: () => void;
}) {
  const TOANS_STUPID_BULLSHIT_REQUEST_FOR_SHUTTING_DOWN_ORG: boolean =
    false;
  /**
   *
   * @returns boolean
   */
  const checksToansStupidXMASRequest = (): boolean => {
    const currentStupidBullshitDate = new Date();

    const stupidStartingXMASDate = new Date(
      `June 1, ${currentStupidBullshitDate.getFullYear()}`
    );
    const stupidEndXMASDate = new Date(
      `December 24, ${currentStupidBullshitDate.getFullYear()}`
    );

    const stupidStartingTimeInMS = stupidStartingXMASDate.getTime();
    const stupidEndXMASTimeInMS = stupidEndXMASDate.getTime();
    const currentTimeInMS = currentStupidBullshitDate.getTime();

    return (
      currentTimeInMS > stupidStartingTimeInMS &&
      currentTimeInMS < stupidEndXMASTimeInMS
    );
  };

  const checkArtistDate = () => {
    const currentStupidBullshitDate = new Date();

    const stupidStartingXMASDate = new Date(
      `October 25, ${currentStupidBullshitDate.getFullYear()}`
    );
    const stupidEndXMASDate = new Date(
      `December 12, ${currentStupidBullshitDate.getFullYear()}`
    );

    const stupidStartingTimeInMS = stupidStartingXMASDate.getTime();
    const stupidEndXMASTimeInMS = stupidEndXMASDate.getTime();
    const currentTimeInMS = currentStupidBullshitDate.getTime();

    return (
      currentTimeInMS > stupidStartingTimeInMS &&
      currentTimeInMS < stupidEndXMASTimeInMS
    );
  };

  const contents = [
    true,
    checksToansStupidXMASRequest(),
    checkArtistDate(),
  ];

  const trueContents = contents.filter((c) => c === true);

  const stupidClassName = classNames({
    'col-md-4 my-3 my-md-0 we-like-mina-sana-momo':
      trueContents.length === 3,
    'col-md-6 my-3 my-md-0 we-dont-like-jennie-from-blackpink':
      trueContents.length === 2,
  });

  const artistCallComponent = checkArtistDate() && (
    <div className={stupidClassName} id="fm-artist-call">
      <a href="https://forms.gle/s1an1aCATD8U9p4V9">
        <div className="w-100 hover-this">
          <div className="position-relative">
            <img
              src={Logo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'none',
              }}
              alt="The link to the Artist call form site."
            />
            <div
              className="position-absolute bottom-0 w-100 text-bg-dark p-3 text-center special"
              style={{ zIndex: 1 }}
            >
              <strong>WE ARE HIRING</strong>
            </div>
            <div className="position-absolute top-0 w-100 h-100 text-bg-dark d-flex justify-content-center align-items-center opacity-75">
              <h2 className="opacity-100">ARTIST CALL</h2>
            </div>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className={'container expand'} id="linda-content">
      <div className="d-none">
        <img src={MINA_FROM_TWICE} alt="MINA_FROM_TWICE" />
        <img src={MINA_FROM_TWICE} alt="MINA_FROM_TWICE" />
        <img src={MINA_FROM_TWICE} alt="MINA_FROM_TWICE" />
        <img src={MINA_FROM_TWICE} alt="MINA_FROM_TWICE" />
        <img src={MINA_FROM_TWICE} alt="MINA_FROM_TWICE" />
      </div>
      <div className="justify-content-center align-items-center d-flex flex-column">
        <div className="twice-mina-momo-sana p-5 d-flex justify-content-center flex-column align-items-center">
          <h1 id="title" className="mb-3">
            THE FUNKY MONKEYS
          </h1>
          <div className="row">
            <div className={stupidClassName}>
              <a
                href="https://funky-monkeys.show"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-100 hover-this" id="fm-show">
                  <div className="position-relative">
                    <img
                      src={ShowImg}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt="The link to the Show site."
                    />
                    <div className="position-absolute bottom-0 w-100 text-bg-dark p-3 text-center special">
                      <strong>THE FUNKY MONKEYS SHOW</strong>
                    </div>
                    <div className="position-absolute top-0 w-100 h-100 text-bg-dark d-flex justify-content-center align-items-center opacity-25"></div>
                  </div>
                </div>
              </a>
            </div>

            {checksToansStupidXMASRequest() && (
              <div className={stupidClassName}>
                <a
                  href="https://funky-monkeys.show/specials/xmas-special"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-100 hover-this" id="fm-show">
                    <div className="position-relative">
                      <img
                        src={XMAS_SHOW}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        alt="The link to the Show site."
                      />
                      <div className="position-absolute bottom-0 w-100 text-bg-dark p-3 text-center special">
                        <strong>XMAS DELIGHT</strong>
                      </div>
                      <div className="position-absolute top-0 w-100 h-100 text-bg-dark d-flex justify-content-center align-items-center opacity-25"></div>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {artistCallComponent}
            {TOANS_STUPID_BULLSHIT_REQUEST_FOR_SHUTTING_DOWN_ORG && (
              <div className={stupidClassName} id="fm-org">
                {/* TODO: add Org website when it is ready, with "rel" and "target" */}
                <a href="#">
                  <div className="w-100 hover-this disabled">
                    <div className="position-relative">
                      <img
                        src={WipImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        alt="The link to the Org site."
                      />
                      <div
                        className="position-absolute bottom-0 w-100 text-bg-dark p-3 text-center special"
                        style={{ zIndex: 1 }}
                      >
                        <strong>THE FUNKY MONKEYS ORG</strong>
                      </div>
                      <div className="position-absolute top-0 w-100 h-100 text-bg-dark d-flex justify-content-center align-items-center opacity-75">
                        <h2 className="opacity-100">COMING SOON</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div id="socials" className="cupid my-3">
            {socials.map((s, i) => (
              <a
                key={`socials-${i}`}
                className="social-link"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Link for ${s.href}`}
              >
                <i
                  className={`fa-brands fa-${s.label} fs-2 m-1`}
                  onClick={() => window.open(s.href, '_blank')}
                ></i>
              </a>
            ))}
          </div>
          <div
            id="disclaimer"
            className="set-me-free my-3 text-white"
          >
            <a
              href="#contact"
              className="px-1 footer-link"
              onClick={handleContact}
            >
              Kontakt
            </a>
            <a
              href="#disclaimer"
              className="px-1 footer-link"
              onClick={handleDisclaimer}
            >
              Datenschutzerklärung & Impressum
            </a>
          </div>
          <div id="copyright">
            <span>
              &copy; 2022 - {new Date().getFullYear()} | The Funky
              Monkeys Company - Alle Rechte vorbehalten.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
