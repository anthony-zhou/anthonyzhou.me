import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, {
  Dispatch, SetStateAction, useCallback, useEffect, useState,
} from 'react';

function SearchBar({ open, setOpen }
: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  const KEY_NAME_ESC = 'Escape';
  const KEY_EVENT_TYPE = 'keyup';
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[] | null>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (!query) {
      setResults(null);
      return;
    }
    fetch(`/api/search?query=${query}`)
      .then((res) => res.json())
      .then((res) => setResults(res.posts));
  };

  // Functions to close search box

  const handleBackgroundClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  }, [setOpen]);

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === KEY_NAME_ESC) {
      setOpen(false);
    }
  }, [setOpen]);

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);

  // Function to focus and disable scrolling when search box is open

  useEffect(() => {
    if (open) {
      document.body.className += 'h-screen overflow-hidden fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
    if (open && searchInputRef.current) {
      // Set focus to the input element
      searchInputRef.current.focus();
    }

    return () => {
      document.body.className = document.body.className.replace('h-screen overflow-hidden fixed', '');
    };
  }, [open]);

  return (
    <>
      <div>
        <button
          type="button"
          className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-sm"
          />
          <span className="text-md">Search</span>
        </button>
      </div>

      {open && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className="fixed overflow-auto !mx-0 top-0 left-0 w-screen h-screen bg-white bg-opacity-[0.98] flex justify-center cursor-default"
        onClick={handleBackgroundClick}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-col items-start md:w-1/2 w-full mt-96">
          <div className="w-full bg-white border-gray-100 border-[1px] rounded-md shadow-lg p-3 flex items-center gap-3">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-2xl text-gray-300"
            />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              className="appearance-none leading-tight focus:outline-none w-full text-xl placeholder-slate-200"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={(_) => {
                handleSearch();
              }}
            />
          </div>
          { results && (
          <div className="p-4">
            <h3 className="font-bold text-gray-500 mb-2">Results</h3>
            <ul>
              {results
                .map((result) => (
                  <div className="mb-4 ml-2 p-2 rounded-md">
                    <button
                      type="button"
                      className="text-left"
                      onClick={() => {
                        router.push(`/posts/${result.id}`).then(() => { setOpen(false); setQuery(''); });
                      }}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faFile}
                        />
                        {' '}
                        <h3 className="font-bold inline">{result.title}</h3>
                      </div>
                      <div>
                        {result.preview}
                      </div>
                    </button>
                  </div>
                ))}
            </ul>
          </div>
          )}
        </div>
      </div>
      )}

    </>
  );
}

export default SearchBar;
