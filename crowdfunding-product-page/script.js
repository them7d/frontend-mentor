var bookmark = document.querySelector('.bookmark'),
      select_reward_btn = document.querySelectorAll('.select__reward'),
      modal_selection = document.querySelector('.modal__selection'),
      close_module = document.querySelector('.close_module '),
      btn_continue = document.querySelectorAll('.btn_continue'),
      success_modal = document.querySelector('.success_modal'),
      i_got_btn = document.querySelector('.i_got_btn'),
      menu_btn = document.querySelector('.menu_btn'),
      menu = document.querySelector('.menu'),
      bookmark_text = document.querySelector('.bookmark>span');
bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmarked');
      if (bookmark_text.textContent === 'Bookmarked') {
            bookmark_text.textContent = 'Bookmark';
      } else {
            bookmark_text.textContent = 'Bookmarked';
      }
});
close_module.addEventListener('click', () => {
      modal_selection.classList.toggle('hidden');
});
menu_btn.addEventListener('click', () => {
      menu.classList.toggle('xs:hidden');
});
i_got_btn.addEventListener('click', () => {
      success_modal.classList.toggle('hidden');
});
for (let i = 0; i < select_reward_btn.length; i++) {
      btn_continue[i].addEventListener('click', () => {
            success_modal.classList.toggle('hidden');
            modal_selection.classList.toggle('hidden');
      });
      select_reward_btn[i].addEventListener('click', (el) => {
            modal_selection.classList.toggle('hidden');
      });
}