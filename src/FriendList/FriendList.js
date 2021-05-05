import React from 'react';
import BookWormBeanie from '../assets/BookWormBeanie.svg';
import BookWormHat from '../assets/BookWormHat.svg';
import BookWormShoes from '../assets/BookWormShoes.svg';
import BookWormStache from '../assets/BookWormStache.svg';

export const FriendList = () => {

  return (
    <section className='friend-list-wrapper'>
      <div className='friend-card'>
        <img 
          className='bookworm-img' 
          src={BookWormHat} 
          alt='avatar'
        />
        <p><b>Catherine Dean</b></p>
        <p className='booklist'><b>Currently Reading:</b>
          <span className='current-books-list'>Harry Potter and the Sorcerer's Stone, The Giver, The Catcher in the Rye </span>
        </p>
      </div>
      <div className='friend-card'>
        <img className='bookworm-img' 
          src={BookWormStache} 
          alt='avatar'
        />
        <p><b>Joe Jiang</b></p>
        <p className='booklist'><b>Currently Reading:</b>
          <span className='current-books-list'>Harry Potter and the Chamber of Secrets, Fahrenheit 451</span>
        </p>
      </div>
      <div className='friend-card'>
        <img className='bookworm-img' src={BookWormBeanie} alt='avatar'/>
        <p><b>Kelly Dinneen</b></p>
        <p className='booklist'><b>Currently Reading:</b>
          <span className='current-books-list'>Harry Potter and the Prisoner of Azkaban, Anne of Green Gables, Little Women, Jane Erye </span>
        </p>
      </div>
      <div className='friend-card'>
        <img className='bookworm-img' src={BookWormShoes} alt='avatar'/>
        <p><b>Thao Ma</b></p>
        <p className='booklist'><b>Currently Reading:</b>
          <span className='current-books-list'>Harry Potter and the Goblet of Fire, The Great Gatsby, The Fault in Our Stars, The Hate U Give, The Hunger Games</span>
        </p>
      </div>
    </section>
  )
}