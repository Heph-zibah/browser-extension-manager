import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center dark:text-[#ffffff] mt-5">
      <span>Created by </span>
      <a
        className=" hover:underline hover:underline-offset-4 text-[#fb2c36] font-bold dark:text-red-400"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Tosin Daramola
      </a>
    </footer>
  );
}

export default Footer