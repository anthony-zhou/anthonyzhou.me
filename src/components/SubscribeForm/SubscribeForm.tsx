import React, { useEffect } from 'react';

export default function SubscribeForm() {
  const [formVisible, setFormVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > 280) {
        setFormVisible(true);
      } else {
        setFormVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`py-2 pb-10 md:pb-2 md:fixed w-screen md:bottom-0 md:flex justify-center bg-white z-50 md:shadow-[0_-3px_10px_0_rgba(0,0,0,0.0785)] transition-opacity ${formVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <span className="flex items-center gap-4">
          <img src="/assets/images/az-logo.png" alt="Anthony Zhou logo" className="h-10" />
          {' '}
          Join the Anthony Zhou community
        </span>
        <form
          action="https://anthonyzhou.us4.list-manage.com/subscribe/post?u=5a6e7d003b2fa5aa5a64c2b43&amp;id=6caec32f58"
          method="post"
          name="mc-embedded-subscribe-form"
          className="appearance-none leading-tight rounded-sm focus:outline-none"
          target="_blank"
          noValidate
        >
          <div className="mc-field-group">
            <input
              type="email"
              placeholder="Email"
              name="EMAIL"
              className="p-1 w-36 text-sm border-[1px] border-[#EAEAEA] rounded-sm focus:outline-none"
              id="mce-EMAIL"
              autoComplete="on"
              required
            />
            <input type="submit" value="Subscribe" name="subscribe" className="p-1 bg-[#1D8A50] text-white text-sm cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}
