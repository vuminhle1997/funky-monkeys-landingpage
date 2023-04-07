import React from 'react';
import ShowImg from '../img/show.jpg';
import WipImg from '../img/placeholder.jpg';

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
  return (
    <div className={'container expand'} id="linda-content">
      <div className="justify-content-center align-items-center d-flex flex-column vh-100">
        <div className="twice-mina-momo-sana p-5 d-flex justify-content-center flex-column align-items-center">
          <h1 id="title" className="mb-3">
            THE FUNKY MONKEYS
          </h1>
          <div className="row">
            <div className="col-md-6 my-3 my-md-0">
              <a
                href="https://funky-monkeys.show"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-100 hover-this" id="fm-show">
                  <div className="position-relative">
                    <img
                      src={ShowImg}
                      width={300}
                      height={300}
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
            <div className="col-md-6 my-md-0" id="fm-org">
              {/* TODO: add Org website when it is ready, with "rel" and "target" */}
              <a href="#">
                <div className="w-100 hover-this disabled">
                  <div className="position-relative">
                    <img
                      src={WipImg}
                      width={300}
                      height={300}
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
              href="#"
              className="px-1 footer-link"
              onClick={handleContact}
            >
              Kontakt
            </a>
            <a
              href="#"
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
