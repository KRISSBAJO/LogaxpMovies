import React, { useEffect } from 'react';
import errorpage from '../assets/images/Error.png';
import { Link } from 'react-router-dom';
import {Button} from '../components';

export default function ErrorPage() {

  useEffect(() => {
    document.title = 'Page Not Found/Movie App';
  });

  return (
    <section className="flex flex-col items-center justify-center  bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center my-4">
      
        <p className="text-7xl my-10 font-bold tracking-tight text-gray-900 dark:text-white">
          Page not found
        </p>
      <div className="max-w-lg">
        <img
          className="rounded-b"
          src={errorpage}
          alt="404 Page Not Found"
        />
        </div>
        <Link to="/">
       <Button>Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
