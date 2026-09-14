/* Kingdom Services - site scripts */

(function () {
  'use strict';

  var form = document.getElementById('quote-form');
  var note = document.getElementById('q-note');
  var submitBtn = document.getElementById('q-submit');

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

    if (submitBtn) submitBtn.disabled = true;
    setNote('Bezig met versturen...', null);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (result.success) {
          form.reset();
          setNote('Bedankt ' + name.split(' ')[0] + '. Je aanvraag is verstuurd, je hoort binnen twee werkdagen van ons.', 'ok');
        } else {
          setNote('Versturen is niet gelukt. Probeer het opnieuw of mail ons rechtstreeks.', 'error');
        }
      })
      .catch(function () {
        setNote('Versturen is niet gelukt. Probeer het opnieuw of mail ons rechtstreeks.', 'error');
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();
