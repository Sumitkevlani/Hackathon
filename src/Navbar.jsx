// eslint-disable-next-line
function Navbar(){
   return (
      <div>
      
      <nav className="navbar navbar-expand-lg navbar-light" style = {{backgroundColor: "pink"}}>
      <button className="btn btn-outline-dark btn-lg" style = {{marginLeft: "10px"}}>
      <a className="navbar-brand" href="www.google.com">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACACAMAAADdy6w7AAAAZlBMVEUAAAD////7+/v4+PjT09Pj4+MvLy9OTk6UlJR3d3ebm5vy8vLt7e09PT2jo6OysrIdHR3BwcGpqakmJiZWVlaNjY2FhYVHR0fd3d1cXFxvb29CQkK4uLjMzMwZGRk3NzdlZWUODg4wunR8AAAELUlEQVRoge2b2baqMAyGyzyDDCqiOLz/S24FFNqkFKHx4qzzX7qs36I0aSaZ8VOx/7iFsuzoZ7g4bxKW/ghnByV7KvgJLvdYr+YHuPbM2M9wZsNGHahxNZuqIMZlHI3ZtLiUpzGHFCc8G/NMSlwr0NQnZQsuuok45avbggtEmmsR4myRxvbqRetxHsDFhDhwTtT+eQvuuObhVuNqQPOXLFuL80XabtGytTjwcGqb24BzRJoybNiEE33zklO5ASd4lNPSdStxJUerlDfBRhxHU0YoW3HcSQm/WLgON/Fgu/abhetw4zW+n7w2K3YcJ54N3OdwTp0Xoe+nF7sW/GFvBw8vfH8e10XjJeXuuitv3im1Zf5ThrPsQ7Ubt8ytgosz3p7p8XTI7Hcg5BR3V7BDt2nRuxbHRemZQZ2DHO5UHFbIV59KUsQ8UFz4wH/hqZNvj79i1r6E1anMl+DscuYnemRWx3UeNorvPb8p7gbEgatlk1oFbm531qiYw1kw4NkqX46zdD+byONxJwIa51Q53IGExliG4i5EtEkgM8GB+EObGhPB6T+UgyZ52Igj28rp9TviqGhcSPjBhb+gfXAmEU0IZN64goYmZutvHHadbhcoRQw4mD9pEaizDDga9wXzlB5ngZqFDpWANuBo9hKGKgNOb8AwyIW0AXenwF1kuFiMSnXogcW1jOzVoWlYh8spcMhBGXAU7vlRS3HqcPh73TBaj6MIwI5yHEXYgJc+XjgrIcDhJbIXjsTs8DJSh1NlWHpxzpUAh5c/Opw8WV0vvDBNhsNLSR1up179teR2R3JUsNuO0BDkPpPEzGduBJLcB/ViZC6aXaU40DzSImw3O5xYyNYjrEDd4WA/R4uQ1miHI8rKEcdCF/g9BU2vD2tpyjcskeCo6jfgFupxJIHmS2IjqsfFVLgyxnAmRaWvU2UhOGNPhWMnE8HBrrQ2VRHEmRQX+qCkBjgyU+hUAByR2xx0ywUcWQVu0KPvmXxwdGez151/OjJLH5TzOLpibacyEnB0he+XDsJRMQyK0P0jB+BoIpZe77hlgrMIHw/YnUFUGev0SRimuJgirex0wXBk1fYxoOZwEUXmxaa1P76hRlNvnxSQhHYhSerVynAkIdndkOKMu3baw5nB6U8XuNAWNLJ12zofuMM2vWZjsBU4vYVpofCHzDzoDCOOphJnaDQ+MYHFcPpOJ+hcoPMquowdVv3waRw9VwNSepDMGumI4ZOlwz+GjtYCOkcsHdzaWklKvpikekn+/txDemntNgsDuQe641OGM2Np+Plssml6GGX4Lsjm/uam4GJQbjmmcFDMygMxYvSkk6/zM375tETgBrZkDjPKg0mv2MPakotwT4e999wHuybVfv5PPlFdNNXxfDz5szO9CyYYY6d2lP8n6mQqZ+g1/Q9oqf5t3B/tNTI4GVgTnwAAAABJRU5ErkJggg==" width="30" height="30" alt="" />
      </a>
      <span class="sr-only">Foodpanda</span>
      </button>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav navbar-right pull-right me-auto" style={{marginLeft:"auto"}}>
      <li className="nav-item active" style={{marginLeft: "auto"}}>
        <a className="nav-link" href="www.google.com" style = {{fontWeight: "bold", color: "black"}}>LOGIN</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com" style = {{fontWeight: "bold", color: "black"}}>SIGNUP</a>
      </li>
      </ul>
      </div>
      </nav>
      </div>
   ); 
}
export default Navbar;