export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-999 bg-white relative-ns">
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease-out"
                className="wrap cc-menu w-nav cby-container"><a href="/" className="imageTeste brand w-nav-brand w--current"></a>
                <nav role="navigation" className="nav-menu w-nav-menu"><a href="/" className="menu-item-wrap w--current">
                    <div className="menu-item">Ini­cio</div>
                    <div className="menu-item-deco-line"></div>
                </a><a href="/vestidos" className="menu-item-wrap">
                    <div className="menu-item">Moda</div>
                    <div className="menu-item-deco-line"></div>
                </a><a href="/casa" className="menu-item-wrap">
                    <div className="menu-item">Casa</div>
                    <div className="menu-item-deco-line"></div>
                </a>
                {/* <!--<a href="/oficina" className="menu-item-wrap">-->
                <!--    <div className="menu-item">Oficina</div>-->
                <!--    <div className="menu-item-deco-line"></div>-->
                <!--</a>-->
                <!--<a href="/books" className="menu-item-wrap">-->
                <!--    <div className="menu-item">Books</div>-->
                <!--    <div className="menu-item-deco-line"></div>-->
                <!--</a>--> */}
                </nav>
                <div className="relative dib"><a href="javascript:cartData.open()" data-node-type="commerce-cart-open-link"
                    className="cart-button"><img
                    src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 489 489' style='enable-background:new 0 0 489 489;' xml:space='preserve'%3e%3cg%3e%3cpath d='M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z'/%3e%3c/g%3e%3c/svg%3e"
                    width="16" alt="" className="cart-icon"/>
                    <div className="ttu dib">Cart</div>
                    <div className="item-count">
                    <div className="portal-totalizers-ref">
                        <div className="amount-items-in-cart">
                        <div className="cartInfoWrapper"><span className="title"><span id="MostraTextoXml1">Resumo do
                                Carrinho</span></span>
                            <ul className="cart-info">
                                <li className="amount-products"><strong><span id="MostraTextoXml2">Total de Produtos:</span></strong> <em
                                    className="amount-products-em">2</em></li>
                                <li className="amount-items"><strong><span id="MostraTextoXml3">Itens:</span></strong> <em
                                    className="amount-items-em">2</em></li>
                                <li className="amount-kits"><strong><span id="MostraTextoXml4">Total de Kits:</span></strong> <em
                                    className="amount-kits-em"></em></li>
                                <li className="total-cart"><strong><span id="MostraTextoXml5">Valor Total:</span></strong> <em
                                    className="total-cart-em">R$ 396,17</em></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <script>
                        {/* $('.portal-totalizers-ref').minicart({
                        showMinicart: false,
                        showTotalizers: true,
                        showShippingOptions: false
                        }); */}
                    </script>

                    </div>
                    <div className="menu-item-deco-line"></div>
                </a></div>
                <div className="menu-button w-nav-button"><img
        src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='73.168px' height='73.168px' viewBox='0 0 73.168 73.168' style='enable-background:new 0 0 73.168 73.168;' xml:space='preserve'%3e%3cg%3e%3cg id='Navigation'%3e%3cg%3e%3cpath d='M4.242,14.425h64.684c2.344,0,4.242-1.933,4.242-4.324c0-2.385-1.898-4.325-4.242-4.325H4.242 C1.898,5.776,0,7.716,0,10.101C0,12.493,1.898,14.425,4.242,14.425z M68.926,32.259H4.242C1.898,32.259,0,34.2,0,36.584 c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.933,4.242-4.325C73.168,34.2,71.27,32.259,68.926,32.259z M68.926,58.742H4.242C1.898,58.742,0,60.683,0,63.067c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.935,4.242-4.325 C73.168,60.683,71.27,58.742,68.926,58.742z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
        width="20" alt="" className="menu-icon"/></div>
                <div className="w-nav-overlay"></div>
            </div>
        </header>
    )
}
