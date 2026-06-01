import React from 'react'
import BreadcrumbHeader from '../components/UI/BreadcrumbHeader'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <BreadcrumbHeader heading="Projects" url="Projects" />
      <div className="flex flex-wrap max-w-200 mx-auto py-15">
        <Link to="/projects/easy-harvesting" className="relative bg-[url('/src/assets/Project/img1.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Easy Harvesting</h4>
        </Link>
        <Link to="/projects/agriculture-farming" className="relative bg-[url('/src/assets/Project/img2.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Agriculture Farming</h4>
        </Link>
        <Link to="/projects/ecological-farming" className="relative bg-[url('/src/assets/Project/img3.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Ecological Farming</h4>
        </Link>
        <Link to="/projects/organic-solutions" className="relative bg-[url('/src/assets/Project/img4.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Organic Solutions</h4>
        </Link>
        <Link to="/projects/fresh-products" className="relative bg-[url('/src/assets/Project/img5.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Fresh Products</h4>
        </Link>
        <Link to="/projects/healthy-food" className="relative bg-[url('/src/assets/Project/img6.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
          <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-15">Healthy Food</h4>
        </Link>
      </div>
    </div>
  )
}

export default Projects