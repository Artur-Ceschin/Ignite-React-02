import { useContext } from 'react';
import { Button } from '../components/Button';
import { MoviesContext } from '../MoviesContext';

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useContext(MoviesContext)

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}