const Footer = () => {
  return (
    <footer className="py-2 md:py-0 bg-black text-white border-t border-gray-800 flex justify-center">
      <div className="flex flex-col items-center justify-between gap-2 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href="https://github.com/anandp2002"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            anandp
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/anandp2002/Netflix-MERN"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            github
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
