/* Kingdom Services - site scripts */

(function () {
  'use strict';

  var form = document.getElementById('quote-form');
  var note = document.getElementById('q-note');

  if (!form || !note) return;

  function setNote(text, state) {
    note.textContent = text;
    if (state) {
      note.setAttribute('data-state', state);
    } else {
      note.removeAttribute('data-state');
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('q-name').value.trim();
    var email = document.getElementById('q-email').value.trim();

    if (!name || !email) {
      setNote('Vul minimaal je naam en e-mailadres in.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setNote('Dit e-mailadres klopt niet. Controleer het even.', 'error');
      return;
    }

    // TODO: hier de echte verzending koppelen zodra de site gehost wordt.
    // Opties: eigen PHP-endpoint, Formspree, of een serverless function.
    setNote(
      'Bedankt ' + name.split(' ')[0] + '. Zodra de site live staat wordt deze aanvraag direct verstuurd.',
      'ok'
    );
  });
})();
