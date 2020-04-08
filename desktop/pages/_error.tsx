const css = require('./_error.module.css');

function Error({ statusCode }: any) {
  return (
    <div className={css.root}>
      <div className={css.header}>
        <h1 className={css.title}>
        {statusCode
          ? `${statusCode}`
          : ''}
        </h1>
      </div>
      <div className={css.center}>
       <div className={css.img} />
      </div>
      <div className={css.footer}>
        <p className={css.description}>Ой, похоже мы что то потеряли. Попробуйте начать с начала.</p>
        <a className={css.link} href={'/'}>Вернуться на главную ➜</a>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
