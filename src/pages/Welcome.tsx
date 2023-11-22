import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <section className="mt-3">
      <h2>Welcome!!</h2>

      <p>Welcome to this Challenge project.</p>
      You can go to:
      <ul>
        <li>
          <NavLink to="/collection">Collection</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </section>
  )
}
