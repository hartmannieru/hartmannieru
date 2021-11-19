import { Logotype } from "../Logotype"
import { Mode } from "../Mode"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Logotype />
          </div>
          <div className="header__mode">
            <Mode />
          </div>
        </div>
      </div>
    </header>
  )
}
