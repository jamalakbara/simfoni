import {
  Link,
} from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} >
      <div>
        <img src="/img/logo.png" alt="logo" />
      </div>
    </Link>
  )
}

export default Logo