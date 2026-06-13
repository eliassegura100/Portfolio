import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [stage, setStage] = useState('enter');
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevPathname = useRef(location.pathname);
  const incomingChildren = useRef(null);

  useEffect(() => {
    // Only trigger transition if the path actually changed
    if (location.pathname === prevPathname.current) return;

    // Store the incoming children BEFORE starting exit
    incomingChildren.current = children;

    // Start exit — displayChildren still holds the OLD page
    setStage('exit');
  }, [location.pathname]);

  const handleAnimationEnd = () => {
    if (stage === 'exit') {
      // Exit complete — now swap to new page and play enter
      prevPathname.current = location.pathname;
      setDisplayChildren(incomingChildren.current);
      setStage('enter');
    }
  };

  return (
    <div
      className={`page-transition ${stage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayChildren}
    </div>
  );
}