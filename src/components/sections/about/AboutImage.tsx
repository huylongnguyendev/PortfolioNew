import portfolioImg from "@/assets/portfolio.jpg"

function AboutImage() {
  return (
    <>
      <div className="relative w-full md:w-1/3 h-100 rounded-md overflow-hidden shadow-md shadow-slate-400">
        <img
          src={portfolioImg}
          alt="me-graduate-image"
          className="absolute object-cover size-full"
        />
      </div>
    </>
  )
}

export default AboutImage