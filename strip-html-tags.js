String(`<p>Hey that's <span>somthing</span></p>`).replace(/(<([^>]+)>)/gi, '');

String(`<p>Hey that's <span>somthing</span></p>`).replace(/(<\S([^>]+)>)/gi, '');
