const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <>
    <footer className="z-50 w-full relative">
    <div className="container">
    <p className="text-[#8FA7BA] py-4">©{currentYear} copyright</p>
    </div>
  </footer>
    <div className="fixed bottom-0 w-full left-0 overflow-hidden h-full z-[1] before:content-[''] before:text-stone-50">
        <div className="bg-hero-pattern h-full w-full opacity-[13%] z-10 relative"></div>
        <span className="rounded-[33.875rem] bg-primary blur-[125px] w-[33.875rem] h-[33.875rem] block absolute z-0 -bottom-[430px] -left-[112px]"></span>
        <span className="rounded-[33.875rem] bg-accent blur-[150px] w-[33.875rem] h-[33.875rem] block absolute z-0 -bottom-[294px] -left-[240px] right-0 m-auto"></span>
        <span className="rounded-[29.5rem] bg-primary blur-[112.5px] w-[29.5rem] h-[29.5rem] block absolute z-[5px] -bottom-[306px] right-[215px]"></span>
        <span className="rounded-[18rem] bg-accent blur-[112.5px] w-[18rem] h-[18rem] block absolute z-0 bottom-[15px] -right-[50px]"></span>
      </div>
    </>
  );
}

export default Footer;