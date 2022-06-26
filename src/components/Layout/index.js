import Header from './Header';

function Layout({ children }) {
    return (
        <div className='container-xxl'>
            <div className='row'>
                <Header />
            </div>
            <div className='row' style={{'minHeight': '100vh'}}>
                {children}
            </div>
        </div>
    );
}

export default Layout;