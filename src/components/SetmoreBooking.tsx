import { useEffect } from 'react';

interface SetmoreBookingProps {
  isButton?: boolean;
}

const SetmoreBooking = ({ isButton = false }: SetmoreBookingProps) => {
  useEffect(() => {
    // Create and inject the Setmore script
    const script = document.createElement('script');
    script.id = 'setmore_script';
    script.type = 'text/javascript';
    script.src = 'https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('setmore_script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  if (isButton) {
    return (
      <a
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/51e37050-f508-4918-857d-23c6fd274654"
        className="btn btn-secondary"
      >
        Book Now
      </a>
    );
  }

  return (
    <div className="setmore-container">
      <a
        style={{ float: 'none' }}
        id="Setmore_button_iframe"
        href="https://booking.setmore.com/scheduleappointment/51e37050-f508-4918-857d-23c6fd274654"
      >
        <img
          border="0"
          src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
          alt="Click here to book the appointment using setmore"
        />
      </a>
    </div>
  );
};

export default SetmoreBooking;
