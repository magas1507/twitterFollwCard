import React, { useState } from "react";


// con children recuperamos todo lo que envuelve el componente, de esa forma pasa como prop
export function TwitterFollowCard({userName,initialIsFollowing, children}){
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' 

  const handleClick = () =>{
    setIsFollowing(!isFollowing);
  }

  return(
  <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar' 
          src={`https://unavatar.io/${userName}`} 
          alt="imagen" />
      </header>
      <div className='tw-followCard-info'> 
        <strong>{children}</strong>
        <span className='tw-followCard-infoUserName'> @{userName}</span>
      </div>
      <aside>
        <button className= {buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )  
}