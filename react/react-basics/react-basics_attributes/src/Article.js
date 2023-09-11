export function Article() {
    return (
      <article className="article">
        <h2 className="article__title">Cosmic latte</h2>
        <label htmlFor="article__input">Do you want to read more interesting articles? Leave us your email.</label>
        <input type="email" id="article__input"></input>
        <a
          className="article__link"
          href="https://en.wikipedia.org/wiki/Cosmic_latte"
        >Check this cool article about <strong>Cosmic latte</strong>!</a>
      </article>
    );
  }