import React from 'react'

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover object-left" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
  )
}
