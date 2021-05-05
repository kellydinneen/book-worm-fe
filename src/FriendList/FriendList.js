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
          <span className='current-books-list'>Harry Potter and the Sorcerer's Stone, The Giver</span>
        </p>
      </div>
      <div className='friend-card'>
        <img className='bookworm-img' 
          src={BookWormStache} 
          alt='avatar'
        />
        <p><b>Joe Jiang</b></p>
        <p className='booklist'><b>Currently Reading:</b>
          <span className='current-books-list'>Harry Potter and the Chamber of Secrets</span>
        </p>
      </div>
    </section>
  )
}