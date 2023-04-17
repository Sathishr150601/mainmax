import CookieConsent from "react-cookie-consent";

export default function Cookie() {
  return (
    <div className="cookies z-[9999999] relative">
      <CookieConsent debug={true}>
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic. By clicking "I understand", you
        consent to our use of cookies.
      </CookieConsent>
    </div>
  );
}
