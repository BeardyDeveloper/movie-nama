import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

export const RouteGuard = ({ children }: any) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const token = getCookie('token');
    const publicPaths = ['/login'];
    const path = url.split('?')[0] as string;

    if (!token) {
      if (!publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
        });
      } else {
        setAuthorized(true);
      }
    } else {
      if (publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
        });
      } else {
        setAuthorized(true);
      }
    }
  }

  return authorized && children;
};
