import logoImg from "@/assets/logo.svg"

function Logo() {
  return (
    <>
      <div className="logo">
        <a href="#home" className="block relative size-10">
          <img
            src={logoImg}
            alt="portfolio-image"
            width={40}
            height={40}
            className="block size-full object-cover"
          />
        </a>
      </div>
    </>
  )
}

export default Logo