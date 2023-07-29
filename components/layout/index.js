import React from 'react';
import Footer from '../footer/footer.component';
import Navigation from '../header/navigation.component';
import SectionTitle from '../section-title/section-title.component';
import Services from '../services/services.component';
import Hero from '../hero/hero.component';

function Layout({children}) {
   
    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;