import React from 'react'
import './nav.css'
export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">RC.G</a>
    <button class="navbar-toggler bg2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href='#'>About Us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      
    </div>
  )
}
