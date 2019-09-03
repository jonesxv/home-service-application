import React from "react";

const SearchItem = (props) => {
  return ( 
    <section>
<div class="profile profile-smallimg">
<div class="profile__image"><img src="https://images.unsplash.com/photo-1492371451031-f0830e91b3d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" alt="Home Cleaning" /></div>
<div class="profile__info">
<h3>Home Cleaning</h3>
<p class="profile__info__extra"></p>
</div>
<div class="profile__stats">
<p class="profile__stats__title">Type</p>
<h5 class="profile__stats__info">Cleaning Service</h5>
</div>
<div class="profile__stats">
<p class="profile__stats__title">Size</p>
<h5>Medium</h5>
</div>
<div class="profile__stats">
<p class="profile__stats__title">Weight</p>
<h5 class="profile__stats__info">45.85 lbs</h5>
</div>
<div class="profile__cta"><a class="button">Adopt Home Cleaning!</a></div>
</div>
</section>
   );
}
 
export default SearchItem;