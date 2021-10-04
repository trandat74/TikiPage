import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import './header.scss';
function Header(props) {
  const { onSearch } = props;
  const [valueSearch, setValueSearch] = useState('')
  const handleSearch = (e) => {
    setValueSearch(e.target.value)
  }
  const history = useHistory()
  const path = useRouteMatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const pathnames= history.location.pathname;
    console.log(history.replace(`/?_limit=12&_page=1/${valueSearch}`))
    onSearch(valueSearch)
    // onSearch('datdasdas')
  }
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="logo">
          <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo" />
          <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="subLogo" />
        </a>
        <div className="header__content">
          <div className="header__search">
            <form onSubmit={handleSubmit} className="form__search">
              <input className="form__values" onChange={handleSearch} value={valueSearch} type="text" placeholder="Tìm sản phẩm, danh mục, thương hiệu bạn muốn ..." />
              <input type="submit" className="form__submit" value="Tìm kiếm" />
            </form>

          </div>
          <div className="login">
            <PersonOutlineIcon className="login__icon" />
            <div className="login__content">
              <p className="login__reg">Đăng nhập/ Đăng ký</p>
              <p className="login__account">Tài khoản <ArrowDropDownIcon /> </p>
            </div>
          </div>
          <div className="cart">

            <ShoppingCartIcon className="cart__icon" />
            <p className="cart__content">Giỏ hàng</p>

          </div>
        </div>

      </div>


    </header>
  );
}

export default Header;