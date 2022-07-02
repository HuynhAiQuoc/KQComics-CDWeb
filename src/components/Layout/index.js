import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className='container-xxl'>
            <div className='row'>
                <Header />
            </div>
            <div className='row' style={{ 'minHeight': '100vh' }}>
                {children}
            </div>
            <div className='row'>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;